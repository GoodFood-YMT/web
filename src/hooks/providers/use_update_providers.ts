import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchUpdateProviders = async (
  id: string,
  data: {
    name: string;
    restaurant_id: string;
  },
) => {
  return await apiFetch<{
    message: string;
  }>(`/providers/${id}`, {
    method: "PUT",
    json: data,
  });
};

export const useUpdateProviders = () => {
  return useMutation({
    mutationFn: (payload: {
      id: string;
      data: {
        name: string;
        restaurant_id: string;
      };
    }) => {
      return fetchUpdateProviders(payload.id, payload.data);
    },
  });
};