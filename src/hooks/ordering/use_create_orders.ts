import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCreateOrders = async (data: {
  previous_status: string;
  status: string;
  total_price: number;
  user_id: string;
  address_id: string;
  restaurant_id: string;
  delivery_id: string;
  products: Array<{ id: string; quantity: number ; product_id: string; order_id: string}>; 
}) => {
  return await apiFetch<{
    id: string;
    previous_status: string;
    status: string;
    total_price: number;
    user_id: string;
    address_id: string;
    restaurant_id: string;
    delivery_id: string;
    products: Array<{ id: string; quantity: number ; product_id: string; order_id: string}>; 
  }>(`/ordering`, {
    method: "POST",
    json: data,
  });
};

export const useCreateOrders = () => {
  return useMutation({
    mutationFn: (payload: {
      previous_status: string;
      status: string;
      total_price: number;
      user_id: string;
      address_id: string;
      restaurant_id: string;
      delivery_id: string;
      products: Array<{ id: string; quantity: number ; product_id: string; order_id: string}>; 
    }) => {
      return fetchCreateOrders(payload);
    },
  });
};