import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchMarketingUsers = async () => {
  return await apiFetch<{
    data: Array<{
      createdAt: string;
      count: number;
    }>;
  }>(`/marketing/users`);
};

export const useFetchMarketingUsers = () => {
  return useQuery({
    queryKey: ["marketing-users"],
    queryFn: () => fetchMarketingUsers(),
    keepPreviousData: true,
  });
};
