export interface PowerUp {
  id: string;
  name: string;
  icon: string;
  description: string;
  used: boolean;
}

export const initialPowerUps: PowerUp[] = [
  {
    id: "extra_hint",
    name: "تلميح إضافي",
    icon: "🕵️‍♂️",
    description: "احصل على تلميح إضافي للسؤال الحالي",
    used: false,
  },
  {
    id: "freeze_time",
    name: "إيقاف الوقت",
    icon: "⏸️",
    description: "أوقف المؤقت لمدة 5 ثواني",
    used: false,
  },
  {
    id: "double_guess",
    name: "تخمين مزدوج",
    icon: "🎲",
    description: "يمكنك الإجابة مرتين على السؤال",
    used: false,
  },
];
