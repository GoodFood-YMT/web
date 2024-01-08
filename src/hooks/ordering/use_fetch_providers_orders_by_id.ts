import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchProvidersOrders = async (id: string ,
    data: {
        previous_status: string;
        status: string;
        provider_id: string;
        restaurant_id: string;
        ingredients : Array<{ id: string; quantity: number ; ingredient_id: string; order_id: string}>;
}) => {
  return await apiFetch<{
    id: string;
    previous_status: string;
    status: string;
    provider_id: string;
    restaurant_id: string;
    ingredients : Array<{ id: string; quantity: number ; ingredient_id: string; order_id: string}>;
    created_at: string;
    updated_at: string;
}>(`/ordering/providers/orders/${id}/`, {
    method: "POST",
    json: data,
  });
};

export const useProvidersOrders = () => {
    return useMutation({
        mutationFn: (payload: {
            id: string;
            data: {
                previous_status: string;
                status: string;
                provider_id: string;
                restaurant_id: string;
                ingredients : Array<{ id: string; quantity: number ; ingredient_id: string; order_id: string}>;
            };
        }) => {
            return fetchProvidersOrders(payload.id, payload.data);
        },
    });
};