import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchDeleteProviderIngredient = async (
    data: {
        provider_id: string;
        ingredient_id: string;
}) => {
  return await apiFetch<{
    id: string;
    provider_id: string;
    ingredient_id: string;
    created_at: string;
    updated_at: string;
}>(`/providers/${data.provider_id}/ingredients`, {
    method: "DELETE",
    json: data,
  });
};

export const useDeleteProviderIngredient = () => {
    return useMutation({
        mutationFn: (payload: {
            provider_id: string,
            ingredient_id: string
          }) => {
            return fetchDeleteProviderIngredient(payload);
        },
    });
};