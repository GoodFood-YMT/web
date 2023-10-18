import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchUpdateProducts = async (
  id: string,
  data: {
    label: string;
    description: string;
    price: number;
    visible: boolean;
    categoryId: string;
  },
) => {
  return await apiFetch<{
    id: string;
    label: string;
    description: string;
    price: number;
    visible: boolean;
    quantity: number;
    createdAt: Date;
    updatedAt: Date | null;
    categoryId: string | null;
    restaurantId: string | null;
  }>(`/catalog/products/${id}`, {
    method: "PUT",
    json: data,
  });
};

export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: (payload: {
      id: string;
      data: {
        label: string;
        description: string;
        price: number;
        visible: boolean;
        categoryId: string;
      };
    }) => {
      return fetchUpdateProducts(payload.id, payload.data);
    },
  });
};
