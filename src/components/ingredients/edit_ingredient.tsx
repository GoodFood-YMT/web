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
    return <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />;
  }

  if (ingredient.isError) {
    notFound();
  }

  return <EditIngredientForm ingredient={ingredient.data} />;
};
