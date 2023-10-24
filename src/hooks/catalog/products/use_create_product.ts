import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCreateProduct = async (data: {
  label: string;
  description: string;
  price: number;
  visible: boolean;
  categoryId: string | null;
}) => {
  return await apiFetch<{
    id: string;
    label: string;
    description: string;
    price: number;
    visible: boolean;
    quantity: 0;
    categoryId: string | null;
    restaurantId: string;
  }>("/catalog/products", {
    method: "POST",
    json: data,
  });
};

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (payload: {
      label: string;
      description: string;
      price: number;
      visible: boolean;
      categoryId: string | null;
    }) => {
      return fetchCreateProduct(payload);
    },
  });
};
