import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";
import { Category } from "@/data/questions";
import { toast } from "sonner";

interface RandomSelectorProps {
  categories: Category[];
  onSelectRandom: (categoryId: string, questionIndex: number) => void;
}

export const RandomSelector = ({
  categories,
  onSelectRandom,
}: RandomSelectorProps) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const selectRandom = () => {
    setIsSpinning(true);

    // Simulate roulette animation
    setTimeout(() => {
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      const randomQuestionIndex = Math.floor(
        Math.random() * randomCategory.questions.length
      );

      onSelectRandom(randomCategory.id, randomQuestionIndex);
      setIsSpinning(false);

      toast.success("تم الاختيار!", {
        description: `${randomCategory.name} - السؤال ${randomQuestionIndex + 1}`,
      });
    }, 2000);
  };

  return (
    <div className="flex justify-center mb-8">
      <Button
        onClick={selectRandom}
        disabled={isSpinning}
        size="lg"
        className={`rounded-full px-8 py-6 text-lg font-bold gap-3 neon-glow ${
          isSpinning ? "animate-spin-slow" : ""
        }`}
      >
        <Dices className={`h-6 w-6 ${isSpinning ? "animate-spin-slow" : ""}`} />
        {isSpinning ? "جاري الاختيار..." : "اختيار عشوائي"}
      </Button>
    </div>
  );
};
