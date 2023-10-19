import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCreateCategory = async (data: {
    name: string;
}) => {
    return await apiFetch<{
        id: string,
        name: string
    }>('/catalog/categories', {
        method: 'POST',
        json: data
    })
}

export const useFetchCreateCategory = () =>{
    return useMutation({
        mutationFn: (payload: {
            name: string,
        }) => {
            return fetchCreateCategory(payload)
        }
    })
}