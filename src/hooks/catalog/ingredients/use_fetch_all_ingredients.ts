import { useInfiniteQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchAllIngredients = async (page: number, limit: number) => {
  return await apiFetch<{
    pageNumber: number;
    pageSize: number;
    firstPage: string;
    lastPage: string;
    totalPages: number;
    totalRecords: number;
    nexPage: string | null;
    previousPage: string | null;
    data: Array<{
      id: string;
      name: string;
      quantity: string;
      restaurantId: string;
    }>;
    succeeded: boolean;
    errors: any;
    message: string;
  }>(`/catalog/ingredients?pageNumber=${page}&pageSize=${limit}`);
};

export const useFetchAllIngredients = (
  page: number = 1,
  limit: number = 10,
) => {
  return useInfiniteQuery({
    queryKey: ["ingredients", page, limit],
    queryFn: ({ pageParam }) => {
      return fetchAllIngredients(pageParam ?? page, limit);
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
