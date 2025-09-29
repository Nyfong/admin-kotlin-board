import React from "react";
import recipesData from "@/storage/fakedb";
import CardFood from "@/components/card-food";
import InputWithButton from "@/components/input-data";

export default function EditRecipes() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-2 gap-4 p-3">
        <section className="grid grid-cols-1 gap-3 p-2   h-[99vh] overflow-y-auto">
          <CardFood recipeData={recipesData} />
        </section>
        <section>
          <InputWithButton />
        </section>
      </div>
    </div>
  );
}
