import { useState } from "react";
import { Question } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Lightbulb, Eye, ChevronLeft, ChevronRight } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
}

export const QuestionCard = ({
  question,
  questionNumber,
  totalQuestions,
  onNext,
  onPrevious,
}: QuestionCardProps) => {
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="glass-morphism rounded-2xl p-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-muted-foreground">
          السؤال {questionNumber} من {totalQuestions}
        </span>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold leading-relaxed">
          {question.description}
        </h2>

        {showHint && (
          <div className="bg-accent/20 border-2 border-accent rounded-xl p-6 animate-slide-up">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">💡 تلميح:</p>
              <p className="text-xl font-semibold text-accent">
                {question.hint}
              </p>
            </div>
          </div>
        )}

        {showAnswer && (
          <div className="bg-primary/20 border-2 border-primary rounded-xl p-6 animate-slide-up">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">الإجابة:</p>
              <p className="text-3xl font-bold text-primary neon-text">
                {question.answer}
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <Button
            onClick={toggleHint}
            variant={showHint ? "secondary" : "outline"}
            className="rounded-full gap-2"
          >
            <Lightbulb className="h-5 w-5" />
            {showHint ? "إخفاء التلميح" : "تلميح"}
          </Button>

          <Button
            onClick={() => setShowAnswer(!showAnswer)}
            variant={showAnswer ? "secondary" : "outline"}
            className="rounded-full gap-2"
          >
            <Eye className="h-5 w-5" />
            {showAnswer ? "إخفاء الإجابة" : "عرض الإجابة"}
          </Button>
        </div>

        <div className="flex gap-3 justify-between pt-6 border-t border-border">
          <Button
            onClick={onPrevious}
            disabled={questionNumber === 1}
            variant="outline"
            className="rounded-full gap-2"
          >
            <ChevronRight className="h-5 w-5" />
            السابق
          </Button>

          <Button
            onClick={onNext}
            disabled={questionNumber === totalQuestions}
            className="rounded-full gap-2"
          >
            التالي
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
