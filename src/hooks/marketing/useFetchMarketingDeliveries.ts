import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchMarketingDeliveries = async () => {
  return await apiFetch<{
    data: Array<{
      createdAt: string;
      count: number;
    }>;
  }>(`/marketing/deliveries`);
};

export const useFetchMarketingDeliveries = () => {
  return useQuery({
    queryKey: ["marketing-deliveries"],
    queryFn: () => fetchMarketingDeliveries(),
    keepPreviousData: true,
  });
};
