import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchAllProvidersOrders = async (page: number, limit: number) => {
  return await apiFetch<{
    meta: {
      total: number;
      per_page: number;
      current_page: number;
      last_page: number;
      first_page: number;
      first_page_url: string;
      last_page_url: string;
      next_page_url: string | null;
      previous_page_url: string | null;
    };
    data: Array<{
      id: string;
      status: string;
      previous_status: string;
      total_price: string;
      user_id: string;
      address_id: string;
      restaurant_id: string;
      provider_id: string;
      delivery_id: string;
      created_at: string;
      updated_at: string;
    }>;
  }>(`/ordering/providers/orders?page=${page}&limit=${limit}`);
};

export const useFetchAllProvidersOrders = (
  page: number = 1,
  limit: number = 10,
) => {
  return useQuery({
    queryKey: ["providers-orders", page, limit],
    queryFn: () => fetchAllProvidersOrders(page, limit),
    keepPreviousData: true,
  });
};
