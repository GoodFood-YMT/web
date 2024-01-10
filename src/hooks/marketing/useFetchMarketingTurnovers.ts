import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchMarketingTurnovers = async () => {
  return await apiFetch<{
    data: Array<{
      createdAt: string;
      count: number;
    }>;
  }>(`/marketing/turnovers`);
};

export const useFetchMarketingTurnovers = () => {
  return useQuery({
    queryKey: ["marketing-turnovers"],
    queryFn: () => fetchMarketingTurnovers(),
    keepPreviousData: true,
  });
};
