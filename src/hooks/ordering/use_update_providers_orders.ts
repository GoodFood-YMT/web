import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchUpdateProvidersOrders = async (
  id: string,
  data: {
    id: string;
    previous_status: string;
    status: string;
    provider_id: string;
    restaurant_id: string;
    ingredients : Array<{ id: string; quantity: number ; ingredient_id: string; order_id: string}>;
  },
) => {
  return await apiFetch<{
    message: string;
  }>(`/ordering/providers/orders/${id}`, {
    method: "PUT",
    json: data,
  });
};

export const useUpdateProvidersOrders = () => {
  return useMutation({
    mutationFn: (payload: {
      id: string;
      data: {
        id: string;
        previous_status: string;
        status: string;
        provider_id: string;
        restaurant_id: string;
        ingredients : Array<{ id: string; quantity: number ; ingredient_id: string; order_id: string}>;
      };
    }) => {
      return fetchUpdateProvidersOrders(payload.id, payload.data);
    },
  });
};