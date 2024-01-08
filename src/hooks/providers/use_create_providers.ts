import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCreateProvider = async (data: {
  name: string;
  restaurant_id: string;
  ingredients: Array<{
    id: string;
    name: string;
    price: number;
    created_at: string;
    updated_at: string;
  }>;
}) => {
  return await apiFetch<{
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
    created_at: string;
    updated_at: string;
  }>(`/providers`, {
    method: "POST",
    json: data,
  });
};

export const useCreateProvider = () => {
  return useMutation({
    mutationFn: (payload: {
      name: string;
      restaurant_id: string;
      ingredients: Array<{
        id: string;
        name: string;
        price: number;
        created_at: string;
        updated_at: string;
      }>;
    }) => {
      return fetchCreateProvider(payload);
    },
  });
};