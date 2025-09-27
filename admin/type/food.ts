// TypeScript interfaces for Recipe Data

export interface Author {
  id: number;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  followers: number;
}

export interface Ingredient {
  item: string;
  amount: string;
  metric: string;
}

export interface NutritionFacts {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
}

export interface ReviewUser {
  name: string;
  username: string;
  avatar: string;
}

export interface Review {
  id: number;
  user: ReviewUser;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  totalTime: number; // in minutes
  servings: number;
  calories: number;
  rating: number;
  totalRatings: number;
  author: Author;
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
  nutritionFacts: NutritionFacts;
  reviews: Review[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Type for the array of recipes
export type RecipesData = Recipe[];

// ✅ Props interface that accepts the recipe array
interface CardFoodProps {
  recipeData: Recipe[]; // Accepts the entire array
}
// Optional: Utility types for common operations
export type RecipeCategory =
  | "Italian"
  | "Korean"
  | "Mediterranean"
  | "Dessert"
  | "American"
  | "Mexican"
  | "Asian"
  | "Indian";
export type DifficultyLevel = "Easy" | "Medium" | "Hard";
export type Rating = 1 | 2 | 3 | 4 | 5;
