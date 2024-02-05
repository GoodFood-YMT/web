import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCreateIngredientProvider = async (data: {
  provider_id: string,
  ingredient_id: string}) => {
  return await apiFetch<{
    id: string;
    provider_id: string;
    ingredient_id: string;
  }>(`/providers/${data.provider_id}/ingredients`, {
    method: "POST",
    json: data,
  });
};

export const useCreateIngredientProvider = () => {
  return useMutation({
    mutationFn: (payload: {
      provider_id: string,
      ingredient_id: string
    }) => {
      return fetchCreateIngredientProvider(payload);
    },
  });
};