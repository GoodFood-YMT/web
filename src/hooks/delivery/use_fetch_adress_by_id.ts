import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchAddressById = async (id: string) => {
  return await apiFetch<{
    name: string;
    street: string;
    zip_code: string;
    city: string;
    country: string;
    id: string;
    user_id: string;
  }>(`/delivery/addresses/${id}`, {
    method: "GET",
  });
};

export const useFetchAddressById = () => {
  return useMutation({
    mutationFn: (id: string) => {
      return fetchAddressById(id);
    },
  });
};
