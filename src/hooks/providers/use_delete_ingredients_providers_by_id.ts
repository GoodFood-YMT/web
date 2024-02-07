import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchDeleteProviderIngredient = async (data: {
  providerId: string;
  ingredientId: string;
}) => {
  return await apiFetch<{
    id: string;
    provider_id: string;
    ingredient_id: string;
    created_at: string;
    updated_at: string;
  }>(`/providers/${data.providerId}/ingredients`, {
    method: "DELETE",
    json: {
      ingredientId: data.ingredientId,
    },
  });
};

export const useDeleteProviderIngredient = () => {
  return useMutation({
    mutationFn: (payload: { providerId: string; ingredientId: string }) => {
      return fetchDeleteProviderIngredient(payload);
    },
  });
};
