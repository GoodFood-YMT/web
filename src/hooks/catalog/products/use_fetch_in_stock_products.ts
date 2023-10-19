import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchInStockProducts = async (page: number, limit: number) => {
  return await apiFetch<{
    pageNumber: number;
    pageSize: number;
    firstPage: string;
    lastPage: string;
    totalPages: number;
    nextPage: string | null;
    previousPage: string | null;
    data: Array<{
      id: string;
      label: string;
      description: string;
      price: number;
      visible: boolean;
      quantity: number;
      categoryId: string | null;
      restaurantId: string | null;
    }>;
    succeeded: boolean;
    errors: any;
    message: string;
  }>(`/catalog/products/inStock?pageNumber=${page}&pageSize=${limit}`);
};

export const useFetchInStockProducts = (
  page: number = 1,
  limit: number = 10,
) => {
  return useInfiniteQuery({
    queryKey: ["in-stock-products", page, limit],
    queryFn: ({ pageParam }) => {
      return fetchInStockProducts(pageParam ?? page, limit);
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
