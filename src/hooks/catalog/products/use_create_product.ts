import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCreateProduct = async (data: {
  label: string;
  description: string;
  price: string;
  visible: boolean;
  categoryId: string;
}) => {
  return await apiFetch<{
    id: string;
    label: string;
    description: string;
    price: string;
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
      price: string;
      visible: boolean;
      categoryId: string;
    }) => {
      return fetchCreateProduct(payload);
    },
  });
};
