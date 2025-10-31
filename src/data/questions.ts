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
        description: "قصير القامة… لكن تاريخه أطول من كل المدافعين الذين حاولوا إسقاطه.",
        hint: "يحمل الرقم 10",
        answer: "ليونيل ميسي"
      },
      {
        id: 2,
        description: "لا ينام قبل أن يسجل… ولا يرضى أن يُذكر اسمه في المركز الثاني",
        hint: "صاروخ ماديرا",
        answer: "كريستيانو رونالدو"
      },
      {
        id: 3,
        description: "لم يحتج أوروبا ليصبح أسطورة",
        hint: "حمل بلاده إلى المجد ثلاث مرات",
        answer: "بيليه"
      },
      {
        id: 4,
        description: "الكل رآه الفائز الحقيقي… لكن الجائزة اختارت غيره",
        hint: "الكل تعنصر عليه",
        answer: "فينيسيوس جونيور"
      },
      {
        id: 5,
        description: "لم يرث الشهرة فقط… بل ورث أيضًا حب الشباك من والده ",
        hint: "نرويجي",
        answer: "إيرلينج هالاند"
      },
      {
        id: 6,
        description: "سجّل، قاتل، أعاد الأمل أكثر من مرة… لكن الحظ قرر أن يقف ضده في الليلة التي كتب فيها التاريخ اسمه من ذهب.",
        hint: "حرز ثلاثية في نهائي كأس العالم",
        answer: "كيليان مبابي"
      },
      {
        id: 7,
        description: "كان الجدار الذي أنقذ مانشستر مرارًا… لكن حتى الجدران تُهدم عندما تخونها الثقة",
        hint: "حارس إسباني",
        answer: "ديفيد دي خيا"
      },
      {
        id: 8,
        description: "كثيرون سجلوا أهدافًا… لكنه سجل لحظات لا تُنسى. كل قفزة له كانت وعدًا بالنجاة",
        hint: " هدفه في لشبونة ما زال خالد للحين ومسمى باسمه",
        answer: "سيرخيو راموس"
      },
      {
        id: 9,
        description: "موهبة وُلدت لتلمع، لكن الضباب في إنجلترا كان أثقل من نوره",
        hint: "عاد إلى ألمانيا بعد موسمٍ صعب في إنجلترا",
        answer: "جادون سانشو"
      },
      {
        id: 10,
        description: "في عالمٍ مليء بالصخب، كان هو الهدوء الذي لا يُقدّر بثمن.",
        hint: "المحور الهادئ في أعظم جيل لبرشلونة",
        answer: "سيرجيو بوسكيتس"
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
