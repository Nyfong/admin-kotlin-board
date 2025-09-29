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
        <div className="w-full h-full" key={index}>
          <FoodDigalog recipe={recipe} />
        </div>
      ))}
    </>
  );
};

export default CardFood;
