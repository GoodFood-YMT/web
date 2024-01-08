import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCreateProviderOrder = async (data: {
  providerId: string;
  ingredients: Array<{
    ingredientId: string;
    quantity: number;
  }>;
}) => {
  return await apiFetch<{
    id: string;
    previous_status: string;
    status: string;
    provider_id: string;
    created_at: string;
    updated_at: string;
  }>(`/ordering/providers/orders`, {
    method: "POST",
    json: data,
  });
};

export const useCreateProviderOrder = () => {
  return useMutation({
    mutationFn: (payload: {
      providerId: string;
      ingredients: Array<{
        ingredientId: string;
        quantity: number;
      }>;
    }) => {
      return fetchCreateProviderOrder(payload);
    },
  });
};
