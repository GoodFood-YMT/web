import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchProviderById = async (id: string) => {
  return await apiFetch<{
    id: string;
    name: string;
    restaurant_id: string;
    created_at: string;
    updated_at: string;
  }>(`/providers/${id}`);
};

export const useFetchProviderById = (id: string) => {
  return useQuery({
    queryKey: ["providers-by-id", id],
    queryFn: () => fetchProviderById(id),
    keepPreviousData: true,
  });
};