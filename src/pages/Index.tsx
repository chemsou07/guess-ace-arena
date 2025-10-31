import { useState } from "react";
import { categories } from "@/data/questions";
import { ScoreBoard } from "@/components/ScoreBoard";
import { Timer } from "@/components/Timer";
import { CategorySelector } from "@/components/CategorySelector";
import { QuestionCard } from "@/components/QuestionCard";
import { RandomSelector } from "@/components/RandomSelector";
import { toast } from "sonner";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);

  const handleSelectCategory = (category: typeof categories[0]) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setShowQuestion(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < selectedCategory.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRandomSelect = (categoryId: string, questionIndex: number) => {
    const category = categories.find((c) => c.id === categoryId);
    if (category) {
      setSelectedCategory(category);
      setCurrentQuestionIndex(questionIndex);
      setShowQuestion(true);
    }
  };

  const handleTimeUp = () => {
    toast.error("انتهى الوقت! ⏰");
  };

  return (
    <div className="min-h-screen gradient-bg py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 neon-text">
            🎮 مسابقة ديسكورد
          </h1>
          <p className="text-xl text-muted-foreground">
            اختبر معلوماتك في مختلف المجالات
          </p>
        </header>

        {/* Score Board */}
        <ScoreBoard />

        {/* Random Selector */}
        <RandomSelector
          categories={categories}
          onSelectRandom={handleRandomSelect}
        />

        {/* Category Selector */}
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Question Card */}
        {showQuestion && selectedCategory && (
          <div className="max-w-4xl mx-auto">
            <QuestionCard
              question={selectedCategory.questions[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={selectedCategory.questions.length}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          </div>
        )}

        {!showQuestion && (
          <div className="glass-morphism rounded-2xl p-12 text-center max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">اختر تصنيف أو اضغط على الاختيار العشوائي</h2>
            <p className="text-xl text-muted-foreground">لبدء المسابقة 🎮</p>
          </div>
        )}

        {/* Timer - Fixed Position */}
        <Timer onTimeUp={handleTimeUp} />
      </div>
    </div>
  );
};

export default Index;
