"use client";

import { notFound } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";
import { EditIngredientForm } from "~/components/ingredients/edit_ingredient_form";
import { useFetchIngredientById } from "~/hooks/catalog/ingredients/use_fetch_ingredient_by_id";
import { cn } from "~/utils/cn";

interface Props {
  id: string;
}

export const EditIngredient = ({ id }: Props) => {
  const ingredient = useFetchIngredientById(id);

  if (ingredient.isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
      </div>
    );
  }

  if (ingredient.isError) {
    notFound();
  }

  return (
    <>
      <h1 className="mb-4 text-2xl font-medium">
        Ingredient {`"${ingredient.data.name}"`}
      </h1>
      <EditIngredientForm ingredient={ingredient.data} />
    </>
  );
};
