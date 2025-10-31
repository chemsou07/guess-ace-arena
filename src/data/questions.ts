export interface Question {
  id: number;
  description: string;
  hint: string;
  answer: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  questions: Question[];
}

export const categories: Category[] = [
  {
    id: "player",
    name: "اللاعب",
    icon: "⚽",
    color: "from-cyan-500 to-blue-500",
    questions: [
      {
        id: 1,
        description: "لاعب كرة قدم أرجنتيني معروف بقدمه اليسرى الساحرة وفاز بـ 8 كرات ذهبية",
        hint: "رقمه 10 ولعب مع برشلونة لسنوات طويلة",
        answer: "ليونيل ميسي"
      },
      {
        id: 2,
        description: "لاعب برتغالي يُلقب بـ CR7 ومعروف بقفزاته العالية وتسديداته القوية",
        hint: "لعب مع مانشستر يونايتد وريال مدريد ويوفنتوس",
        answer: "كريستيانو رونالدو"
      },
      {
        id: 3,
        description: "لاعب مصري يلعب لليفربول ويُلقب بالملك المصري",
        hint: "هداف وصانع ألعاب، رقمه 11",
        answer: "محمد صلاح"
      },
      {
        id: 4,
        description: "نجم برازيلي شاب يلعب لريال مدريد، معروف بسرعته ومهاراته",
        hint: "انتقل من سانتوس وفاز بالدوري الإسباني",
        answer: "فينيسيوس جونيور"
      },
      {
        id: 5,
        description: "مهاجم نرويجي شاب يسجل الأهداف بغزارة مع مانشستر سيتي",
        hint: "ابن لاعب سابق، رقمه 9",
        answer: "إيرلينج هالاند"
      },
      {
        id: 6,
        description: "لاعب فرنسي فاز بكأس العالم 2018 ويلعب لريال مدريد",
        hint: "مهاجم سريع جداً، رقمه 9",
        answer: "كيليان مبابي"
      },
      {
        id: 7,
        description: "حارس مرمى بلجيكي طويل القامة يلعب لريال مدريد",
        hint: "يُعتبر من أفضل حراس العالم",
        answer: "تيبو كورتوا"
      },
      {
        id: 8,
        description: "لاعب كرة سلة أمريكي أسطورة لعب مع شيكاغو بولز ورقمه 23",
        hint: "يُلقب بـ His Airness وله علامة تجارية للأحذية",
        answer: "مايكل جوردان"
      },
      {
        id: 9,
        description: "لاعب كرة سلة أمريكي يلعب حالياً مع لوس أنجلوس ليكرز ويُلقب بالملك",
        hint: "رقمه 23 أو 6، من أفضل اللاعبين في التاريخ",
        answer: "ليبرون جيمس"
      },
      {
        id: 10,
        description: "لاعب تنس صربي فاز بأكثر من 24 بطولة جراند سلام",
        hint: "يُلقب بـ Nole وهو من أعظم لاعبي التنس",
        answer: "نوفاك ديوكوفيتش"
      }
    ]
  },
  {
    id: "anime",
    name: "شخصية أنمي",
    icon: "🎌",
    color: "from-purple-500 to-pink-500",
    questions: [
      {
        id: 1,
        description: "شاب أشقر يحلم بأن يصبح هوكاغي ويحمي قريته",
        hint: "يستخدم تقنية راسينجان والنسخ الوهمية",
        answer: "ناروتو أوزوماكي"
      },
      {
        id: 2,
        description: "قرصان يرتدي قبعة قش ويبحث عن كنز الون بيس",
        hint: "أكل فاكهة الشيطان وجسمه مطاطي",
        answer: "مونكي دي لوفي"
      },
      {
        id: 3,
        description: "صياد يبحث عن والده ولديه قدرات نين قوية",
        hint: "أفضل صديق له اسمه كيلوا",
        answer: "غون فريكس"
      },
      {
        id: 4,
        description: "شاب برتقالي الشعر يحمي المدينة كبديل لحاصد الأرواح",
        hint: "يحمل سيف ضخم ويحارب الهولو",
        answer: "إيتشيغو كوروساكي"
      },
      {
        id: 5,
        description: "فتى أصلع بقوة خارقة يهزم أعداءه بلكمة واحدة",
        hint: "بطل من أجل الهواية",
        answer: "سايتاما (وان بانش مان)"
      },
      {
        id: 6,
        description: "شاب ذو شعر أسود مستهتر يحب الحلويات ويحل الجرائم",
        hint: "عبقري محقق يُلقب بـ L",
        answer: "ال لولايت (L)"
      },
      {
        id: 7,
        description: "صبي يعيش في عالم يمتلك فيه معظم الناس قوى خارقة",
        hint: "يُلقب بـ Deku ويرث قوة One For All",
        answer: "إيزوكو ميدوريا"
      },
      {
        id: 8,
        description: "قاتل شياطين شاب يحاول إيجاد علاج لأخته التي تحولت لشيطان",
        hint: "يستخدم تقنية تنفس الماء",
        answer: "تانجيرو كامادو"
      },
      {
        id: 9,
        description: "شاب يدرس الخيمياء مع أخيه الذي فقد جسده",
        hint: "أخوه عبارة عن درع حديدي",
        answer: "إدوارد إلريك"
      },
      {
        id: 10,
        description: "طالب يحصل على دفتر الموت ويقرر تطهير العالم من المجرمين",
        hint: "يُطلق عليه اسم كيرا",
        answer: "لايت ياغامي"
      }
    ]
  },
  {
    id: "series",
    name: "شخصية من مسلسل",
    icon: "🎬",
    color: "from-emerald-500 to-teal-500",
    questions: [
      {
        id: 1,
        description: "أستاذ كيمياء يتحول إلى صانع ميثامفيتامين بعد إصابته بالسرطان",
        hint: "يُعرف باسم Heisenberg",
        answer: "والتر وايت"
      },
      {
        id: 2,
        description: "محامي ذكي وماكر، أخو والتر وايت",
        hint: "Better Call ___",
        answer: "سول غودمان (جيمي ماكجيل)"
      },
      {
        id: 3,
        description: "عائلة غنية تحكم الأراضي السبع ويقع صراع على العرش الحديدي",
        hint: "Winter is Coming",
        answer: "جون سنو / تايرون لانستر"
      },
      {
        id: 4,
        description: "طبيب نفسي يأكل لحم البشر بطريقة راقية",
        hint: "يُلقب بـ Hannibal the Cannibal",
        answer: "هانيبال ليكتر"
      },
      {
        id: 5,
        description: "عصابة تخطط لسرقة البنك المركزي الإسباني وترتدي أقنعة دالي",
        hint: "Bella Ciao",
        answer: "البروفيسور (La Casa de Papel)"
      },
      {
        id: 6,
        description: "محقق استشاري عبقري يعيش في لندن ولديه صديق طبيب",
        hint: "221B Baker Street",
        answer: "شيرلوك هولمز"
      },
      {
        id: 7,
        description: "شاب يعيش في عالم الأشياء الغريبة ولديه أصدقاء يحاربون الوحوش",
        hint: "Stranger Things - فتى يختفي في البداية",
        answer: "مايك ويلر / إليفن"
      },
      {
        id: 8,
        description: "رجل غني يعيش حياة مزدوجة كمقاتل ضد الجريمة في مدينته",
        hint: "أنا الظلام، أنا الانتقام...",
        answer: "باتمان / بروس واين"
      },
      {
        id: 9,
        description: "مكتب ورق في سكرانتون، مدير مضحك ومحرج",
        hint: "That's what she said",
        answer: "مايكل سكوت"
      },
      {
        id: 10,
        description: "ستة أصدقاء يعيشون في نيويورك ويجتمعون في مقهى",
        hint: "Central Perk",
        answer: "روس / راشيل / تشاندلر / مونيكا / جوي / فيبي"
      }
    ]
  },
  {
    id: "celebrity",
    name: "مشهور",
    icon: "⭐",
    color: "from-amber-500 to-orange-500",
    questions: [
      {
        id: 1,
        description: "يوتيوبر سويدي معروف بالألعاب والميمز وله أكبر قناة فردية",
        hint: "اسمه يبدأ بـ Pew",
        answer: "بيوديباي (PewDiePie)"
      },
      {
        id: 2,
        description: "يوتيوبر أمريكي معروف بتحدياته الخيرية والجوائز الضخمة",
        hint: "اسمه يبدأ بـ Mr",
        answer: "مستر بيست (MrBeast)"
      },
      {
        id: 3,
        description: "مطرب كندي معروف بأغنية Blinding Lights",
        hint: "يغني في Super Bowl 2021",
        answer: "ذا ويكند (The Weeknd)"
      },
      {
        id: 4,
        description: "رجل أعمال ملياردير يملك تسلا وسبيس إكس واشترى تويتر",
        hint: "أغنى رجل في العالم",
        answer: "إيلون ماسك"
      },
      {
        id: 5,
        description: "مغنية أمريكية شهيرة بأغاني Bad Guy وOcean Eyes",
        hint: "ترتدي ملابس واسعة وشعر أخضر سابقاً",
        answer: "بيلي آيليش"
      },
      {
        id: 6,
        description: "ممثل أمريكي شهير بدور الرجل الحديدي في مارفل",
        hint: "Tony Stark",
        answer: "روبرت داوني جونيور"
      },
      {
        id: 7,
        description: "ممثل صخرة سابق في WWE، الآن نجم أفلام أكشن",
        hint: "Can you smell what ___ is cooking?",
        answer: "دواين جونسون (The Rock)"
      },
      {
        id: 8,
        description: "مغنية أمريكية معروفة بأغنية Shake It Off و Love Story",
        hint: "Swifties",
        answer: "تايلور سويفت"
      },
      {
        id: 9,
        description: "مؤسس فيسبوك وميتا",
        hint: "أنشأ أكبر شبكة تواصل اجتماعي",
        answer: "مارك زوكربيرج"
      },
      {
        id: 10,
        description: "ستريمر أمريكي شهير يلعب فورتنايت وماينكرافت على تويتش",
        hint: "Ninja ___",
        answer: "نينجا (Tyler Blevins)"
      }
    ]
  }
];
