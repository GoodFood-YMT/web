import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCreateRestaurant = async (data: {
  name: string;
  enabled: boolean;
  address: string;
  zipCode: string;
  city: string;
  country: string;
}) => {
  return await apiFetch<{
    id: string;
    name: string;
    enabled: boolean;
    address: string;
    zipCode: string;
    city: string;
    country: string;
  }>(`/restaurants`, {
    method: "POST",
    json: data,
  });
};

export const useCreateRestaurant = () => {
  return useMutation({
    mutationFn: (payload: {
      name: string;
      enabled: boolean;
      address: string;
      zipCode: string;
      city: string;
      country: string;
    }) => {
      return fetchCreateRestaurant(payload);
    },
  });
};
