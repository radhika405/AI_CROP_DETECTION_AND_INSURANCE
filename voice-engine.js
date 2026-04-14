/**
 * ═══════════════════════════════════════════════════════════
 *  FasalBima Voice Engine  –  voice-engine.js
 *  Full bilingual (Hindi + English) voice control
 *  Speech Recognition (STT) + Text-to-Speech (TTS)
 * ═══════════════════════════════════════════════════════════
 */

'use strict';

/* ─────────────────────────────────────────────
   VOICE COMMAND DICTIONARY
   Each command has Hindi & English triggers
───────────────────────────────────────────── */
const VOICE_COMMANDS = {
  /* Navigation */
  go_home:         { hi: ['होम','घर जाओ','मुख्य पृष्ठ','होम स्क्रीन'],         en: ['home','go home','main screen','dashboard'] },
  go_report:       { hi: ['नुकसान','रिपोर्ट','नुकसान रिपोर्ट','क्षति बताओ'],    en: ['report','damage','damage report','report damage'] },
  go_claims:       { hi: ['दावा','मेरे दावे','क्लेम','दावे देखो'],               en: ['claims','my claims','view claims','claim status'] },
  go_advisory:     { hi: ['सलाह','सलाह देखो','जानकारी','कृषि समाचार'],           en: ['advisory','advice','farm tips','agri news'] },
  go_register:     { hi: ['फसल दर्ज','फसल नोंदणी','रजिस्टर','पंजीकरण'],         en: ['register crop','register','crop registration'] },
  go_satellite:    { hi: ['सैटेलाइट','नक्शा','मैप','उपग्रह'],                   en: ['satellite','map','satellite map','ndvi'] },
  go_helpline:     { hi: ['हेल्पलाइन','मदद','सहायता','फोन'],                     en: ['helpline','help','contact','call'] },
  go_back:         { hi: ['वापस','पीछे','पीछे जाओ'],                             en: ['back','go back','previous'] },

  /* Damage Report actions */
  select_wheat:    { hi: ['गेहूं','गेहूँ'],         en: ['wheat'] },
  select_rice:     { hi: ['चावल','धान'],            en: ['rice','paddy'] },
  select_maize:    { hi: ['मक्का','भुट्टा'],         en: ['maize','corn'] },
  select_soybean:  { hi: ['सोयाबीन','सोया'],        en: ['soybean','soya'] },
  select_cotton:   { hi: ['कपास','रुई'],             en: ['cotton'] },
  select_sugarcane:{ hi: ['गन्ना','ईख'],             en: ['sugarcane'] },
  select_onion:    { hi: ['प्याज','प्याज़'],          en: ['onion'] },
  select_groundnut:{ hi: ['मूंगफली'],                en: ['groundnut','peanut'] },

  cause_flood:     { hi: ['बाढ़','बाढ़ से','पानी'],     en: ['flood','flooding','water'] },
  cause_drought:   { hi: ['सूखा','सूखे से'],           en: ['drought','dry','water shortage'] },
  cause_hail:      { hi: ['ओलावृष्टि','ओले'],          en: ['hail','hailstorm'] },
  cause_fire:      { hi: ['आग','दावानल'],             en: ['fire','burn'] },
  cause_pest:      { hi: ['कीट','कीड़े','टिड्डी'],     en: ['pest','insect','infestation'] },
  cause_cyclone:   { hi: ['आंधी','चक्रवात','तूफ़ान'], en: ['cyclone','storm','wind'] },

  /* Camera / Upload */
  take_photo:      { hi: ['फोटो लो','तस्वीर','फोटो खींचो','फोटो डालो'], en: ['photo','take photo','upload photo','camera'] },
  submit:          { hi: ['दर्ज करो','जमा करो','सबमिट','भेजो'],          en: ['submit','send','save','next'] },
  next_step:       { hi: ['आगे','अगला','अगला कदम'],                     en: ['next','continue','proceed'] },

  /* Language switch */
  lang_hindi:      { hi: ['हिंदी','हिन्दी'],           en: ['hindi','switch hindi'] },
  lang_english:    { hi: ['अंग्रेजी','इंग्लिश'],        en: ['english','switch english'] },

  /* Misc */
  help:            { hi: ['मदद','सहायता','क्या करूं'], en: ['help','what can i do','commands'] },
  cancel:          { hi: ['रद्द करो','रद्द','बंद करो'], en: ['cancel','stop','close'] },
};

/* ─────────────────────────────────────────────
   GUIDED VOICE PROMPTS  (TTS scripts)
───────────────────────────────────────────── */
const VOICE_PROMPTS = {
  hi: {
    welcome:         'नमस्ते! फसल बीमा ऐप में आपका स्वागत है। भाषा चुनने के लिए बोलें – हिंदी या अंग्रेजी।',
    home:            'होम स्क्रीन। नुकसान रिपोर्ट करने के लिए "नुकसान" बोलें। दावे देखने के लिए "दावा" बोलें।',
    report_start:    'नुकसान रिपोर्ट शुरू हो रही है। पहले फसल का नाम बोलें – जैसे गेहूं, धान, या मक्का।',
    crop_selected:   (c) => `${c} चुना गया। अब नुकसान का कारण बोलें – बाढ़, सूखा, ओलावृष्टि, या कीट।`,
    cause_selected:  (c) => `${c} कारण चुना गया। अब फसल की फोटो अपलोड करें।`,
    photo_prompt:    'फोटो अपलोड करें। AI आपकी फसल का विश्लेषण करेगा।',
    analyzing:       'AI विश्लेषण हो रहा है। कृपया प्रतीक्षा करें।',
    crop_not_found:  'फोटो में फसल नहीं मिली। कृपया फसल के पास खींची गई स्पष्ट फोटो अपलोड करें।',
    no_damage:       'आपकी फसल स्वस्थ दिख रही है! कोई बीमा दावा नहीं किया जा सकता। बीमा दावा केवल क्षतिग्रस्त फसलों के लिए होता है।',
    damage_found:    (pct) => `फसल में ${pct}% नुकसान पाया गया। आप बीमा दावा दर्ज कर सकते हैं।`,
    claim_filed:     (id) => `बधाई हो! आपका दावा दर्ज हो गया। दावा आईडी है ${id}। राशि 3 दिन में आपके बैंक खाते में आएगी।`,
    claims_screen:   'यह आपके सभी दावे हैं। किसी दावे की जानकारी के लिए उस पर टैप करें।',
    help:            'आप बोल सकते हैं: नुकसान, दावा, होम, फसल दर्ज, सलाह, या हेल्पलाइन। आगे बढ़ने के लिए "आगे" बोलें।',
  },
  en: {
    welcome:         'Welcome to the Crop Insurance App. Say "Hindi" or "English" to choose your language.',
    home:            'Home screen. Say "Report damage" to start a claim. Say "Claims" to view your claims.',
    report_start:    'Starting damage report. First, say your crop name – like Wheat, Rice, or Maize.',
    crop_selected:   (c) => `${c} selected. Now say the cause – Flood, Drought, Hail, or Pest.`,
    cause_selected:  (c) => `${c} selected as cause. Now upload a photo of your damaged crop.`,
    photo_prompt:    'Upload a photo of your crop. AI will analyse it for damage.',
    analyzing:       'AI is analysing your photo. Please wait.',
    crop_not_found:  'No crop found in the photo. Please upload a clear photo close to your crop.',
    no_damage:       'Your crop looks healthy! No insurance claim can be filed. Claims are only for damaged crops.',
    damage_found:    (pct) => `${pct}% crop damage detected. You are eligible to file an insurance claim.`,
    claim_filed:     (id) => `Congratulations! Your claim has been filed. Claim ID is ${id}. Amount will be credited in 3 days.`,
    claims_screen:   'These are all your claims. Tap a claim to view details.',
    help:            'You can say: Report, Claims, Home, Register Crop, Advisory, or Helpline. Say "Next" to proceed.',
  },
};

/* ─────────────────────────────────────────────
   VOICE ENGINE CLASS
───────────────────────────────────────────── */
class VoiceEngine {
  constructor() {
    this.lang            = 'hi';
    this.isListening     = false;
    this.isSpeaking      = false;
    this.recognition     = null;
    this.synthesis       = window.speechSynthesis || null;
    this.onCommand       = null;   // callback(commandKey, rawText)
    this.onTranscript    = null;   // callback(text, isFinal)
    this.onStateChange   = null;   // callback('listening'|'idle'|'speaking'|'error')
    this.onError         = null;   // callback(errorMsg)
    this._initRecognition();
  }

  /* ── PUBLIC API ─────────────────────────── */

  setLanguage(code) {
    this.lang = code;
    if (this.recognition) {
      this.recognition.lang = this._recognitionLang(code);
    }
  }

  /**
   * Start listening for a single voice command
   * Returns a Promise<{command, transcript}> or rejects on error
   */
  listen() {
    return new Promise((resolve, reject) => {
      if (!this.recognition) {
        reject(new Error('Speech recognition not supported'));
        return;
      }
      if (this.isListening) { this.stop(); return; }

      this._resolveCmd  = resolve;
      this._rejectCmd   = reject;
      this.isListening  = true;
      this._setState('listening');

      try {
        this.recognition.start();
      } catch (e) {
        this.isListening = false;
        this._setState('idle');
        reject(e);
      }
    });
  }

  /** Stop active recognition */
  stop() {
    if (this.recognition && this.isListening) {
      try { this.recognition.stop(); } catch {}
    }
    this.isListening = false;
    this._setState('idle');
  }

  /**
   * Speak a text string using TTS
   * Returns a Promise that resolves when speech ends
   */
  speak(textOrKey, params = []) {
    return new Promise((resolve) => {
      if (!this.synthesis) { resolve(); return; }

      let text = this._resolvePrompt(textOrKey, params);
      if (!text) { resolve(); return; }

      // Cancel any ongoing speech
      this.synthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang  = this._ttsLang(this.lang);
      utterance.rate  = 0.92;
      utterance.pitch = 1.03;
      utterance.volume = 1.0;

      this.isSpeaking = true;
      this._setState('speaking');

      utterance.onend = () => {
        this.isSpeaking = false;
        this._setState('idle');
        resolve();
      };
      utterance.onerror = () => {
        this.isSpeaking = false;
        this._setState('idle');
        resolve();
      };

      this.synthesis.speak(utterance);
    });
  }

  /** Stop ongoing TTS */
  stopSpeaking() {
    if (this.synthesis) { this.synthesis.cancel(); }
    this.isSpeaking = false;
    this._setState('idle');
  }

  /**
   * Speak then listen (guided interaction)
   * Returns Promise<{command, transcript}>
   */
  async guide(promptKey, promptParams = []) {
    await this.speak(promptKey, promptParams);
    return this.listen();
  }

  /** Match a raw transcript to a command key */
  matchCommand(transcript) {
    const lower = transcript.toLowerCase().trim();
    for (const [cmdKey, triggers] of Object.entries(VOICE_COMMANDS)) {
      const list = triggers[this.lang] || triggers['en'] || [];
      for (const trigger of list) {
        if (lower.includes(trigger.toLowerCase())) {
          return cmdKey;
        }
      }
      // Also check opposite language for robustness
      const otherLang = this.lang === 'hi' ? 'en' : 'hi';
      const otherList = triggers[otherLang] || [];
      for (const trigger of otherList) {
        if (lower.includes(trigger.toLowerCase())) {
          return cmdKey;
        }
      }
    }
    return null;
  }

  /** Get prompt text for a key */
  getPrompt(key, params = []) {
    return this._resolvePrompt(key, params);
  }

  /* ── PRIVATE ────────────────────────────── */

  _initRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('[VoiceEngine] SpeechRecognition not available in this browser.');
      return;
    }

    this.recognition              = new SpeechRecognition();
    this.recognition.continuous   = false;
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 3;
    this.recognition.lang         = this._recognitionLang(this.lang);

    this.recognition.onresult = (event) => {
      let interim = '';
      let finalText = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const res = event.results[i];
        if (res.isFinal) {
          finalText += res[0].transcript;
        } else {
          interim += res[0].transcript;
        }
      }

      if (interim && this.onTranscript) {
        this.onTranscript(interim, false);
      }

      if (finalText) {
        if (this.onTranscript) this.onTranscript(finalText, true);

        const cmd = this.matchCommand(finalText);
        if (this.onCommand) this.onCommand(cmd, finalText);

        if (this._resolveCmd) {
          this._resolveCmd({ command: cmd, transcript: finalText });
          this._resolveCmd = null;
          this._rejectCmd  = null;
        }
      }
    };

    this.recognition.onerror = (event) => {
      const msg = `Speech error: ${event.error}`;
      this.isListening = false;
      this._setState('error');
      if (this.onError) this.onError(msg);
      if (this._rejectCmd) {
        this._rejectCmd(new Error(msg));
        this._resolveCmd = null;
        this._rejectCmd  = null;
      }
    };

    this.recognition.onend = () => {
      this.isListening = false;
      this._setState('idle');
    };
  }

  _resolvePrompt(key, params) {
    const prompts = VOICE_PROMPTS[this.lang] || VOICE_PROMPTS['hi'];
    const p = prompts[key];
    if (!p) return null;
    if (typeof p === 'function') return p(...params);
    return p;
  }

  _recognitionLang(code) {
    const MAP = {
      hi: 'hi-IN', en: 'en-IN', mr: 'mr-IN',
      te: 'te-IN', ta: 'ta-IN', kn: 'kn-IN',
      gu: 'gu-IN', pa: 'pa-IN', bn: 'bn-IN',
    };
    return MAP[code] || 'hi-IN';
  }

  _ttsLang(code) {
    const MAP = {
      hi: 'hi-IN', en: 'en-IN', mr: 'mr-IN',
      te: 'te-IN', ta: 'ta-IN', kn: 'kn-IN',
      gu: 'gu-IN', pa: 'pa-IN', bn: 'bn-IN',
    };
    return MAP[code] || 'hi-IN';
  }

  _setState(state) {
    if (this.onStateChange) this.onStateChange(state);
  }
}

/* ─────────────────────────────────────────────
   VOICE UI HELPERS
───────────────────────────────────────────── */
const VoiceUI = {
  /** Animate a mic button based on state */
  updateMicButton(btn, state) {
    if (!btn) return;
    btn.classList.remove('listening', 'speaking', 'idle', 'error');
    btn.classList.add(state);
    const icons = { listening: '🔴', speaking: '🔊', idle: '🎤', error: '❌' };
    const micSpan = btn.querySelector('.mic-icon');
    if (micSpan) micSpan.textContent = icons[state] || '🎤';
  },

  /** Show floating voice transcript bubble */
  showTranscript(text, isFinal = false) {
    let bubble = document.getElementById('voice-bubble');
    if (!bubble) {
      bubble = document.createElement('div');
      bubble.id = 'voice-bubble';
      bubble.className = 'voice-bubble';
      document.body.appendChild(bubble);
    }
    bubble.textContent = text;
    bubble.classList.add('visible');
    bubble.classList.toggle('final', isFinal);
    if (isFinal) {
      setTimeout(() => bubble.classList.remove('visible'), 3000);
    }
  },

  /** Pulse animation for a button */
  pulseButton(btn) {
    if (!btn) return;
    btn.classList.add('voice-pulse');
    setTimeout(() => btn.classList.remove('voice-pulse'), 800);
  },
};

/* ─────────────────────────────────────────────
   WAVEFORM VISUALISER  (canvas-based)
───────────────────────────────────────────── */
class WaveformVisualiser {
  constructor(canvasId) {
    this.canvas  = document.getElementById(canvasId);
    this.ctx     = this.canvas ? this.canvas.getContext('2d') : null;
    this.animId  = null;
    this.active  = false;
  }

  start(color = '#4CAF50') {
    if (!this.ctx) return;
    this.active = true;
    this._color = color;
    this._draw();
  }

  stop() {
    this.active = false;
    if (this.animId) cancelAnimationFrame(this.animId);
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  _draw() {
    if (!this.active || !this.ctx) return;
    const W = this.canvas.width, H = this.canvas.height;
    this.ctx.clearRect(0, 0, W, H);

    const bars = 32;
    const barW = (W / bars) * 0.7;
    const gap  = (W / bars) * 0.3;

    this.ctx.fillStyle = this._color;
    for (let i = 0; i < bars; i++) {
      const height = (0.1 + Math.abs(Math.sin(Date.now() / 200 + i * 0.5)) * 0.9) * H * 0.8;
      const x = i * (barW + gap);
      const y = (H - height) / 2;
      this.ctx.beginPath();
      this.ctx.roundRect(x, y, barW, height, 3);
      this.ctx.fill();
    }

    this.animId = requestAnimationFrame(() => this._draw());
  }
}

/* ─────────────────────────────────────────────
   EXPORT
───────────────────────────────────────────── */
window.VoiceEngine        = VoiceEngine;
window.VoiceUI            = VoiceUI;
window.WaveformVisualiser = WaveformVisualiser;
window.VOICE_COMMANDS     = VOICE_COMMANDS;
window.VOICE_PROMPTS      = VOICE_PROMPTS;
