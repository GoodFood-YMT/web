import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { apiFetch } from "~/utils/basic_fetch";

const fetchMarketingKpi = async (date: string) => {
  return await apiFetch<{
    orders: number;
    deliveries: number;
    users: number;
    revenue: number;
  }>(`/marketing/kpi`);
};

export const useFetchMarketingKpi = (
  date: string = DateTime.now().toFormat("yyyy-MM-dd"),
) => {
  return useQuery({
    queryKey: ["marketing-kpi", date],
    queryFn: () => fetchMarketingKpi(date),
    keepPreviousData: true,
  });
};
