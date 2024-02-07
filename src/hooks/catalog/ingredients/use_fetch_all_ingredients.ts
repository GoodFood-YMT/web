import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchAllIngredients = async () => {
  return await apiFetch<{
    data: Array<{
      id: string;
      name: string;
      quantity: string;
      restaurantId: string;
    }>;
    succeeded: boolean;
    errors: any;
    message: string;
  }>(`/catalog/ingredients`);
};

export const useFetchAllIngredients = () => {
  return useQuery({
    queryKey: ["ingredients"],
    queryFn: () => {
      return fetchAllIngredients();
    },
    keepPreviousData: true,
  });
};
