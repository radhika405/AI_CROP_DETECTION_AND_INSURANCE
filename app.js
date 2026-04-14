/* ===== TRANSLATION DATA ===== */
const LANGUAGES = [
  { code: 'hi', name: 'हिंदी', native:'Hindi', flag:'🇮🇳' },
  { code: 'mr', name: 'मराठी', native:'Marathi', flag:'🟠' },
  { code: 'te', name: 'తెలుగు', native:'Telugu', flag:'🔵' },
  { code: 'ta', name: 'தமிழ்', native:'Tamil', flag:'🟡' },
  { code: 'kn', name: 'ಕನ್ನಡ', native:'Kannada', flag:'🟤' },
  { code: 'gu', name: 'ગુજરાતી', native:'Gujarati', flag:'🟢' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', native:'Punjabi', flag:'🔴' },
  { code: 'bn', name: 'বাংলা', native:'Bengali', flag:'🟣' },
  { code: 'en', name: 'English', native:'English', flag:'🌐' }
];

const TRANSLATIONS = {
  hi: {
    greeting: 'नमस्ते, किसान!',
    reportDamage: 'नुकसान रिपोर्ट',
    myClaims: 'मेरे दावे',
    cropRegister: 'फसल दर्ज करें',
    advisory: 'सलाह',
    helpline: 'हेल्पलाइन',
    satellite: 'सैटेलाइट मैप',
    navHome: 'होम', navReport: 'रिपोर्ट', navClaims: 'दावे', navAdvisory: 'सलाह',
    weatherAlert: 'भारी बारिश 2 दिन में',
    schemeInfo: 'दावा खिड़की खुली · खरीफ 2025',
    reportTitle: '📸 नुकसान रिपोर्ट करें',
    stepLabel1: 'फसल चुनें / Select Crop',
    stepLabel2: 'नुकसान का कारण / Cause of Damage',
    photoLabel: 'फोटो खींचें / Take Photos',
    photoUploadText: 'फोटो लें / Upload',
    voiceLabel: 'आवाज़ में बताएं / Describe by Voice',
    voiceBtnText: 'बोलना शुरू करें',
    voiceBtnStop: 'रोकें / Stop',
    landLabel: 'भूमि की जानकारी / Land Details',
    khasraLabel: 'खसरा नंबर / Khasra No.', areaLabel: 'कितने बीघे / Affected Area',
    lossLabel: 'अनुमानित नुकसान / Estimated Loss %',
    aiAnalyzingText: 'AI विश्लेषण हो रहा है...',
    resultTitle: 'दावा दर्ज हो गया!',
    claimIdLabel: 'Claim ID',
    aiHeading: 'AI आकलन / AI Assessment',
    cropHlth:'फसल स्वास्थ्य', damageAmt:'नुकसान', confidence:'विश्वसनीयता',
    nextStepInfo: 'अगले 3 दिन में बैंक खाते में राशि आएगी।',
    viewClaimBtn: 'दावे देखें / View Claims',
    claimsTitle: '📋 मेरे दावे',
    cropRegTitle: '🌱 फसल दर्ज करें',
    seasonLabel: 'मौसम / Season', cropTypeLabel: 'फसल / Crop Type',
    sowingLabel: 'बुवाई तारीख / Sowing Date',
    advisoryTitle: '🧑‍🌾 सलाह / Advisory',
    helplineTitle: '📞 हेल्पलाइन',
    hl1Name: 'PMFBY Helpline', hl2Name: 'किसान कॉल सेंटर', hl3Name: 'बैंक ऑफ इंडिया – कृषि',
    waTitle: 'WhatsApp पर मदद', waSub: "'HELP' भेजें 9999-FASAL को",
    satTitle: '🛰️ सैटेलाइट मैप', satMapLabel: 'NDVI – फसल स्वास्थ्य मानचित्र',
    healthyLabel: 'स्वस्थ क्षेत्र', moderateLabel: 'मध्यम नुकसान', severeLabel: 'गंभीर नुकसान',
    step1Next: 'आगे → Next', step2Next: 'आगे → Next', step3Next: 'दर्ज करें / Submit', homeBtn2: '🏠 होम'
  },
  en: {
    greeting: 'Hello, Farmer!',
    reportDamage: 'Report Damage',
    myClaims: 'My Claims',
    cropRegister: 'Register Crop',
    advisory: 'Advisory',
    helpline: 'Helpline',
    satellite: 'Satellite Map',
    navHome: 'Home', navReport: 'Report', navClaims: 'Claims', navAdvisory: 'Advisory',
    weatherAlert: 'Heavy rain in 2 days',
    schemeInfo: 'Claim window open · Kharif 2025',
    reportTitle: '📸 Report Damage',
    stepLabel1: 'Select Crop',
    stepLabel2: 'Cause of Damage',
    photoLabel: 'Take Photos',
    photoUploadText: 'Take Photo / Upload',
    voiceLabel: 'Describe by Voice',
    voiceBtnText: 'Start Speaking',
    voiceBtnStop: 'Stop Recording',
    landLabel: 'Land Details',
    khasraLabel: 'Khasra No.', areaLabel: 'Affected Area (Bigha)',
    lossLabel: 'Estimated Loss %',
    aiAnalyzingText: 'AI Analysis in progress...',
    resultTitle: 'Claim Registered!',
    claimIdLabel: 'Claim ID',
    aiHeading: 'AI Assessment',
    cropHlth:'Crop Health', damageAmt:'Damage', confidence:'Confidence',
    nextStepInfo: 'Amount will be credited to your bank in 3 days.',
    viewClaimBtn: 'View My Claims',
    claimsTitle: '📋 My Claims',
    cropRegTitle: '🌱 Register Crop',
    seasonLabel: 'Season', cropTypeLabel: 'Crop Type',
    sowingLabel: 'Sowing Date',
    advisoryTitle: '🧑‍🌾 Advisory',
    helplineTitle: '📞 Helpline',
    hl1Name: 'PMFBY Helpline', hl2Name: 'Kisan Call Centre', hl3Name: 'Bank of India – Agri',
    waTitle: 'WhatsApp Help', waSub: "Send 'HELP' to 9999-FASAL",
    satTitle: '🛰️ Satellite Map', satMapLabel: 'NDVI – Crop Health Map',
    healthyLabel: 'Healthy Area', moderateLabel: 'Moderate Damage', severeLabel: 'Severe Damage',
    step1Next: 'Next →', step2Next: 'Next →', step3Next: 'Submit', homeBtn2: '🏠 Home'
  },
  mr: {
    greeting: 'नमस्कार, शेतकरी!',
    reportDamage: 'नुकसान नोंदवा',
    myClaims: 'माझे दावे',
    cropRegister: 'पीक नोंदवा',
    advisory: 'सल्ला',
    helpline: 'हेल्पलाइन',
    satellite: 'उपग्रह नकाशा',
    navHome: 'मुख्यपृष्ठ', navReport: 'नोंदव', navClaims: 'दावे', navAdvisory: 'सल्ला',
    weatherAlert: '२ दिवसांत मुसळधार पाऊस',
    schemeInfo: 'दावा खिडकी उघडी · खरीफ २०२५',
    reportTitle: '📸 नुकसान नोंदवा',
    stepLabel1: 'पीक निवडा', stepLabel2: 'नुकसानाचे कारण',
    photoLabel: 'फोटो काढा', photoUploadText: 'फोटो काढा / अपलोड',
    voiceLabel: 'आवाजात सांगा', voiceBtnText: 'बोलणे सुरू करा', voiceBtnStop: 'थांबा',
    landLabel: 'जमीन माहिती', khasraLabel: 'खसरा क्रमांक', areaLabel: 'प्रभावित क्षेत्र',
    lossLabel: 'अंदाजे नुकसान %', aiAnalyzingText: 'AI विश्लेषण सुरू...',
    resultTitle: 'दावा नोंदवला!', claimIdLabel: 'दावा ID',
    aiHeading: 'AI मूल्यांकन',
    cropHlth:'पीक आरोग्य', damageAmt:'नुकसान', confidence:'विश्वासार्हता',
    nextStepInfo: '३ दिवसांत बँक खात्यात रक्कम येईल.',
    viewClaimBtn: 'माझे दावे पहा',
    claimsTitle: '📋 माझे दावे',
    cropRegTitle: '🌱 पीक नोंदवा',
    seasonLabel: 'हंगाम', cropTypeLabel: 'पीक प्रकार', sowingLabel: 'पेरणी तारीख',
    advisoryTitle: '🧑‍🌾 सल्ला', helplineTitle: '📞 हेल्पलाइन',
    hl1Name: 'PMFBY हेल्पलाइन', hl2Name: 'किसान कॉल सेंटर', hl3Name: 'बँक ऑफ इंडिया – कृषी',
    waTitle: 'WhatsApp मदत', waSub: "'HELP' पाठवा 9999-FASAL ला",
    satTitle: '🛰️ उपग्रह नकाशा', satMapLabel: 'NDVI – पीक आरोग्य नकाशा',
    healthyLabel: 'निरोगी क्षेत्र', moderateLabel: 'मध्यम नुकसान', severeLabel: 'गंभीर नुकसान',
    step1Next: 'पुढे →', step2Next: 'पुढे →', step3Next: 'नोंदवा', homeBtn2: '🏠 मुख्य'
  },
  te: {
    greeting: 'నమస్కారం, రైతు!',
    reportDamage: 'నష్టం నివేదించు',
    myClaims: 'నా క్లెయిమ్‌లు',
    cropRegister: 'పంట నమోదు',
    advisory: 'సలహా',
    helpline: 'హెల్ప్‌లైన్',
    satellite: 'ఉపగ్రహ మ్యాప్',
    navHome: 'హోమ్', navReport: 'రిపోర్ట్', navClaims: 'క్లెయిమ్', navAdvisory: 'సలహా',
    weatherAlert: '2 రోజుల్లో భారీ వర్షం',
    schemeInfo: 'క్లెయిమ్ విండో తెరవబడింది · ఖరీఫ్ 2025',
    reportTitle: '📸 నష్టం నివేదించు',
    stepLabel1: 'పంట ఎంచుకోండి', stepLabel2: 'నష్టం కారణం',
    photoLabel: 'ఫోటో తీయండి', photoUploadText: 'ఫోటో తీయండి / అప్‌లోడ్',
    voiceLabel: 'వాయిస్‌లో చెప్పండి', voiceBtnText: 'మాట్లాడడం ప్రారంభించు', voiceBtnStop: 'ఆపు',
    landLabel: 'భూమి వివరాలు', khasraLabel: 'ఖాసరా నంబర్', areaLabel: 'ప్రభావిత విస్తీర్ణం',
    lossLabel: 'అంచనా నష్టం %', aiAnalyzingText: 'AI విశ్లేషణ జరుగుతోంది...',
    resultTitle: 'క్లెయిమ్ నమోదైంది!', claimIdLabel: 'క్లెయిమ్ ID',
    aiHeading: 'AI అంచనా',
    cropHlth:'పంట ఆరోగ్యం', damageAmt:'నష్టం', confidence:'విశ్వసనీయత',
    nextStepInfo: '3 రోజుల్లో బ్యాంక్ ఖాతాలో మొత్తం జమ అవుతుంది.',
    viewClaimBtn: 'క్లెయిమ్‌లు చూడు',
    claimsTitle: '📋 నా క్లెయిమ్‌లు', cropRegTitle: '🌱 పంట నమోదు',
    seasonLabel: 'సీజన్', cropTypeLabel: 'పంట రకం', sowingLabel: 'విత్తు తేదీ',
    advisoryTitle: '🧑‍🌾 సలహా', helplineTitle: '📞 హెల్ప్‌లైన్',
    hl1Name: 'PMFBY హెల్ప్‌లైన్', hl2Name: 'కిసాన్ కాల్ సెంటర్', hl3Name: 'బ్యాంక్ ఆఫ్ ఇండియా',
    waTitle: 'WhatsApp సహాయం', waSub: "'HELP' పంపండి 9999-FASAL కు",
    satTitle: '🛰️ ఉపగ్రహ మ్యాప్', satMapLabel: 'NDVI – పంట ఆరోగ్య మ్యాప్',
    healthyLabel: 'ఆరోగ్యకరమైన', moderateLabel: 'మధ్యస్థ నష్టం', severeLabel: 'తీవ్రమైన నష్టం',
    step1Next: 'తర్వాత →', step2Next: 'తర్వాత →', step3Next: 'సమర్పించు', homeBtn2: '🏠 హోమ్'
  },
  ta: {
    greeting: 'வணக்கம், விவசாயி!',
    reportDamage: 'சேதம் புகார்',
    myClaims: 'என் கோரல்கள்',
    cropRegister: 'பயிர் பதிவு',
    advisory: 'ஆலோசனை',
    helpline: 'உதவி எண்',
    satellite: 'செயற்கைக்கோள்',
    navHome: 'முகப்பு', navReport: 'புகார்', navClaims: 'கோரல்', navAdvisory: 'ஆலோசனை',
    weatherAlert: '2 நாளில் கனமழை',
    schemeInfo: 'கோரல் சாளரம் திறந்துள்ளது',
    reportTitle: '📸 சேதம் புகார்', stepLabel1: 'பயிர் தேர்வு', stepLabel2: 'சேத காரணம்',
    photoLabel: 'புகைப்படம் எடு', photoUploadText: 'புகைப்படம் / பதிவேற்று',
    voiceLabel: 'குரலில் கூறுங்கள்', voiceBtnText: 'பேசத் தொடங்கு', voiceBtnStop: 'நிறுத்து',
    landLabel: 'நில விவரங்கள்', khasraLabel: 'கிசான் எண்', areaLabel: 'பாதிக்கப்பட்ட பரப்பு',
    lossLabel: 'மதிப்பிடப்பட்ட சேதம் %', aiAnalyzingText: 'AI பகுப்பாய்வு நடக்கிறது...',
    resultTitle: 'கோரல் பதிவாயிற்று!', claimIdLabel: 'கோரல் ID',
    aiHeading: 'AI மதிப்பீடு',
    cropHlth:'பயிர் ஆரோக்கியம்', damageAmt:'சேதம்', confidence:'நம்பகத்தன்மை',
    nextStepInfo: '3 நாளில் வங்கி கணக்கில் தொகை வரும்.',
    viewClaimBtn: 'கோரல்கள் பார்க்க',
    claimsTitle: '📋 என் கோரல்கள்', cropRegTitle: '🌱 பயிர் பதிவு',
    seasonLabel: 'பருவம்', cropTypeLabel: 'பயிர் வகை', sowingLabel: 'விதைத்த தேதி',
    advisoryTitle: '🧑‍🌾 ஆலோசனை', helplineTitle: '📞 உதவி எண்',
    hl1Name: 'PMFBY உதவி எண்', hl2Name: 'கிசான் அழைப்பு மையம்', hl3Name: 'வங்கி ஆஃப் இந்தியா',
    waTitle: 'WhatsApp உதவி', waSub: "'HELP' அனுப்புங்கள் 9999-FASAL க்கு",
    satTitle: '🛰️ செயற்கைக்கோள்', satMapLabel: 'NDVI – பயிர் ஆரோக்கிய வரைபடம்',
    healthyLabel: 'ஆரோக்கியமான', moderateLabel: 'மிதமான சேதம்', severeLabel: 'கடுமையான சேதம்',
    step1Next: 'அடுத்து →', step2Next: 'அடுத்து →', step3Next: 'சமர்ப்பி', homeBtn2: '🏠 முகப்பு'
  },
  kn: { greeting: 'ನಮಸ್ಕಾರ, ರೈತ!', reportDamage: 'ಹಾನಿ ವರದಿ', myClaims: 'ನನ್ನ ಹಕ್ಕುಗಳು', cropRegister: 'ಬೆಳೆ ನೋಂದಣಿ', advisory: 'ಸಲಹೆ', helpline: 'ಸಹಾಯವಾಣಿ', satellite: 'ಉಪಗ್ರಹ ನಕ್ಷೆ', navHome: 'ಮನೆ', navReport: 'ವರದಿ', navClaims: 'ಹಕ್ಕು', navAdvisory: 'ಸಲಹೆ', weatherAlert: '2 ದಿನಗಳಲ್ಲಿ ಭಾರೀ ಮಳೆ', schemeInfo: 'ಹಕ್ಕು ವಿಂಡೋ ತೆರೆದಿದೆ', reportTitle: '📸 ಹಾನಿ ವರದಿ', stepLabel1: 'ಬೆಳೆ ಆರಿಸಿ', stepLabel2: 'ಹಾನಿ ಕಾರಣ', photoLabel: 'ಫೋಟೋ ತೆಗೆಯಿರಿ', photoUploadText: 'ಫೋಟೋ / ಅಪ್‌ಲೋಡ್', voiceLabel: 'ಧ್ವನಿಯಲ್ಲಿ ಹೇಳಿ', voiceBtnText: 'ಮಾತನಾಡಿ', voiceBtnStop: 'ನಿಲ್ಲಿಸಿ', landLabel: 'ಭೂ ವಿವರ', khasraLabel: 'ಖಸರಾ ಸಂಖ್ಯೆ', areaLabel: 'ಪ್ರಭಾವಿತ ಪ್ರದೇಶ', lossLabel: 'ಅಂದಾಜು ನಷ್ಟ %', aiAnalyzingText: 'AI ವಿಶ್ಲೇಷಣೆ...', resultTitle: 'ಹಕ್ಕು ನೋಂದಾಯಿಸಲಾಗಿದೆ!', claimIdLabel: 'Claim ID', aiHeading: 'AI ಮೌಲ್ಯಮಾಪನ', cropHlth:'ಬೆಳೆ ಆರೋಗ್ಯ', damageAmt:'ಹಾನಿ', confidence:'ವಿಶ್ವಾಸಾರ್ಹತೆ', nextStepInfo: '3 ದಿನಗಳಲ್ಲಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಮೊತ್ತ ಬರುತ್ತದೆ.', viewClaimBtn: 'ಹಕ್ಕು ನೋಡಿ', claimsTitle: '📋 ನನ್ನ ಹಕ್ಕುಗಳು', cropRegTitle: '🌱 ಬೆಳೆ ನೋಂದಣಿ', seasonLabel: 'ಹಂಗಾಮು', cropTypeLabel: 'ಬೆಳೆ ವಿಧ', sowingLabel: 'ಬಿತ್ತನೆ ದಿನಾಂಕ', advisoryTitle: '🧑‍🌾 ಸಲಹೆ', helplineTitle: '📞 ಸಹಾಯವಾಣಿ', hl1Name: 'PMFBY ಸಹಾಯವಾಣಿ', hl2Name: 'ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್', hl3Name: 'ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂಡಿಯಾ', waTitle: 'WhatsApp ಸಹಾಯ', waSub: "9999-FASAL ಗೆ 'HELP' ಕಳುಹಿಸಿ", satTitle: '🛰️ ಉಪಗ್ರಹ ನಕ್ಷೆ', satMapLabel: 'NDVI – ಬೆಳೆ ಆರೋಗ್ಯ', healthyLabel: 'ಆರೋಗ್ಯಕರ', moderateLabel: 'ಮಧ್ಯಮ ಹಾನಿ', severeLabel: 'ತೀವ್ರ ಹಾನಿ', step1Next: 'ಮುಂದೆ →', step2Next: 'ಮುಂದೆ →', step3Next: 'ಸಲ್ಲಿಸಿ', homeBtn2: '🏠 ಮನೆ' },
  gu: { greeting: 'નમસ્તે, ખેડૂત!', reportDamage: 'નુકસાન નોંધો', myClaims: 'મારા દાવા', cropRegister: 'પાક નોંધો', advisory: 'સલાહ', helpline: 'હેલ્પલાઇન', satellite: 'સેટેલાઇટ', navHome: 'ઘર', navReport: 'રિપોર્ટ', navClaims: 'દાવા', navAdvisory: 'સલાહ', weatherAlert: '2 દિવસ ભારે વરસાદ', schemeInfo: 'દાવો વિન્ડો ખુલ્લી', reportTitle: '📸 નુકસાન', stepLabel1: 'પાક પસંદ કરો', stepLabel2: 'નુકસાનનું કારણ', photoLabel: 'ફોટો લો', photoUploadText: 'ફોટો / અપલોડ', voiceLabel: 'અવાજ દ્વારા', voiceBtnText: 'બોલવું શરૂ કરો', voiceBtnStop: 'રોકો', landLabel: 'જમીનની વિગત', khasraLabel: 'ખસરા નં', areaLabel: 'અસરગ્રસ્ત ક્ષેત્ર', lossLabel: 'અંદાજિત નુકસાન %', aiAnalyzingText: 'AI વિશ્લેષણ...', resultTitle: 'દાવો નોંધાયો!', claimIdLabel: 'Claim ID', aiHeading: 'AI આકલન', cropHlth:'પાક સ્વાસ્થ્ય', damageAmt:'નુકસાન', confidence:'વિશ્વસ્તતા', nextStepInfo: '3 દિવસ બેંક ખાતામાં રકમ આવશે.', viewClaimBtn: 'દાવા જુઓ', claimsTitle: '📋 મારા દાવા', cropRegTitle: '🌱 પાક નોંધો', seasonLabel: 'મોસમ', cropTypeLabel: 'પાક પ્રકાર', sowingLabel: 'વાવણી તારીખ', advisoryTitle: '🧑‍🌾 સલાહ', helplineTitle: '📞 હેલ્પલાઇન', hl1Name: 'PMFBY હેલ્પલાઇન', hl2Name: 'કિસાન કૉલ સેન્ટર', hl3Name: 'Bank of India', waTitle: 'WhatsApp મદદ', waSub: "'HELP' મોકલો 9999-FASAL", satTitle: '🛰️ સેટેલાઇટ', satMapLabel: 'NDVI – પાક આરોગ્ય', healthyLabel: 'સ્વસ્થ ક્ષેત્ર', moderateLabel: 'મધ્યમ', severeLabel: 'ગંભીર', step1Next: 'આગળ →', step2Next: 'આગળ →', step3Next: 'નોંધો', homeBtn2: '🏠 ઘર' },
  pa: { greeting: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਕਿਸਾਨ!', reportDamage: 'ਨੁਕਸਾਨ ਦਰਜ', myClaims: 'ਮੇਰੇ ਦਾਅਵੇ', cropRegister: 'ਫਸਲ ਦਰਜ', advisory: 'ਸਲਾਹ', helpline: 'ਹੈਲਪਲਾਈਨ', satellite: 'ਸੈਟੇਲਾਈਟ', navHome: 'ਘਰ', navReport: 'ਰਿਪੋਰਟ', navClaims: 'ਦਾਅਵੇ', navAdvisory: 'ਸਲਾਹ', weatherAlert: '2 ਦਿਨਾਂ ਵਿੱਚ ਭਾਰੀ ਮੀਂਹ', schemeInfo: 'ਦਾਅਵਾ ਖਿੜਕੀ ਖੁੱਲ੍ਹੀ', reportTitle: '📸 ਨੁਕਸਾਨ ਦਰਜ', stepLabel1: 'ਫਸਲ ਚੁਣੋ', stepLabel2: 'ਨੁਕਸਾਨ ਦਾ ਕਾਰਨ', photoLabel: 'ਫੋਟੋ ਲਓ', photoUploadText: 'ਫੋਟੋ / ਅਪਲੋਡ', voiceLabel: 'ਆਵਾਜ਼ ਵਿੱਚ ਦੱਸੋ', voiceBtnText: 'ਬੋਲਣਾ ਸ਼ੁਰੂ ਕਰੋ', voiceBtnStop: 'ਰੋਕੋ', landLabel: 'ਜ਼ਮੀਨ ਦੀ ਜਾਣਕਾਰੀ', khasraLabel: 'ਖਸਰਾ ਨੰਬਰ', areaLabel: 'ਪ੍ਰਭਾਵਿਤ ਖੇਤਰ', lossLabel: 'ਅਨੁਮਾਨਿਤ ਨੁਕਸਾਨ %', aiAnalyzingText: 'AI ਵਿਸ਼ਲੇਸ਼ਣ...', resultTitle: 'ਦਾਅਵਾ ਦਰਜ!', claimIdLabel: 'Claim ID', aiHeading: 'AI ਮੁਲਾਂਕਣ', cropHlth:'ਫਸਲ ਸਿਹਤ', damageAmt:'ਨੁਕਸਾਨ', confidence:'ਵਿਸ਼ਵਾਸਯੋਗਤਾ', nextStepInfo: '3 ਦਿਨਾਂ ਵਿੱਚ ਰਕਮ ਆਵੇਗੀ.', viewClaimBtn: 'ਦਾਅਵੇ ਦੇਖੋ', claimsTitle: '📋 ਮੇਰੇ ਦਾਅਵੇ', cropRegTitle: '🌱 ਫਸਲ ਦਰਜ', seasonLabel: 'ਮੌਸਮ', cropTypeLabel: 'ਫਸਲ ਕਿਸਮ', sowingLabel: 'ਬਿਜਾਈ ਤਾਰੀਖ', advisoryTitle: '🧑‍🌾 ਸਲਾਹ', helplineTitle: '📞 ਹੈਲਪਲਾਈਨ', hl1Name: 'PMFBY ਹੈਲਪਲਾਈਨ', hl2Name: 'ਕਿਸਾਨ ਕਾਲ ਸੈਂਟਰ', hl3Name: 'ਬੈਂਕ ਆਫ਼ ਇੰਡੀਆ', waTitle: 'WhatsApp ਮਦਦ', waSub: "'HELP' ਭੇਜੋ 9999-FASAL", satTitle: '🛰️ ਸੈਟੇਲਾਈਟ', satMapLabel: 'NDVI – ਫਸਲ ਮੈਪ', healthyLabel: 'ਤੰਦਰੁਸਤ', moderateLabel: 'ਦਰਮਿਆਨਾ', severeLabel: 'ਗੰਭੀਰ', step1Next: 'ਅੱਗੇ →', step2Next: 'ਅੱਗੇ →', step3Next: 'ਦਰਜ ਕਰੋ', homeBtn2: '🏠 ਘਰ' },
  bn: { greeting: 'নমস্কার, কৃষক!', reportDamage: 'ক্ষতি রিপোর্ট', myClaims: 'আমার দাবি', cropRegister: 'ফসল নথিভুক্ত', advisory: 'পরামর্শ', helpline: 'হেল্পলাইন', satellite: 'স্যাটেলাইট', navHome: 'হোম', navReport: 'রিপোর্ট', navClaims: 'দাবি', navAdvisory: 'পরামর্শ', weatherAlert: '২ দিনে ভারী বৃষ্টি', schemeInfo: 'দাবি উইন্ডো খোলা', reportTitle: '📸 ক্ষতি রিপোর্ট', stepLabel1: 'ফসল বেছে নিন', stepLabel2: 'ক্ষতির কারণ', photoLabel: 'ছবি তুলুন', photoUploadText: 'ছবি / আপলোড', voiceLabel: 'কণ্ঠে বলুন', voiceBtnText: 'বলা শুরু করুন', voiceBtnStop: 'থামুন', landLabel: 'জমির বিবরণ', khasraLabel: 'খতিয়ান নং', areaLabel: 'ক্ষতিগ্রস্ত এলাকা', lossLabel: 'আনুমানিক ক্ষতি %', aiAnalyzingText: 'AI বিশ্লেষণ চলছে...', resultTitle: 'দাবি নথিভুক্ত!', claimIdLabel: 'Claim ID', aiHeading: 'AI মূল্যায়ন', cropHlth:'ফসলের স্বাস্থ্য', damageAmt:'ক্ষতি', confidence:'বিশ্বাসযোগ্যতা', nextStepInfo: '৩ দিনে ব্যাংকে টাকা আসবে।', viewClaimBtn: 'দাবি দেখুন', claimsTitle: '📋 আমার দাবি', cropRegTitle: '🌱 ফসল নথিভুক্ত', seasonLabel: 'মৌসুম', cropTypeLabel: 'ফসলের ধরন', sowingLabel: 'বপনের তারিখ', advisoryTitle: '🧑‍🌾 পরামর্শ', helplineTitle: '📞 হেল্পলাইন', hl1Name: 'PMFBY হেল্পলাইন', hl2Name: 'কিসান কল সেন্টার', hl3Name: 'ব্যাংক অফ ইন্ডিয়া', waTitle: 'WhatsApp সাহায্য', waSub: "'HELP' পাঠান 9999-FASAL", satTitle: '🛰️ স্যাটেলাইট', satMapLabel: 'NDVI – ফসল মানচিত্র', healthyLabel: 'সুস্থ এলাকা', moderateLabel: 'মাঝারি ক্ষতি', severeLabel: 'গুরুতর ক্ষতি', step1Next: 'পরবর্তী →', step2Next: 'পরবর্তী →', step3Next: 'জমা দিন', homeBtn2: '🏠 হোম' }
};

const CROPS = [
  { emoji:'🌾', label:'गेहूं\nWheat', en:'Wheat' },
  { emoji:'🌾', label:'चावल\nRice', en:'Rice' },
  { emoji:'🌽', label:'मक्का\nMaize', en:'Maize' },
  { emoji:'🌱', label:'सोयाबीन\nSoya', en:'Soybean' },
  { emoji:'🥜', label:'मूंगफली\nPeanut', en:'Groundnut' },
  { emoji:'🌿', label:'कपास\nCotton', en:'Cotton' },
  { emoji:'🧅', label:'प्याज\nOnion', en:'Onion' },
  { emoji:'🍬', label:'गन्ना\nSugarcane', en:'Sugarcane' }
];

const CAUSES = [
  { emoji:'🌧️', label:'बाढ़\nFlood', en:'Flood' },
  { emoji:'🌵', label:'सूखा\nDrought', en:'Drought' },
  { emoji:'⛈️', label:'ओलावृष्टि\nHail', en:'Hail' },
  { emoji:'🔥', label:'आग\nFire', en:'Fire' },
  { emoji:'🐛', label:'कीट\nPest', en:'Pest' },
  { emoji:'🌪️', label:'आंधी\nCyclone', en:'Cyclone' }
];

const CLAIMS_DATA = [
  { crop:'🌾', name:'Wheat – Flood Damage', date:'Mar 15, 2025', amount:'₹28,500', status:'approved', badge:'badge-approved', statusText:'Approved' },
  { crop:'🌽', name:'Maize – Hail Damage', date:'Jan 8, 2025', amount:'₹14,200', status:'pending', badge:'badge-pending', statusText:'Pending' },
  { crop:'🌿', name:'Cotton – Pest Damage', date:'Nov 20, 2024', amount:'₹42,000', status:'reviewing', badge:'badge-reviewing', statusText:'Under Review' }
];

const ADVISORY_DATA = [
  { type:'alert', tag:'⚠️ Weather Alert', title:'Heavy Rainfall Warning', desc:'IMD forecasts 80mm rainfall in next 48hrs. Harvest standing crops immediately if possible.', date:'Apr 12, 2026' },
  { type:'warning', tag:'🐛 Pest Advisory', title:'Fall Armyworm in Maize', desc:'Pest detected in 3 districts nearby. Apply recommended pesticides within 72 hours.', date:'Apr 10, 2026' },
  { type:'', tag:'🌱 Agri Tip', title:'Optimal Irrigation Schedule', desc:'Use drip irrigation to reduce water usage by 40%. Government subsidy available under PMKSY scheme.', date:'Apr 8, 2026' },
  { type:'', tag:'💰 Scheme Alert', title:'PM Kisan 19th Installment', desc:'₹2000 will be credited on April 15. Ensure Aadhaar-bank linking is complete.', date:'Apr 7, 2026' }
];

/* ===== APP STATE ===== */
let currentLang = 'hi';
let currentScreen = 'screen-language';
let screenHistory = [];
let selectedCrop = null, selectedCause = null, selectedSeason = 'kharif';
let affectedArea = 2.0;
let isRecording = false;
let recognition = null;

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderLangGrid();
  renderCropGrid('cropGrid', true);
  renderCropGrid('cropRegGrid', true);
  renderCauseGrid();
  renderClaims();
  renderAdvisory();
  applyTranslations('hi');
});

/* ===== LANGUAGE GRID ===== */
function renderLangGrid() {
  const grid = document.getElementById('langGrid');
  grid.innerHTML = LANGUAGES.map((l, i) => `
    <button class="lang-option" id="lang-${l.code}" onclick="selectLanguage('${l.code}')">
      <span class="lang-flag">${l.flag}</span>
      <div class="lang-name">${l.name}</div>
      <div class="lang-native">${l.native}</div>
    </button>
  `).join('');
  document.querySelector('#lang-hi').classList.add('selected');
}

function selectLanguage(code) {
  document.querySelectorAll('.lang-option').forEach(e => e.classList.remove('selected'));
  document.querySelector(`#lang-${code}`).classList.add('selected');
  currentLang = code;
  applyTranslations(code);
  setTimeout(() => {
    goTo('screen-home');
    document.getElementById('bottomNav').style.display = 'flex';
    document.getElementById('currentLangBtn').textContent = code.toUpperCase().slice(0,2);
  }, 400);
}

/* ===== TRANSLATIONS ===== */
function applyTranslations(lang) {
  const T = TRANSLATIONS[lang] || TRANSLATIONS['hi'];
  const applyText = (id, key) => { const el = document.getElementById(id); if(el && T[key]) el.textContent = T[key]; };
  const applyAll = (key) => { document.querySelectorAll(`[data-key="${key}"]`).forEach(el => el.textContent = T[key] || el.textContent); };
  Object.keys(T).forEach(key => applyAll(key));
  applyText('greetingText', 'greeting');
  applyText('weatherAlert', 'weatherAlert');
  applyText('schemeInfo', 'schemeInfo');
  applyText('reportTitle', 'reportTitle');
  applyText('stepLabel1', 'stepLabel1');
  applyText('stepLabel2', 'stepLabel2');
  applyText('photoLabel', 'photoLabel');
  applyText('photoUploadText', 'photoUploadText');
  applyText('voiceLabel', 'voiceLabel');
  applyText('voiceBtnText', 'voiceBtnText');
  applyText('landLabel', 'landLabel');
  applyText('khasraLabel', 'khasraLabel');
  applyText('areaLabel', 'areaLabel');
  applyText('lossLabel', 'lossLabel');
  applyText('aiAnalyzingText', 'aiAnalyzingText');
  applyText('resultTitle', 'resultTitle');
  applyText('claimIdLabel', 'claimIdLabel');
  applyText('aiHeading', 'aiHeading');
  applyText('cropHlth', 'cropHlth');
  applyText('damageAmt', 'damageAmt');
  applyText('confidence', 'confidence');
  applyText('nextStepInfo', 'nextStepInfo');
  applyText('viewClaimBtn', 'viewClaimBtn');
  applyText('claimsTitle', 'claimsTitle');
  applyText('cropRegTitle', 'cropRegTitle');
  applyText('seasonLabel', 'seasonLabel');
  applyText('cropTypeLabel', 'cropTypeLabel');
  applyText('sowingLabel', 'sowingLabel');
  applyText('advisoryTitle', 'advisoryTitle');
  applyText('helplineTitle', 'helplineTitle');
  applyText('hl1Name', 'hl1Name');
  applyText('hl2Name', 'hl2Name');
  applyText('hl3Name', 'hl3Name');
  applyText('waTitle', 'waTitle');
  applyText('waSub', 'waSub');
  applyText('satTitle', 'satTitle');
  applyText('satMapLabel', 'satMapLabel');
  applyText('healthyLabel', 'healthyLabel');
  applyText('moderateLabel', 'moderateLabel');
  applyText('severeLabel', 'severeLabel');
  applyText('step1Next', 'step1Next');
  applyText('step2Next', 'step2Next');
  applyText('step3Next', 'step3Next');
  applyText('homeBtn2', 'homeBtn2');
}

/* ===== CROP & CAUSE GRIDS ===== */
function renderCropGrid(containerId, showAll) {
  const grid = document.getElementById(containerId);
  if(!grid) return;
  grid.innerHTML = CROPS.map((c, i) => `
    <button class="crop-item" id="${containerId}-crop-${i}" onclick="selectCropItem('${containerId}', ${i})">
      <span class="crop-emoji">${c.emoji}</span>
      <span class="crop-label">${c.label.split('\n')[0]}</span>
    </button>
  `).join('');
}

function selectCropItem(containerId, idx) {
  document.querySelectorAll(`#${containerId} .crop-item`).forEach(e => e.classList.remove('selected'));
  document.getElementById(`${containerId}-crop-${idx}`).classList.add('selected');
  if(containerId === 'cropGrid') selectedCrop = CROPS[idx];
}

function renderCauseGrid() {
  const grid = document.getElementById('causeGrid');
  if(!grid) return;
  grid.innerHTML = CAUSES.map((c, i) => `
    <button class="cause-item" id="cause-${i}" onclick="selectCauseItem(${i})">
      <span class="cause-emoji">${c.emoji}</span>
      <span class="cause-label">${c.label.split('\n')[0]}</span>
    </button>
  `).join('');
}

function selectCauseItem(idx) {
  document.querySelectorAll('.cause-item').forEach(e => e.classList.remove('selected'));
  document.getElementById(`cause-${idx}`).classList.add('selected');
  selectedCause = CAUSES[idx];
}

/* ===== CLAIMS ===== */
function renderClaims() {
  const list = document.getElementById('claimsList');
  if(!list) return;
  list.innerHTML = CLAIMS_DATA.map(c => `
    <div class="claim-card">
      <div class="claim-crop-icon">${c.crop}</div>
      <div class="claim-info">
        <div class="claim-name">${c.name}</div>
        <div class="claim-date">${c.date}</div>
        <div class="claim-amount">${c.amount}</div>
      </div>
      <span class="claim-status-badge ${c.badge}">${c.statusText}</span>
    </div>
  `).join('');
}

/* ===== ADVISORY ===== */
function renderAdvisory() {
  const list = document.getElementById('advisoryList');
  if(!list) return;
  list.innerHTML = ADVISORY_DATA.map(a => `
    <div class="advisory-card ${a.type}">
      <div class="advisory-tag">${a.tag}</div>
      <div class="advisory-title">${a.title}</div>
      <div class="advisory-desc">${a.desc}</div>
      <div class="advisory-date">${a.date}</div>
    </div>
  `).join('');
}

/* ===== NAVIGATION ===== */
function goTo(screenId) {
  if(currentScreen !== 'screen-language') screenHistory.push(currentScreen);
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  currentScreen = screenId;
  updateBottomNav(screenId);
  if(screenId === 'screen-report') { reportStep(1); }
}

function goBack() {
  if(screenHistory.length > 0) {
    const prev = screenHistory.pop();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(prev).classList.add('active');
    currentScreen = prev;
    updateBottomNav(prev);
  } else {
    goTo('screen-home');
  }
}

function updateBottomNav(screenId) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const map = { 'screen-home':'nav-home', 'screen-report':'nav-report', 'screen-claims':'nav-claims', 'screen-advisory':'nav-advisory' };
  if(map[screenId]) document.getElementById(map[screenId]).classList.add('active');
}

/* ===== REPORT STEPS ===== */
function reportStep(step) {
  document.querySelectorAll('.report-step').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.step').forEach((s, i) => {
    s.classList.remove('active','done');
    if(i + 1 < step) s.classList.add('done');
    if(i + 1 === step) s.classList.add('active');
  });
  document.getElementById(`report-step-${step}`).classList.add('active');
  if(step === 4) simulateAI();
}

function simulateAI() {
  const spinner = document.getElementById('aiSpinner');
  const result = document.getElementById('aiResult');
  spinner.style.display = 'block';
  result.style.display = 'none';
  const claimId = 'PMFBY-2025-' + Math.floor(Math.random() * 900000 + 100000);
  document.getElementById('claimIdVal').textContent = claimId;
  setTimeout(() => {
    spinner.style.display = 'none';
    result.style.display = 'block';
    const newClaim = {
      crop: selectedCrop?.emoji || '🌾',
      name: (selectedCrop?.en || 'Crop') + ' – ' + (selectedCause?.en || 'Damage'),
      date: new Date().toLocaleDateString('en-IN'),
      amount: '₹' + (Math.floor(Math.random() * 30000 + 10000)).toLocaleString('en-IN'),
      status: 'pending', badge: 'badge-pending', statusText: 'Pending'
    };
    CLAIMS_DATA.unshift(newClaim);
    renderClaims();
  }, 3000);
}

/* ===== AREA SELECTOR ===== */
function changeArea(delta) {
  affectedArea = Math.max(0.5, Math.min(50, affectedArea + delta));
  document.getElementById('areaValue').textContent = affectedArea.toFixed(1);
}

/* ===== LOSS SLIDER ===== */
function updateLoss(val) {
  document.getElementById('lossValue').textContent = val;
}

/* ===== PHOTO UPLOAD ===== */
function handlePhotoUpload(e) {
  const preview = document.getElementById('photoPreview');
  Array.from(e.target.files).forEach(file => {
    const url = URL.createObjectURL(file);
    const img = document.createElement('img');
    img.src = url;
    img.className = 'photo-thumb';
    img.alt = 'Crop photo';
    preview.appendChild(img);
  });
}

/* ===== VOICE INPUT ===== */
function toggleVoice() {
  const btn = document.getElementById('voiceBtn');
  const T = TRANSLATIONS[currentLang] || TRANSLATIONS['hi'];
  if(!isRecording) {
    isRecording = true;
    btn.classList.add('recording');
    document.getElementById('voiceBtnText').textContent = T.voiceBtnStop || 'Stop';
    document.getElementById('voiceTranscript').textContent = '...';
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition) {
      recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = currentLang === 'en' ? 'en-IN' : currentLang + '-IN';
      recognition.onresult = (e) => {
        document.getElementById('voiceTranscript').textContent = e.results[0][0].transcript;
      };
      recognition.onerror = () => stopVoice();
      recognition.onend = () => stopVoice();
      recognition.start();
    } else {
      setTimeout(() => {
        document.getElementById('voiceTranscript').textContent = '(Demo: " मेरी फसल बाढ़ से बर्बाद हो गई है, लगभग 3 बीघे में नुकसान है")';
        stopVoice();
      }, 2500);
    }
  } else {
    if(recognition) recognition.stop();
    stopVoice();
  }
}

function stopVoice() {
  isRecording = false;
  const btn = document.getElementById('voiceBtn');
  btn.classList.remove('recording');
  const T = TRANSLATIONS[currentLang] || TRANSLATIONS['hi'];
  document.getElementById('voiceBtnText').textContent = T.voiceBtnText || 'Start';
}

/* ===== SEASON TOGGLE ===== */
function selectSeason(season, el) {
  selectedSeason = season;
  document.querySelectorAll('.season-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderCropGrid('cropRegGrid', true);
}

/* ===== CROP REGISTER ===== */
function registerCrop() {
  const date = document.getElementById('sowingDate').value;
  const amount = document.getElementById('sumInsured').value;
  if(!date || !amount) { alert('Please fill all details'); return; }
  alert('✅ फसल सफलतापूर्वक दर्ज हो गई!\nCrop successfully registered!');
  goTo('screen-home');
}

/* ===== SATELLITE TABS ===== */
function switchSatTab(type, el) {
  document.querySelectorAll('.sat-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const grad = document.getElementById('satGradient');
  const label = document.getElementById('satMapLabel');
  grad.className = 'sat-gradient ' + type.toLowerCase();
  const labels = { NDVI: 'NDVI – फसल स्वास्थ्य मानचित्र', RGB: 'RGB – वास्तविक रंग छवि', SAR: 'SAR – राडार छवि (बाढ़ पहचान)' };
  label.textContent = labels[type];
}
