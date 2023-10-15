import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchUpdateCategory = async (
    id: string,
    data: {
        name?: string;
    },
) => {
    return await apiFetch<{
        id: string,
        name: string
    }>(`/catalog/categories/${id}`,  {
        method: 'PUT',
        json: data,
    });
};

export const useUpdateCategory = () =>{
    return useMutation({
        mutationFn: (payload: {
            id: string;
            data: {
                name?: string;
            }
        }) => {
            return fetchUpdateCategory(payload.id, payload.data);
        },
    });
};