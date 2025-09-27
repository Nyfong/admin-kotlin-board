import React from "react";
import { Recipe } from "@/type/food";
import { FoodDigalog } from "./pop-up";

interface CardFoodProps {
  recipeData: Recipe[];
}

const CardFood: React.FC<CardFoodProps> = ({ recipeData }) => {
  return (
    <>
      {recipeData.map((recipe, index) => (
        <FoodDigalog key={index} recipe={recipe} />
      ))}
    </>
  );
};

export default CardFood;
