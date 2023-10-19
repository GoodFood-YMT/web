import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchIngredientById = async(id: string) => {
    return await apiFetch<{
        id: string;
        name: string;
        quantity: number;
        restaurantId: string;
    }>(`/catalog/ingredients/${id}`)
};

export const useFetchIngredientById = (id: string) => {
    return useQuery({
        queryKey: ["ingredients-by-id", id],
        queryFn: () => fetchIngredientById(id),
        keepPreviousData: true,
    })
}