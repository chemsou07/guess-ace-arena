import { Category } from "@/data/questions";
import { Button } from "@/components/ui/button";

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: Category | null;
  onSelectCategory: (category: Category) => void;
}

export const CategorySelector = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategorySelectorProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onSelectCategory(category)}
          variant={selectedCategory?.id === category.id ? "default" : "outline"}
          className={`h-24 text-lg font-semibold flex flex-col gap-2 rounded-xl transition-all duration-300 hover:scale-105 ${
            selectedCategory?.id === category.id ? "neon-glow" : ""
          }`}
        >
          <span className="text-4xl">{category.icon}</span>
          <span>{category.name}</span>
        </Button>
      ))}
    </div>
  );
};
