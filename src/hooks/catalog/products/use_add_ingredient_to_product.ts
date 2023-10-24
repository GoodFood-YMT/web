import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchAddProductsIngredient = async (
  productId: string,
  ingredientId: string,
  data: {
    quantity: number;
  },
) => {
  return await apiFetch<{
    productId: string;
    ingredientId: string;
    quantity: number;
    name: string;
  }>(`/catalog/products/${productId}/ingredients/${ingredientId}`, {
    method: "POST",
    json: data,
  });
};

export const useFetchAddProductIngredient = () => {
  return useMutation({
    mutationFn: (payload: {
      productId: string;
      ingredientId: string;
      data: { quantity: number };
    }) => {
      return fetchAddProductsIngredient(
        payload.productId,
        payload.ingredientId,
        payload.data,
      );
    },
  });
};
