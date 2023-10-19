import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCategoryById = async (id: string) => {
  return await apiFetch<{
    id: string;
    name: string;
  }>(`/catalog/categories/${id}`);
};

export const useFetchCategoryById = (id: string) => {
  return useQuery({
    queryKey: ["categories-by-id", id],
    queryFn: () => fetchCategoryById(id),
    keepPreviousData: true,
  });
};
