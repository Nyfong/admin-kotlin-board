import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Recipe } from "@/type/food";
export function FoodDigalog({ recipe }: { recipe: Recipe }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {!recipe ? (
          // Loading state
          <div className="rounded-md border border-gray-100 p-6 text-center text-gray-500">
            Loading...
          </div>
        ) : (
          // Actual content
          <div className="rounded-md border border-gray-100 overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
            />

            <div className="relative border border-gray-100 bg-white p-6">
              <span className="bg-yellow-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap">
                {recipe.rating}
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {recipe.title}
              </h3>
            </div>
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg md:max-w-4xl  h-[90vh] ">
        <DialogTitle>{recipe.title}</DialogTitle>
        <div className="rounded-lg border border-gray-200 shadow-sm overflow-hidden bg-white overflow-y-auto">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="p-6 space-y-4">
            {/* Rating */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                ★ {recipe.rating} ({recipe.totalRatings})
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {recipe.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {recipe.description}
              </p>
            </div>

            {/* Category & Difficulty */}
            <div className="flex justify-between text-sm text-gray-500">
              <span className="font-medium">Category: {recipe.category}</span>
              <span className="font-medium">
                Difficulty: {recipe.difficulty}
              </span>
            </div>

            {/* Time & Servings */}
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
              <span>Prep: {recipe.prepTime} min</span>
              <span>Cook: {recipe.cookTime} min</span>
              <span>Total: {recipe.totalTime} min</span>
              <span>Servings: {recipe.servings}</span>
            </div>

            {/* Nutrition */}
            <div className="text-sm text-gray-500">
              <h4 className="font-medium text-gray-700">Nutrition Facts</h4>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <span>Calories: {recipe.nutritionFacts.calories}</span>
                <span>Protein: {recipe.nutritionFacts.protein}g</span>
                <span>Carbs: {recipe.nutritionFacts.carbs}g</span>
                <span>Fat: {recipe.nutritionFacts.fat}g</span>
                <span>Fiber: {recipe.nutritionFacts.fiber}g</span>
                <span>Sugar: {recipe.nutritionFacts.sugar}g</span>
              </div>
            </div>

            {/* Ingredients */}
            <div className="text-sm text-gray-500">
              <h4 className="font-medium text-gray-700">Ingredients</h4>
              <ul className="list-disc list-inside mt-1 space-y-1">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>
                    {ing.item}: {ing.amount} ({ing.metric})
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="text-sm text-gray-500">
              <h4 className="font-medium text-gray-700">Instructions</h4>
              <ol className="list-decimal list-inside mt-1 space-y-1">
                {recipe.instructions.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <img
                src={recipe.author.avatar}
                alt={recipe.author.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="flex items-center gap-2">
                <span className="font-medium">{recipe.author.name}</span>
                {recipe.author.verified && (
                  <span className="text-blue-500">✔</span>
                )}
                <span>Followers: {recipe.author.followers}</span>
              </div>
            </div>

            {/* Dates */}
            <div className="text-xs text-gray-400">
              <p>Created: {recipe.createdAt}</p>
              <p>Updated: {recipe.updatedAt}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
