import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchAllIngredientsByProduct = async (productId: string) => {
  return await apiFetch<{
    data: Array<{
      productId: string;
      ingredientId: string;
      quantity: number;
      name: string;
    }>;
    succeeded: boolean;
    errors: any;
    message: string;
  }>(`/catalog/products/${productId}/ingredients`);
};

export const useFetchAllIngredientsByProduct = (productId: string) => {
  return useQuery({
    queryKey: ["ingredients-by-products", productId],
    queryFn: () => {
      return fetchAllIngredientsByProduct(productId);
    },
    keepPreviousData: true,
  });
};
