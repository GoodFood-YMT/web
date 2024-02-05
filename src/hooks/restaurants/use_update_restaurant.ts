import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchUpdateRestaurant = async (
  id: string,
  data: {
    name?: string;
    enabled?: boolean;
    address?: string;
    zipCode?: string;
    city?: string;
    country?: string;
  },
) => {
  return await apiFetch<{
    message: string;
  }>(`/restaurants/${id}`, {
    method: "PUT",
    json: data,
  });
};

export const useUpdateRestaurant = () => {
  return useMutation({
    mutationFn: (payload: {
      id: string;
      data: {
        name?: string;
        enabled?: boolean;
        address?: string;
        zipCode?: string;
        city?: string;
        country?: string;
      };
    }) => {
      return fetchUpdateRestaurant(payload.id, payload.data);
    },
  });
};
