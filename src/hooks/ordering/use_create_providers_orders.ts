import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCreateProvidersOrders = async (data: {
}) => {
  return await apiFetch<{
    id: string;
    previous_status: string;
    status: string;
    provider_id: string;
    restaurant_id: string;
    ingredients : Array<{ id: string; quantity: number ; ingredient_id: string; order_id: string}>;
  }>(`/ordering/providers/orders`, {
    method: "POST",
    json: data,
  });
};

export const useCreateProvidersOrders = () => {
  return useMutation({
    mutationFn: (payload: {
        previous_status: string;
        status: string;
        provider_id: string;
        restaurant_id: string;
        ingredients : Array<{ id: string; quantity: number ; ingredient_id: string; order_id: string}>;
    }) => {
      return fetchCreateProvidersOrders(payload);
    },
  });
};