import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const deleteProductIngredient = async (
  productId: string,
  ingredientId: string,
) => {
  return await apiFetch<{}>(
    `/catalog/products/${productId}/ingredients/${ingredientId}`,
    {
      method: "DELETE",
    },
  );
};

export const useDeleteProductIngredient = () => {
  return useMutation({
    mutationFn: (payload: { productId: string; ingredientId: string }) => {
      return deleteProductIngredient(payload.productId, payload.ingredientId);
    },
  });
};
