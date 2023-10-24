import { useInfiniteQuery } from "@tanstack/react-query";
import { number } from "zod";
import { apiFetch } from "~/utils/basic_fetch";

const fetchAllIngredientsByProduct = async (
  productId: string,
  page: number,
  limit: number,
) => {
  return await apiFetch<{
    pageNumber: number;
    pageSize: number;
    firstPage: string;
    lastPage: string;
    totalPages: number;
    nextPage: string | null;
    previousPage: string | null;
    data: Array<{
      productId: string;
      ingredientId: string;
      quantity: number;
      name: string;
    }>;
    succeeded: boolean;
    errors: any;
    message: string;
  }>(
    `/catalog/products/${productId}/ingredients?pageNumber=${page}&limit=${limit}`,
  );
};

export const useFetchAllIngredientsByProduct = (
  productId: string,
  page: number = 1,
  limit: number = 10,
) => {
  return useInfiniteQuery({
    queryKey: ["ingredients-by-products", page, limit],
    queryFn: ({ pageParam }) => {
      return fetchAllIngredientsByProduct(productId, pageParam ?? page, limit);
    },
    getNextPageParam: (result) => {
      if (result.pageNumber < result.totalPages) {
        return result.pageNumber + 1;
      }
      return undefined;
    },
    keepPreviousData: true,
  });
};
