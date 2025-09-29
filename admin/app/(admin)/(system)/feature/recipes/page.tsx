import CardFood from "@/components/card-food";
import React from "react";
import { Recipe } from "@/type/food";
import recipesData from "@/storage/fakedb";
import { FoodDigalog } from "@/components/pop-up";
export default function page() {
  const test: number[] = [1, 2, 3, 4, 5, 5];
  return (
    <div className="p-3 w-full h-screen overflow-hidden">
      <section className=" w-full h-[99%]">
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4 overflow-y-auto">
          <CardFood recipeData={recipesData} />
        </div>
      </section>
    </div>
  );
}
