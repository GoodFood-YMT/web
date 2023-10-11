import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "~/utils/basic_fetch";

const fetchUpdateUser = async (
  id: string,
  data: { role: string; restaurantId: string | null },
) => {
  return await apiFetch<{
    message: string;
  }>(`/auth/users/${id}`, {
    method: "PUT",
    json: {
      roleId: data.role,
      restaurantId: data.restaurantId,
    },
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: (payload: {
      id: string;
      data: { role: string; restaurantId: string | null };
    }) => {
      return fetchUpdateUser(payload.id, payload.data);
    },
  });
};
