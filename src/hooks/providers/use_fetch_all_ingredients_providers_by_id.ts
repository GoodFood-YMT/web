import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchAllProvidersIngredients = async (id: string) => {
  return await apiFetch<{
    data: Array<{
      ingredientId: string;
      providerId: string;
      name: string;
      quantity: number;
    }>;
  }>(`/providers/${id}/ingredients`);
};

export const useFetchAllProvidersIngredients = (id: string) => {
  return useQuery({
    queryKey: ["providers-ingredients-by-id", id],
    queryFn: () => {
      if (!id || id === "") {
        return Promise.resolve({
          data: [],
        });
      }
      return fetchAllProvidersIngredients(id);
    },
    keepPreviousData: true,
  });
};
