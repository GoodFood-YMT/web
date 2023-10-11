import { useInfiniteQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchAllUsers = async (page: number, limit: number) => {
  return await apiFetch<{
    meta: {
      total: number;
      per_page: number;
      current_page: number;
      last_page: number;
      first_page: number;
      first_page_url: string;
      last_page_url: string;
      next_page_url: string | null;
      previous_page_url: string | null;
    };
    data: Array<{
      id: string;
      email: string;
      firstname: string;
      lastname: string;
      role_id: string;
      restaurant_id: string | null;
      created_at: string;
      updated_at: string;
    }>;
  }>(`/auth/users?page=${page}&limit=${limit}`);
};

export const useFetchAllUsers = (page: number = 1, limit: number = 10) => {
  return useInfiniteQuery({
    queryKey: ["users", page, limit],
    queryFn: ({ pageParam }) => {
      return fetchAllUsers(pageParam ?? page, limit);
    },
    getNextPageParam: (result) => {
      if (result.meta.current_page < result.meta.last_page) {
        return result.meta.current_page + 1;
      }
      return undefined;
    },
    keepPreviousData: true,
  });
};
