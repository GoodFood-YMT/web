import { useInfiniteQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchAllCategories = async (page: number, limit: number) => {
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
    }>;
    succeeded: boolean;
    errors: any;
    message: string;
  }>(`/catalog/categories?pageNumber=${page}&pageSize=${limit}`);
};

export const useFetchAllCategories = (page: number = 1, limit: number = 10) => {
  return useInfiniteQuery({
    queryKey: ["categories", page, limit],
    queryFn: ({ pageParam }) => {
      return fetchAllCategories(pageParam ?? page, limit);
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
