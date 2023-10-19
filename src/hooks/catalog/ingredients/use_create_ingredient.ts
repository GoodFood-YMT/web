import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCreateIngredient = async (data: {
  name: string;
  quantity: number;
}) => {
  return await apiFetch<{
    id: string;
    name: string;
    quantity: number;
  }>("/catalog/ingredients", {
    method: "POST",
    json: data,
  });
};

export const useFetchCreateIngredient = () => {
  return useMutation({
    mutationFn: (payload: { name: string; quantity: number }) => {
      return fetchCreateIngredient(payload);
    },
  });
};
