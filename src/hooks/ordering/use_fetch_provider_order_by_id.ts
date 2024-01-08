import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchProviderOrderById = async (id: string) => {
  return await apiFetch<{
    id: string;
    status: string;
    previousStatus: string;
    providerId: string;
    restaurantId: string;
    createdAt: string;
    updatedAt: string;
    ingredients: Array<{
      ingredientId: string;
      quantity: number;
      name: string;
    }>;
  }>(`/ordering/providers/orders/${id}`);
};

export const useFetchProviderOrderById = (id: string) => {
  return useQuery({
    queryKey: ["provider-order-by-id", id],
    queryFn: () => fetchProviderOrderById(id),
    keepPreviousData: true,
  });
};
