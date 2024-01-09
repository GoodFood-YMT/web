import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchCreateProvider = async (
  id: string,
  data: {
    provider_id: string;
    ingredient_id: string;
}) => {
  return await apiFetch<{
    id: string;
    provider_id: string;
    ingredient_id: string;
  }>(`/providers/${id}/ingredients`, {
    method: "POST",
    json: data,
  });
};

export const useCreateProvider = () => {
  return useMutation({
    mutationFn: (payload: {
      id: string;
      data: {
        provider_id: string;
        ingredient_id: string;
      };
    }) => {
      return fetchCreateProvider(payload.id, payload.data);
    },
  });
};