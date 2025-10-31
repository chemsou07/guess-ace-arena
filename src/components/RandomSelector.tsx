import { useState, useEffect } from "react";
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
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSpinning) {
      interval = setInterval(() => {
        setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isSpinning, categories.length]);

  const selectRandom = () => {
    setIsSpinning(true);

    // Simulate roulette animation
    setTimeout(() => {
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      const randomQuestionIndex = Math.floor(
        Math.random() * randomCategory.questions.length
      );

      setCurrentCategoryIndex(categories.findIndex(c => c.id === randomCategory.id));
      onSelectRandom(randomCategory.id, randomQuestionIndex);
      setIsSpinning(false);

      toast.success("تم الاختيار!", {
        description: `${randomCategory.name} - السؤال ${randomQuestionIndex + 1}`,
      });
    }, 3000);
  };

  return (
    <div className="mb-8 space-y-6">
      {/* Roulette Display */}
      <div className="glass-morphism rounded-2xl p-6">
        <div className="flex items-center justify-center gap-4 overflow-hidden">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`transition-all duration-200 ${
                index === currentCategoryIndex && isSpinning
                  ? "scale-125 opacity-100"
                  : "scale-75 opacity-40"
              }`}
            >
              <div
                className={`w-20 h-20 rounded-xl flex flex-col items-center justify-center gap-1 ${
                  index === currentCategoryIndex
                    ? "glass-morphism neon-glow"
                    : "bg-muted/50"
                }`}
              >
                <span className="text-3xl">{category.icon}</span>
                <span className="text-xs font-medium">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spin Button */}
      <div className="flex justify-center">
        <Button
          onClick={selectRandom}
          disabled={isSpinning}
          size="lg"
          className="rounded-full px-8 py-6 text-lg font-bold gap-3 bg-gold hover:bg-gold/90 text-background"
        >
          <Dices className="h-6 w-6" />
          {isSpinning ? "جاري الاختيار..." : "🎰 اختيار عشوائي"}
        </Button>
      </div>
    </div>
  );
};
