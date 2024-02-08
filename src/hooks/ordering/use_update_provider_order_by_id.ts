import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const updateProviderOrderById = async (data : {
        id: string,
        ingredients: Array<{
            ingredientId: string;
            quantity: number;
            name: string;
        }>,
    }) => {
    return await apiFetch<{
      message: string;
    }>(`/ordering/providers/orders/${data.id}`, {
      method: "PUT",
      json: data,
    })
};

export const useUpdateProviderOrderById = (id: string) => {
    return useMutation({
        mutationFn: (payload: {
            ingredients: Array<{
                ingredientId: string;
                quantity: number;
                name: string;
            }>,
        }) => {
            return updateProviderOrderById({
                id,
                ingredients: payload.ingredients
            });
        },
    });
};
