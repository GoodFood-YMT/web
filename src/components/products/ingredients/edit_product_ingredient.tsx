"use client";

import { AiOutlineLoading } from "react-icons/ai";
import { EditIngredientProductForm } from "~/components/products/ingredients/edit_product_ingredient_form";
import { useFetchIngredientByProduct } from "~/hooks/catalog/products/use_fetch_ingredient_by_product";
import { cn } from "~/utils/cn";

interface Props {
  productId: string;
  ingredientId: string;
}

export const EditProductIngredient = ({ productId, ingredientId }: Props) => {
  const ingredientProduct = useFetchIngredientByProduct(
    productId,
    ingredientId,
  );

  if (ingredientProduct.isLoading) {
    return <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />;
  }

  if (ingredientProduct.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <h1 className="mb-4 text-2xl font-medium">
        Ingredient {`"${ingredientProduct.data.name}"`}
      </h1>
      <EditIngredientProductForm
        productId={productId}
        productIngredient={{
          ingredientId: ingredientProduct.data.ingredientId,
          quantity: ingredientProduct.data.quantity,
        }}
      />
    </>
  );
};
