/**
 * ═══════════════════════════════════════════════════════════
 *  FasalBima AI Engine  –  ai-engine.js
 *  Bilingual (Hindi + English) crop verification &
 *  damage detection with insurance claim gating
 * ═══════════════════════════════════════════════════════════
 */

'use strict';

/* ─────────────────────────────────────────────
   CROP KNOWLEDGE BASE
   Each crop has visual signatures the AI "looks for"
───────────────────────────────────────────── */
const CROP_SIGNATURES = {
  wheat:      { name_hi: 'गेहूं',      name_en: 'Wheat',      color_range: [35, 80],  texture: 'fine',   ndvi_healthy: [0.55, 0.85], emoji: '🌾' },
  rice:       { name_hi: 'धान/चावल',  name_en: 'Rice',       color_range: [90, 130], texture: 'medium', ndvi_healthy: [0.60, 0.88], emoji: '🌾' },
  maize:      { name_hi: 'मक्का',      name_en: 'Maize',      color_range: [60, 100], texture: 'coarse', ndvi_healthy: [0.50, 0.80], emoji: '🌽' },
  soybean:    { name_hi: 'सोयाबीन',   name_en: 'Soybean',    color_range: [80, 120], texture: 'medium', ndvi_healthy: [0.52, 0.82], emoji: '🌱' },
  cotton:     { name_hi: 'कपास',       name_en: 'Cotton',     color_range: [50, 90],  texture: 'fluffy', ndvi_healthy: [0.45, 0.78], emoji: '🌿' },
  groundnut:  { name_hi: 'मूंगफली',   name_en: 'Groundnut',  color_range: [40, 80],  texture: 'low',    ndvi_healthy: [0.40, 0.72], emoji: '🥜' },
  sugarcane:  { name_hi: 'गन्ना',      name_en: 'Sugarcane',  color_range: [90, 140], texture: 'tall',   ndvi_healthy: [0.62, 0.90], emoji: '🎋' },
  onion:      { name_hi: 'प्याज',      name_en: 'Onion',      color_range: [30, 70],  texture: 'bulb',   ndvi_healthy: [0.38, 0.68], emoji: '🧅' },
};

/* ─────────────────────────────────────────────
   DAMAGE PROFILES
   Simulates what each damage type looks like
───────────────────────────────────────────── */
const DAMAGE_PROFILES = {
  flood:    { name_hi: 'बाढ़',       name_en: 'Flood',    emoji: '🌊', signature: 'waterlogged', ndvi_impact: -0.38, color_shift: 'brown',   severity_base: [45, 85] },
  drought:  { name_hi: 'सूखा',      name_en: 'Drought',  emoji: '☀️',  signature: 'wilted',      ndvi_impact: -0.32, color_shift: 'yellow',  severity_base: [30, 70] },
  hail:     { name_hi: 'ओलावृष्टि', name_en: 'Hail',     emoji: '🌨️', signature: 'bruised',     ndvi_impact: -0.42, color_shift: 'patchy',  severity_base: [40, 90] },
  fire:     { name_hi: 'आग',        name_en: 'Fire',     emoji: '🔥', signature: 'charred',     ndvi_impact: -0.75, color_shift: 'black',   severity_base: [60, 95] },
  pest:     { name_hi: 'कीट',       name_en: 'Pest',     emoji: '🐛', signature: 'eaten_holes', ndvi_impact: -0.25, color_shift: 'spotted', severity_base: [20, 60] },
  cyclone:  { name_hi: 'चक्रवात',  name_en: 'Cyclone',  emoji: '🌀', signature: 'lodging',     ndvi_impact: -0.50, color_shift: 'broken',  severity_base: [50, 88] },
};

/* ─────────────────────────────────────────────
   IMAGE ANALYSIS RESULT STRUCTURE
───────────────────────────────────────────── */
class AIAnalysisResult {
  constructor() {
    this.timestamp        = new Date().toISOString();
    this.imageHash        = null;
    this.cropDetected     = false;
    this.cropType         = null;
    this.cropConfidence   = 0;
    this.damageDetected   = false;
    this.damageSeverity   = 0;         // 0–100
    this.damageType       = null;
    this.ndviScore        = 0;         // 0–1
    this.healthScore      = 0;         // 0–100 (higher = healthier)
    this.claimEligible    = false;     // TRUE only if crop present AND damage detected
    this.rejectionReason  = null;      // Why claim was rejected
    this.estimatedLoss    = 0;         // ₹ amount
    this.recommendations  = [];
    this.satelliteData    = {};
    this.processingTime   = 0;         // ms
  }
}

/* ─────────────────────────────────────────────
   CORE AI ENGINE
───────────────────────────────────────────── */
const AIEngine = {

  /** Minimum damage severity required to be claim-eligible */
  CLAIM_DAMAGE_THRESHOLD: 25,

  /** Minimum crop detection confidence to proceed */
  CROP_CONFIDENCE_THRESHOLD: 60,

  /**
   * Main entry point – analyse an uploaded image file
   * Returns a Promise<AIAnalysisResult>
   */
  analyzeImage(imageFile, selectedCropHint = null, selectedDamageHint = null) {
    return new Promise((resolve, reject) => {
      if (!imageFile) { reject(new Error('No image provided')); return; }

      const startTime = Date.now();
      const reader    = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const result = this._performAnalysis(img, imageFile, selectedCropHint, selectedDamageHint, startTime);
          resolve(result);
        };
        img.onerror = () => reject(new Error('Image could not be loaded'));
        img.src = e.target.result;
      };
      reader.onerror = () => reject(new Error('File could not be read'));
      reader.readAsDataURL(imageFile);
    });
  },

  /**
   * Internal analysis pipeline using canvas pixel sampling
   */
  _performAnalysis(img, file, cropHint, damageHint, startTime) {
    const result = new AIAnalysisResult();
    result.imageHash = this._hashImage(file);

    // ── STEP 1: Pixel-based colour analysis ──────────────────
    const pixelData = this._samplePixels(img);
    const colorProfile = this._analyzeColorProfile(pixelData);

    // ── STEP 2: Crop Detection ────────────────────────────────
    const cropAnalysis = this._detectCrop(colorProfile, cropHint);
    result.cropDetected   = cropAnalysis.detected;
    result.cropType       = cropAnalysis.crop;
    result.cropConfidence = cropAnalysis.confidence;

    // ── STEP 3: NDVI Simulation ───────────────────────────────
    result.ndviScore  = this._simulateNDVI(colorProfile, cropAnalysis.crop);
    result.healthScore = Math.round(result.ndviScore * 100);

    // ── STEP 4: Damage Detection ──────────────────────────────
    if (result.cropDetected && result.cropConfidence >= this.CROP_CONFIDENCE_THRESHOLD) {
      const damageAnalysis  = this._detectDamage(colorProfile, result.ndviScore, damageHint, cropAnalysis.crop);
      result.damageDetected = damageAnalysis.detected;
      result.damageSeverity = damageAnalysis.severity;
      result.damageType     = damageAnalysis.damageType;
    }

    // ── STEP 5: Claim Eligibility Gate ────────────────────────
    result.claimEligible  = this._evaluateClaimEligibility(result);
    result.rejectionReason = result.claimEligible ? null : this._getRejectionReason(result);

    // ── STEP 6: Financial Estimation ─────────────────────────
    result.estimatedLoss = result.claimEligible ? this._estimateLoss(result) : 0;

    // ── STEP 7: Satellite Data Simulation ────────────────────
    result.satelliteData = this._generateSatelliteData(result);

    // ── STEP 8: Recommendations ───────────────────────────────
    result.recommendations = this._generateRecommendations(result);

    result.processingTime = Date.now() - startTime;
    return result;
  },

  /** Sample pixels from canvas for analysis */
  _samplePixels(img) {
    const canvas = document.createElement('canvas');
    const size   = 64; // sample grid
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, size, size);
    const data = ctx.getImageData(0, 0, size, size).data;

    let rSum = 0, gSum = 0, bSum = 0;
    let greenPixels = 0, brownPixels = 0, yellowPixels = 0, darkPixels = 0;
    const pixelCount = size * size;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      rSum += r; gSum += g; bSum += b;

      // Classify pixels
      if (g > r && g > b && g > 60)          greenPixels++;
      if (r > 100 && g < 100 && b < 80)      brownPixels++;
      if (r > 160 && g > 140 && b < 80)      yellowPixels++;
      if (r < 60 && g < 60 && b < 60)        darkPixels++;
    }

    return {
      avgR: rSum / pixelCount,
      avgG: gSum / pixelCount,
      avgB: bSum / pixelCount,
      greenRatio:  greenPixels  / pixelCount,
      brownRatio:  brownPixels  / pixelCount,
      yellowRatio: yellowPixels / pixelCount,
      darkRatio:   darkPixels   / pixelCount,
      brightness:  (rSum + gSum + bSum) / (pixelCount * 3),
    };
  },

  /** Build colour profile metrics */
  _analyzeColorProfile(pixels) {
    const greenDominance = (pixels.avgG - (pixels.avgR + pixels.avgB) / 2) / 128;
    const vegIndex       = (pixels.avgG - pixels.avgR) / (pixels.avgG + pixels.avgR + 1e-6);
    return { ...pixels, greenDominance, vegIndex };
  },

  /** Detect whether a crop is present in the image */
  _detectCrop(profile, hint) {
    // Calculate raw vegetation index (simulated VARI)
    const vegScore = Math.max(0, profile.vegIndex * 100 + 50);  // normalise to 0–100
    const hasVegetation = profile.greenRatio > 0.10 || vegScore > 35;

    // Base detection on actual image data
    let confidence, detected, crop;

    if (!hasVegetation && profile.greenRatio < 0.05) {
      // Very little green → probably not agricultural
      detected   = false;
      confidence = Math.round(20 + Math.random() * 20);
      crop       = null;
      return { detected, confidence, crop };
    }

    // Map to most likely crop using colour analysis + random variation
    const cropKeys = Object.keys(CROP_SIGNATURES);
    if (hint && CROP_SIGNATURES[hint]) {
      crop = hint;
      confidence = Math.round(65 + Math.random() * 30);
    } else {
      // Auto-detect based on color profile
      crop = this._matchCropByColor(profile, cropKeys);
      confidence = Math.round(55 + profile.greenRatio * 80 + Math.random() * 20);
    }

    confidence = Math.min(confidence, 97);
    detected   = confidence >= this.CROP_CONFIDENCE_THRESHOLD;

    return { detected, confidence, crop };
  },

  /** Match a crop type based on colour profile */
  _matchCropByColor(profile, cropKeys) {
    // Simple heuristic: tall green crops → rice/sugarcane, lighter → wheat, etc.
    const { avgR, avgG, avgB, greenRatio } = profile;
    if (greenRatio > 0.4 && avgG > 100) return 'rice';
    if (greenRatio > 0.25 && avgB < 80)  return 'maize';
    if (avgR > avgG && avgG > avgB)       return 'wheat';
    if (greenRatio > 0.3)                 return 'soybean';
    return cropKeys[Math.floor(Math.random() * cropKeys.length)];
  },

  /** Simulate NDVI based on pixel data */
  _simulateNDVI(profile, crop) {
    const baseSig = crop && CROP_SIGNATURES[crop]
      ? CROP_SIGNATURES[crop].ndvi_healthy
      : [0.40, 0.75];

    // NDVI = (NIR - RED) / (NIR + RED); simulate using green dominance
    const rawNDVI = 0.3 + profile.greenRatio * 0.8 + Math.random() * 0.15;
    const bounded = Math.min(baseSig[1], Math.max(0.1, rawNDVI));
    return parseFloat(bounded.toFixed(2));
  },

  /** Detect damage type and severity */
  _detectDamage(profile, ndvi, hint, crop) {
    const cropSig    = CROP_SIGNATURES[crop];
    const healthyMin = cropSig ? cropSig.ndvi_healthy[0] : 0.45;

    // NDVI drop from expected healthy minimum
    const ndviDrop = Math.max(0, healthyMin - ndvi);

    // Strong signal: high brown/yellow ratios or dark areas suggest damage
    const stressSignals = profile.brownRatio * 100 + profile.yellowRatio * 80 + profile.darkRatio * 60;

    // Composite damage score
    let rawSeverity = ndviDrop * 120 + stressSignals + Math.random() * 15;
    rawSeverity     = Math.min(98, Math.max(0, rawSeverity));

    const detected    = rawSeverity >= this.CLAIM_DAMAGE_THRESHOLD;
    const severity    = Math.round(rawSeverity);

    // Identify damage type
    let damageType;
    if (hint && DAMAGE_PROFILES[hint]) {
      damageType = hint;
    } else {
      damageType = this._inferDamageType(profile, severity);
    }

    return { detected, severity, damageType };
  },

  /** Infer the most likely damage type from pixel data */
  _inferDamageType(profile, severity) {
    const { brownRatio, darkRatio, yellowRatio, avgB } = profile;
    if (darkRatio > 0.15)                    return 'fire';
    if (brownRatio > 0.20 && avgB > 100)     return 'flood';
    if (yellowRatio > 0.25 && brownRatio > 0.15) return 'drought';
    if (brownRatio > 0.15)                   return 'pest';
    if (severity > 55)                       return 'hail';
    return 'drought'; // fallback
  },

  /**
   * CLAIM ELIGIBILITY GATE
   * Returns true ONLY when:
   *   1. Crop is detected with sufficient confidence
   *   2. Damage is detected above threshold
   */
  _evaluateClaimEligibility(result) {
    if (!result.cropDetected)                                  return false;
    if (result.cropConfidence < this.CROP_CONFIDENCE_THRESHOLD) return false;
    if (!result.damageDetected)                                return false;
    if (result.damageSeverity < this.CLAIM_DAMAGE_THRESHOLD)  return false;
    return true;
  },

  /** Human-readable reason for claim rejection */
  _getRejectionReason(result) {
    if (!result.cropDetected || result.cropConfidence < this.CROP_CONFIDENCE_THRESHOLD) {
      return {
        code: 'NO_CROP',
        message_hi: '❌ फसल की पहचान नहीं हो सकी। कृपया फसल के पास खींची गई स्पष्ट फोटो अपलोड करें।',
        message_en: '❌ No crop detected. Please upload a clear photo taken near your crop.',
      };
    }
    if (!result.damageDetected || result.damageSeverity < this.CLAIM_DAMAGE_THRESHOLD) {
      return {
        code: 'NO_DAMAGE',
        message_hi: `✅ आपकी ${CROP_SIGNATURES[result.cropType]?.name_hi || 'फसल'} स्वस्थ दिख रही है (नुकसान ${result.damageSeverity}%)। बीमा दावा केवल क्षतिग्रस्त फसलों के लिए होता है।`,
        message_en: `✅ Your ${CROP_SIGNATURES[result.cropType]?.name_en || 'crop'} looks healthy (damage ${result.damageSeverity}%). Insurance claims are only for damaged crops.`,
      };
    }
    return {
      code: 'UNKNOWN',
      message_hi: 'दावा पात्रता निर्धारित नहीं हो सकी।',
      message_en: 'Claim eligibility could not be determined.',
    };
  },

  /** Estimate monetary loss in Rupees */
  _estimateLoss(result) {
    const baseRatePerHectare = {
      wheat:     45000, rice:      55000, maize:     38000,
      soybean:   42000, cotton:    68000, groundnut: 35000,
      sugarcane: 80000, onion:     50000,
    };
    const rate      = baseRatePerHectare[result.cropType] || 40000;
    const areaHa    = 1.5; // default; will be overridden by user input
    const lossRatio = result.damageSeverity / 100;
    const raw       = rate * areaHa * lossRatio;
    // Add some realistic variation
    const variation = 0.85 + Math.random() * 0.3;
    return Math.round(raw * variation / 100) * 100; // round to nearest 100
  },

  /** Generate simulated satellite analysis data */
  _generateSatelliteData(result) {
    const ndvi = result.ndviScore;
    return {
      ndvi:           ndvi,
      ndvi_label:     ndvi > 0.65 ? 'Healthy' : ndvi > 0.40 ? 'Moderate' : 'Stressed',
      evi:            parseFloat((ndvi * 0.85 + Math.random() * 0.05).toFixed(2)),
      savi:           parseFloat((ndvi * 0.78 + Math.random() * 0.04).toFixed(2)),
      healthy_pct:    Math.max(0, Math.round(100 - result.damageSeverity - Math.random() * 5)),
      moderate_pct:   Math.round(result.damageSeverity * 0.35),
      severe_pct:     Math.round(result.damageSeverity * 0.65),
      gps_area:       '24.52°N, 77.91°E',
      sentinel_date:  new Date(Date.now() - 86400000 * 2).toLocaleDateString('en-IN'),
      cloud_cover:    Math.round(Math.random() * 20) + '%',
    };
  },

  /** Generate actionable crop recommendations */
  _generateRecommendations(result) {
    const recs = [];
    if (!result.cropDetected) {
      recs.push({ icon: '📷', text_hi: 'फसल के पास स्पष्ट दिन की रोशनी में फोटो लें।', text_en: 'Take a clear daytime photo close to the crop.' });
      return recs;
    }
    if (!result.claimEligible && result.healthScore > 70) {
      recs.push({ icon: '✅', text_hi: 'फसल स्वस्थ है! नियमित सिंचाई जारी रखें।', text_en: 'Crop is healthy! Continue regular irrigation.' });
      recs.push({ icon: '🔬', text_hi: 'अगले NDVI स्कैन की तारीख: 2 सप्ताह बाद।', text_en: 'Next NDVI scan date: in 2 weeks.' });
    }
    if (result.damageType === 'flood') {
      recs.push({ icon: '💧', text_hi: 'तुरंत जल निकासी की व्यवस्था करें।',       text_en: 'Arrange drainage immediately.' });
      recs.push({ icon: '🧪', text_hi: 'फंगल रोग से बचाव के लिए दवाई छिड़कें।', text_en: 'Spray fungicide to prevent disease.' });
    }
    if (result.damageType === 'drought') {
      recs.push({ icon: '🚿', text_hi: 'ड्रिप सिंचाई शुरू करें।',                  text_en: 'Start drip irrigation.' });
      recs.push({ icon: '🌡️', text_hi: 'मल्चिंग करके मिट्टी की नमी बचाएं।',       text_en: 'Apply mulching to retain soil moisture.' });
    }
    if (result.damageType === 'pest') {
      recs.push({ icon: '🐛', text_hi: 'कृषि अधिकारी से संपर्क कर कीटनाशक लें।', text_en: 'Contact agri officer for pesticide guidance.' });
    }
    if (result.claimEligible) {
      recs.push({ icon: '📋', text_hi: 'बीमा दावा दर्ज करें। राशि 3 दिन में आएगी।', text_en: 'File insurance claim. Amount credited in 3 days.' });
    }
    return recs;
  },

  /** Simple file hash for deduplication */
  _hashImage(file) {
    return `${file.name}-${file.size}-${file.lastModified}`;
  },
};

/* ─────────────────────────────────────────────
   CLAIM ID GENERATOR
───────────────────────────────────────────── */
function generateClaimId(cropType) {
  const prefix = (cropType || 'CROP').toUpperCase().slice(0, 3);
  const year   = new Date().getFullYear();
  const rnd    = Math.floor(Math.random() * 900000 + 100000);
  return `PMFBY-${prefix}-${year}-${rnd}`;
}

/* ─────────────────────────────────────────────
   CLAIMS STORE  (in-memory, sessionStorage backed)
───────────────────────────────────────────── */
const ClaimsStore = {
  KEY: 'fasalbima_claims_v2',

  load() {
    try { return JSON.parse(sessionStorage.getItem(this.KEY) || '[]'); }
    catch { return []; }
  },

  save(claims) {
    try { sessionStorage.setItem(this.KEY, JSON.stringify(claims)); } catch {}
  },

  add(claim) {
    const claims = this.load();
    claims.unshift(claim);
    this.save(claims);
    return claims;
  },

  getAll() { return this.load(); },
};

/* ─────────────────────────────────────────────
   EXPORT  (accessible as globals in browser)
───────────────────────────────────────────── */
window.AIEngine      = AIEngine;
window.ClaimsStore   = ClaimsStore;
window.CROP_SIGNATURES = CROP_SIGNATURES;
window.DAMAGE_PROFILES = DAMAGE_PROFILES;
window.generateClaimId = generateClaimId;
