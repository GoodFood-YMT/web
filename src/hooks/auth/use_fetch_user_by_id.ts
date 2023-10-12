import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchUserById = async (id: string) => {
  return await apiFetch<{
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    role_id: string;
    restaurant_id: string | null;
    created_at: string;
    updated_at: string;
  }>(`/auth/users/${id}`);
};

export const useFetchUserById = (id: string) => {
  return useQuery({
    queryKey: ["users-by-id", id],
    queryFn: () => fetchUserById(id),
    keepPreviousData: true,
  });
};
