import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCreateIngredientProvider = async (data: {
  providerId: string;
  ingredientId: string;
}) => {
  return await apiFetch<{
    provider_id: string;
    ingredient_id: string;
  }>(`/providers/${data.providerId}/ingredients`, {
    method: "POST",
    json: {
      ingredientId: data.ingredientId,
    },
  });
};

export const useCreateIngredientProvider = () => {
  return useMutation({
    mutationFn: (payload: { providerId: string; ingredientId: string }) => {
      return fetchCreateIngredientProvider(payload);
    },
  });
};
