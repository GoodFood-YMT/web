import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchUpdateProviders = async (
  id: string,
  data: {
    id: string;
    name: string;
    restaurant_id: string;
    ingredients: Array<{
      id: string;
      name: string;
      price: number;
      created_at: string;
      updated_at: string;
    }>;
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
        id: string;
        name: string;
        restaurant_id: string;
        ingredients: Array<{
          id: string;
          name: string;
          price: number;
          created_at: string;
          updated_at: string;
        }>;
      };
    }) => {
      return fetchUpdateProviders(payload.id, payload.data);
    },
  });
};