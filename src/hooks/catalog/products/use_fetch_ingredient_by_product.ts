import { useQuery } from "@tanstack/react-query";
import { string } from "zod";
import { apiFetch } from "~/utils/basic_fetch";

const fetchIngredientByProduct = async (
  productId: string,
  ingredientId: string,
) => {
  console.log(productId, ingredientId);
  return await apiFetch<{
    productId: string;
    ingredientId: string;
    quantity: number;
    name: string;
  }>(`/catalog/products/${productId}/ingredients/${ingredientId}`);
};

export const useFetchIngredientByProduct = (
  productId: string,
  ingredientId: string,
) => {
  return useQuery({
    queryKey: ["one-ingredient-by-product", productId, ingredientId],
    queryFn: () => fetchIngredientByProduct(productId, ingredientId),
    keepPreviousData: true,
  });
};
