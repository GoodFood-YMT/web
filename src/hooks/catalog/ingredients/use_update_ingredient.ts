import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchUpdateIngredient = async (
  id: string,
  data: {
    name: string;
    quantity: number;
  },
) => {
  return await apiFetch<{
    id: string;
    name: string;
    quantity: string;
    restaurantId: string;
  }>(`/catalog/ingredients/${id}`, {
    method: "PUT",
    json: data,
  });
};

export const useUpdateIngredient = () => {
  return useMutation({
    mutationFn: (payload: {
      id: string;
      data: {
        name: string;
        quantity: number;
      };
    }) => {
      return fetchUpdateIngredient(payload.id, payload.data);
    },
  });
};
