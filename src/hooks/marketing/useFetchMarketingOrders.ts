import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchMarketingOrders = async () => {
  return await apiFetch<{
    data: Array<{
      createdAt: string;
      count: number;
    }>;
  }>(`/marketing/orders`);
};

export const useFetchMarketingOrders = () => {
  return useQuery({
    queryKey: ["marketing-orders"],
    queryFn: () => fetchMarketingOrders(),
    keepPreviousData: true,
  });
};
