import type { Zikr } from "@/lib/types";
import { Activity, Heart, HeartHandshake, BookOpen, Sparkles, Star, ShieldCheck, Sun, Moon, Wind, Shield, CheckCircle, Sunrise } from "lucide-react";

export const initialZikrs: Zikr[] = [
  {
    id: 1,
    name: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    translation: {
        en: "Glory is to Allah and with His praise",
        ar: "سبحان الله وبحمده",
        ur: "اللہ کی پاکی اور اس کی حمد کے ساتھ",
        hi: "अल्लाह की महिमा और उसकी प्रशंसा के साथ"
    },
    count: 0,
    target: 100,
    Icon: Sun,
    virtue: {
        en: "Whoever says this 100 times a day, his sins will be forgiven even if they are like the foam of the sea.",
        ar: "من قالها 100 مرة في اليوم غفرت خطاياه ولو كانت مثل زبد البحر.",
        ur: "جو شخص دن میں 100 مرتبہ یہ کہے گا تو اس کے گناہ معاف کر دیے جائیں گے خواہ وہ سمندر کی جھاگ کے برابر ہی کیوں نہ ہوں۔",
        hi: "जो कोई इसे दिन में 100 बार कहेगा, उसके पाप क्षमा कर दिए जाएंगे, भले ही वे समुद्र के झाग के समान क्यों न हों।"
    },
    hadith: "Sahih al-Bukhari 6405",
    hadithLink: "https://sunnah.com/bukhari:6405",
  },
  {
    id: 2,
    name: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    translation: {
        en: "Glory is to Allah and with His praise, Glory is to Allah, the Magnificent",
        ar: "سبحان الله وبحمده، سبحان الله العظيم",
        ur: "اللہ کی پاکی اور اس کی حمد کے ساتھ، اللہ کی پاکی جو عظمت والا ہے۔",
        hi: "अल्लाह की महिमा और उसकी प्रशंसा के साथ, अल्लाह की महिमा, जो महान है"
    },
    count: 0,
    target: 100,
    Icon: Moon,
    virtue: {
        en: "Two statements are light on the tongue, heavy on the scale, and beloved to the Most Merciful.",
        ar: "كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن.",
        ur: "دو کلمے زبان پر ہلکے، ترازو میں بھاری اور رحمٰن کو بہت پسند ہیں۔",
        hi: "दो बातें जो जुबान पर हल्की, तराजू पर भारी और रहमान को बहुत प्यारी हैं।"
    },
    hadith: "Sahih al-Bukhari 6682",
    hadithLink: "https://sunnah.com/bukhari:6682",
  },
  {
    id: 3,
    name: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    translation: {
        en: "There is no god but Allah, alone, without partner. To Him belongs the dominion, to Him is all praise, and He is over all things competent.",
        ar: "لا إله إلا الله وحده لا شريك له، له الملك، وله الحمد، وهو على كل شيء قدير",
        ur: "اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اسی کی بادشاہی ہے اور اسی کی تمام تعریفیں ہیں اور وہ ہر چیز پر قادر ہے۔",
        hi: "अल्लाह के सिवा कोई माबूद नहीं, वह अकेला है, उसका कोई शरीक नहीं, उसी की बादशाहत है और उसी की सब तारीफें हैं और वह हर चीज़ पर क़ादिर है।"
    },
    count: 0,
    target: 100,
    Icon: Star,
    virtue: {
        en: "Reward of freeing 10 slaves and protection from Shaytan.",
        ar: "ثواب عتق 10 رقاب وحماية من الشيطان.",
        ur: "دس غلام آزاد کرنے کا ثواب اور شیطان سے حفاظت۔",
        hi: "10 गुलामों को आज़ाद करने का इनाम और शैतान से सुरक्षा।"
    },
    hadith: "Sahih al-Bukhari 3293",
    hadithLink: "https://sunnah.com/bukhari:3293",
  },
  {
    id: 4,
    name: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَٰهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ",
    translation: {
        en: "Glory is to Allah, All praise is to Allah, There is no god but Allah, Allah is the Greatest",
        ar: "سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر",
        ur: "اللہ پاک ہے، تمام تعریفیں اللہ کے لیے ہیں، اللہ کے سوا کوئی معبود نہیں، اللہ سب سے بڑا ہے۔",
        hi: "अल्लाह की महिमा है, सभी प्रशंसा अल्लाह के लिए है, अल्लाह के सिवा कोई ईश्वर नहीं है, अल्लाह सबसे बड़ा है"
    },
    count: 0,
    target: 100,
    Icon: Sparkles,
    virtue: {
        en: "Most beloved words to Allah.",
        ar: "أحب الكلمات إلى الله.",
        ur: "اللہ کو سب سے زیادہ پسندیدہ کلمات۔",
        hi: "अल्लाह को सबसे प्यारे शब्द।"
    },
    hadith: "Sahih Muslim 2137",
    hadithLink: "https://sunnah.com/muslim:2137",
  },
  {
    id: 5,
    name: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    translation: {
        en: "I seek the forgiveness of Allah and repent to Him",
        ar: "أستغفر الله وأتوب إليه",
        ur: "میں اللہ سے مغفرت مانگتا ہوں اور اسی کی طرف توبہ کرتا ہوں۔",
        hi: "मैं अल्लाह से क्षमा चाहता हूँ और उसी से तौबा करता हूँ"
    },
    count: 0,
    target: 100,
    Icon: HeartHandshake,
    virtue: {
        en: "The Prophet ﷺ used to say it more than 70 (or 100) times daily.",
        ar: "كان النبي ﷺ يقولها أكثر من 70 (أو 100) مرة يومياً.",
        ur: "نبی کریم ﷺ روزانہ 70 (یا 100) سے زیادہ مرتبہ یہ پڑھا کرتے تھے۔",
        hi: "नबी ﷺ इसे दिन में 70 (या 100) से ज़्यादा बार कहते थे।"
    },
    hadith: "Sahih Muslim 2702",
    hadithLink: "https://sunnah.com/muslim:2702",
  },
  {
    id: 6,
    name: "اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    translation: {
        en: "O Allah, You are my Lord, there is no god but You. You created me and I am Your slave. I am upon Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have made. I acknowledge Your favor upon me, and I acknowledge my sin. So forgive me, for verily none forgives sins except You.",
        ar: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي، وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت.",
        ur: "اے اللہ تو میرا رب ہے تیرے سوا کوئی معبود نہیں تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں اور میں اپنی طاقت کے مطابق تیرے عہد اور وعدے پر قائم ہوں میں اپنے کیے ہوئے شر سے تیری پناہ مانگتا ہوں میں اپنے اوپر تیری نعمت کا اقرار کرتا ہوں اور اپنے گناہ کا اقرار کرتا ہوں پس مجھے بخش دے کیونکہ تیرے سوا کوئی گناہوں کو نہیں بخشتا۔",
        hi: "हे अल्लाह, तू मेरा रब है, तेरे सिवा कोई माबूद नहीं। तूने मुझे बनाया और मैं तेरा बंदा हूँ। मैं अपनी ताक़त के मुताबिक़ तेरे अहद और वादे पर क़ायम हूँ। मैं अपने किए हुए बुरे कामों से तेरी पनाह माँगता हूँ। मैं अपने ऊपर तेरी नेमतों का इक़रार करता हूँ, और मैं अपने गुनाहों का इक़रार करता हूँ। तो मुझे माफ़ कर दे, क्योंकि तेरे सिवा कोई गुनाहों को माफ़ नहीं करता।"
    },
    count: 0,
    target: 1,
    Icon: ShieldCheck,
    virtue: {
        en: "Whoever says it in the morning with conviction and dies that day enters Jannah.",
        ar: "من قالها في الصباح بيقين ومات ذلك اليوم دخل الجنة.",
        ur: "جو شخص صبح کو یقین کے ساتھ یہ دعا پڑھے اور اسی دن مر جائے تو وہ جنت میں داخل ہو گا۔",
        hi: "जो कोई इसे सुबह विश्वास के साथ कहे और उसी दिन मर जाए तो वह जन्नत में प्रवेश करेगा।"
    },
    hadith: "Sahih al-Bukhari 6306",
    hadithLink: "https://sunnah.com/bukhari:6306",
  },
  {
    id: 7,
    name: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
    translation: {
        en: "O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim. Verily, You are full of praise and majesty. O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim. Verily, You are full of praise and majesty.",
        ar: "اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد، اللهم بارك على محمد وعلى آل محمد كما باركت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد.",
        ur: "اے اللہ، محمد اور آل محمد پر رحمت نازل فرما جس طرح تو نے ابراہیم اور آل ابراہیم پر رحمت نازل فرمائی، بے شک تو قابل تعریف اور بزرگی والا ہے۔ اے اللہ، محمد اور آل محمد پر برکت نازل فرما جس طرح تو نے ابراہیم اور آل ابراہیم پر برکت نازل فرمائی، بے شک تو قابل تعریف اور بزرگی والا ہے۔",
        hi: "हे अल्लाह, मुहम्मद और मुहम्मद के परिवार पर रहमत भेज, जैसे तूने इब्राहीम और इब्राहीम के परिवार पर रहमत भेजी थी। बेशक, तू प्रशंसा और महिमा से भरा है। हे अल्लाह, मुहम्मद और मुहम्मद के परिवार पर बरकत भेज, जैसे तूने इब्राहीम और इब्राहीम के परिवार पर बरकत भेजी थी। बेशक, तू प्रशंसा और महिमा से भरा है।"
    },
    count: 0,
    target: 10,
    Icon: Wind,
    virtue: {
        en: "One salawat equals ten blessings from Allah.",
        ar: "صلاة واحدة تساوي عشر بركات من الله.",
        ur: "ایک صلوات اللہ کی طرف سے دس رحمتوں کے برابر ہے۔",
        hi: "एक सलवात अल्लाह की दस रहमतों के बराबर है।"
    },
    hadith: "Sahih al-Bukhari 3370",
    hadithLink: "https://sunnah.com/bukhari:3370",
  },
  {
    id: 8,
    name: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ",
    translation: {
        en: "In the name of Allah, with whose name nothing can harm on earth or in the heavens, and He is The All-Hearing, The All-Knowing.",
        ar: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء، وهو السميع العليم.",
        ur: "اللہ کے نام سے جس کے نام سے زمین و آسمان میں کوئی چیز نقصان نہیں پہنچا سکتی اور وہ سننے والا، جاننے والا ہے۔",
        hi: "अल्लाह के नाम से, जिसके नाम से धरती या आकाश में कोई चीज़ नुकसान नहीं पहुँचा सकती, और वह सब कुछ सुनने वाला, सब कुछ जानने वाला है।"
    },
    count: 0,
    target: 3,
    Icon: Shield,
    virtue: {
        en: "Recite 3x morning/evening – nothing will harm you.",
        ar: "قلها 3 مرات صباحًا/مساءً - لن يضرك شيء.",
        ur: "صبح و شام 3 مرتبہ پڑھیں - کوئی چیز آپ کو نقصان نہیں پہنچائے گی۔",
        hi: "सुबह-शाम 3 बार पढ़ें - कोई चीज़ आपको नुकसान नहीं पहुँचाएगी।"
    },
    hadith: "Tirmidhi 3388",
    hadithLink: "https://sunnah.com/tirmidhi:3388",
  },
  {
    id: 9,
    name: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    translation: {
        en: "Allah is sufficient for me. There is no god but Him. In Him I have placed my trust, and He is the Lord of the great throne.",
        ar: "حسبي الله لا إله إلا هو، عليه توكلت، وهو رب العرش العظيم.",
        ur: "میرے لیے اللہ ہی کافی ہے، اس کے سوا کوئی معبود نہیں، میں نے اسی پر بھروسہ کیا اور وہ عرش عظیم کا رب ہے۔",
        hi: "मेरे लिए अल्लाह ही काफी है। उसके सिवा कोई माबूद नहीं। मैंने उसी पर भरोसा किया, और वह महान अर्श का रब है।"
    },
    count: 0,
    target: 7,
    Icon: CheckCircle,
    virtue: {
        en: "Recite 7× in the morning – Allah is sufficient for your worries.",
        ar: "قلها 7 مرات في الصباح - يكفيك الله همومك.",
        ur: "صبح 7 مرتبہ پڑھیں - اللہ آپ کی پریشانیوں کے لیے کافی ہو گا۔",
        hi: "सुबह 7 बार पढ़ें - अल्लाह आपकी चिंताओं के लिए काफी है।"
    },
    hadith: "Abu Dawud 5081",
    hadithLink: "https://sunnah.com/abudawud:5081",
  },
    {
    id: 10,
    name: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
    translation: {
        en: "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection.",
        ar: "اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور.",
        ur: "اے اللہ، تیرے ہی نام سے ہم نے صبح کی اور تیرے ہی نام سے شام کی، تیرے ہی نام سے ہم جیتے ہیں اور تیرے ہی نام سے مرتے ہیں اور تیری ہی طرف اٹھنا ہے۔",
        hi: "ऐ अल्लाह, तेरे द्वारा हम सुबह में प्रवेश करते हैं और तेरे द्वारा हम शाम में प्रवेश करते हैं, तेरे द्वारा हम जीते हैं और तेरे द्वारा हम मरते हैं, और तेरी ओर ही पुनरुत्थान है।"
    },
    count: 0,
    target: 1,
    Icon: Sunrise,
    virtue: {
        en: "Morning dhikr taught by the Prophet ﷺ.",
        ar: "علم النبي ﷺ ذكر الصباح.",
        ur: "صبح کا ذکر جو نبی کریم ﷺ نے سکھایا۔",
        hi: "सुबह का ज़िक्र जो नबी ﷺ ने सिखाया।"
    },
    hadith: "Tirmidhi 3391",
    hadithLink: "https://sunnah.com/tirmidhi:3391",
  },
];
