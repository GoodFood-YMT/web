"use client";

import { notFound } from "next/navigation";
import { EditUserForm } from "~/components/auth/edit_user_form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useFetchUserById } from "~/hooks/auth/use_fetch_user_by_id";

interface Props {
  id: string;
}

export const EditUser = ({ id }: Props) => {
  const user = useFetchUserById(id);

  if (user.isLoading) {
    return <div>Loading...</div>;
  }

  if (user.isError) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Label>Email</Label>
        <Input value={user.data.email} disabled />
      </div>

      <div>
        <Label>Firstname</Label>
        <Input value={user.data.firstname} disabled />
      </div>

      <div>
        <Label>Lastname</Label>
        <Input value={user.data.lastname} disabled />
      </div>

      <EditUserForm
        user={{
          id: user.data.id,
          roleId: user.data.role_id,
          restaurantId: user.data.restaurant_id,
        }}
      />
    </div>
  );
};
