import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchOrdersById = async (id: string) => {
  return await apiFetch<{
    id: string;
    previous_status: string;
    status: string;
    total_price: number;
    user_id: string;
    address_id: string;
    restaurant_id: string;
    delivery_id: string;
    created_at: string;
    updated_at: string;
  }>(`/ordering/${id}`);
};

export const useFetchOrdersById = (id: string) => {
  return useQuery({
    queryKey: ["orders-by-id", id],
    queryFn: () => fetchOrdersById(id),
    keepPreviousData: true,
  });
};