import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchDeleteProviderIngredient = async (id: string ,
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
}>(`/providers/${id}/ingredients`, {
    method: "POST",
    json: data,
  });
};

export const useDeleteProviderIngredient = () => {
    return useMutation({
        mutationFn: (payload: {
            id: string;
            data: {
                provider_id: string;
                ingredient_id: string;
            };
        }) => {
            return fetchDeleteProviderIngredient(payload.id, payload.data);
        },
    });
};