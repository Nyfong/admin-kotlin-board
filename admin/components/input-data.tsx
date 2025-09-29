"use client";
import React, { useState } from "react";
import { Plus, Minus, Upload, Clock, Users, ChefHat, X } from "lucide-react";

// Type definitions
interface Ingredient {
  item: string;
  amount: string;
  metric: string;
}

interface NutritionFacts {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
}

interface FormData {
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
  nutritionFacts: NutritionFacts;
}

const InputWithButton: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    image: "",
    category: "Italian",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    calories: 0,
    ingredients: [{ item: "", amount: "", metric: "" }],
    instructions: [""],
    tags: [""],
    nutritionFacts: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      sugar: 0,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const handleInputChange = (
    field: keyof FormData,
    value: string | number
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedChange = (
    field: "instructions" | "tags",
    index: number,
    value: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleIngredientChange = (
    index: number,
    field: keyof Ingredient,
    value: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.map((ingredient, i) =>
        i === index ? { ...ingredient, [field]: value } : ingredient
      ),
    }));
  };

  const handleNutritionChange = (
    field: keyof NutritionFacts,
    value: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      nutritionFacts: {
        ...prev.nutritionFacts,
        [field]: parseInt(value) || 0,
      },
    }));
  };

  const addItem = (field: "ingredients" | "instructions" | "tags"): void => {
    setFormData((prev) => ({
      ...prev,
      [field]:
        field === "ingredients"
          ? [...prev[field], { item: "", amount: "", metric: "" }]
          : [...prev[field], ""],
    }));
  };

  const removeItem = (
    field: "ingredients" | "instructions" | "tags",
    index: number
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Calculate total time
    const totalTime = formData.prepTime + formData.cookTime;

    // Filter out empty tags and instructions
    const cleanTags = formData.tags.filter((tag) => tag.trim() !== "");
    const cleanInstructions = formData.instructions.filter(
      (instruction) => instruction.trim() !== ""
    );
    const cleanIngredients = formData.ingredients.filter(
      (ingredient) =>
        ingredient.item.trim() !== "" && ingredient.amount.trim() !== ""
    );

    const recipeData = {
      ...formData,
      totalTime,
      tags: cleanTags,
      instructions: cleanInstructions,
      ingredients: cleanIngredients,
      rating: 0,
      totalRatings: 0,
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    };

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Recipe Data to Submit:", recipeData);
      setSubmitMessage("Recipe posted successfully! 🎉");

      // Reset form after successful submission
      setTimeout(() => {
        setSubmitMessage("");
        setFormData({
          title: "",
          description: "",
          image: "",
          category: "Italian",
          difficulty: "Easy",
          prepTime: 15,
          cookTime: 20,
          servings: 4,
          calories: 0,
          ingredients: [{ item: "", amount: "", metric: "" }],
          instructions: [""],
          tags: [""],
          nutritionFacts: {
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            fiber: 0,
            sugar: 0,
          },
        });
      }, 3000);
    } catch (error) {
      setSubmitMessage("Error posting recipe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full py-8  overflow-y-auto px-4 md:px-0">
      <div className="w-[90vw] md:w-full mx-auto">
        {/* Success Message */}
        {submitMessage && (
          <div className="mb-6 p-4  rounded-lg text-center">
            {submitMessage}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Basic Info */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recipe Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recipe Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your recipe title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Describe your recipe..."
              />
            </div>

            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Italian">Italian</option>
                  <option value="American">American</option>
                  <option value="Asian">Asian</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Mediterranean">Mediterranean</option>
                  <option value="Indian">Indian</option>
                  <option value="French">French</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty
                </label>
                <select
                  value={formData.difficulty}
                  onChange={(e) =>
                    handleInputChange("difficulty", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline w-4 h-4 mr-1" />
                  Servings
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.servings}
                  onChange={(e) =>
                    handleInputChange("servings", parseInt(e.target.value) || 1)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Calories per serving
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.calories}
                  onChange={(e) =>
                    handleInputChange("calories", parseInt(e.target.value) || 0)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline w-4 h-4 mr-1" />
                  Prep Time (minutes)
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.prepTime}
                  onChange={(e) =>
                    handleInputChange("prepTime", parseInt(e.target.value) || 0)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <ChefHat className="inline w-4 h-4 mr-1" />
                  Cook Time (minutes)
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.cookTime}
                  onChange={(e) =>
                    handleInputChange("cookTime", parseInt(e.target.value) || 0)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Ingredients</h2>
              <button
                type="button"
                onClick={() => addItem("ingredients")}
                className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Ingredient</span>
              </button>
            </div>

            <div className="space-y-3">
              {formData.ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-12 gap-3 items-center"
                >
                  <div className="md:col-span-5">
                    <input
                      type="text"
                      value={ingredient.item}
                      onChange={(e) =>
                        handleIngredientChange(index, "item", e.target.value)
                      }
                      placeholder="Ingredient name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <input
                      type="text"
                      value={ingredient.amount}
                      onChange={(e) =>
                        handleIngredientChange(index, "amount", e.target.value)
                      }
                      placeholder="Amount (e.g., 1 cup)"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <input
                      type="text"
                      value={ingredient.metric}
                      onChange={(e) =>
                        handleIngredientChange(index, "metric", e.target.value)
                      }
                      placeholder="Metric (e.g., 240ml)"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-1">
                    {formData.ingredients.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem("ingredients", index)}
                        className="w-full p-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                      >
                        <X className="w-4 h-4 mx-auto" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Instructions</h2>
              <button
                type="button"
                onClick={() => addItem("instructions")}
                className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Step</span>
              </button>
            </div>

            <div className="space-y-4">
              {formData.instructions.map((instruction, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-2">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={instruction}
                      onChange={(e) =>
                        handleNestedChange(
                          "instructions",
                          index,
                          e.target.value
                        )
                      }
                      placeholder={`Step ${index + 1} instructions...`}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  {formData.instructions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem("instructions", index)}
                      className="p-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors mt-2"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Tags</h2>
              <button
                type="button"
                onClick={() => addItem("tags")}
                className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Tag</span>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              {formData.tags.map((tag, index) => (
                <div key={index} className="flex space-x-2">
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) =>
                      handleNestedChange("tags", index, e.target.value)
                    }
                    placeholder="Tag name"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  {formData.tags.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem("tags", index)}
                      className="p-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Nutrition Facts */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Nutrition Facts (per serving)
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(formData.nutritionFacts).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                    {key} {key === "calories" ? "" : "(g)"}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={value}
                    onChange={(e) =>
                      handleNutritionChange(
                        key as keyof NutritionFacts,
                        e.target.value
                      )
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="p-6 bg-gray-50 flex justify-end  ">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[400px] bg-orange-100 text-orange-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed "
            >
              {isSubmitting ? "Posting Recipe..." : "Post Recipe"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputWithButton;
