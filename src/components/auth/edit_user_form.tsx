"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useUpdateUser } from "~/hooks/auth/use_update_user";
import { useFetchAllRestaurants } from "~/hooks/restaurants/use_fetch_all_restaurants";

interface Props {
  user: {
    id: string;
    roleId: string;
    restaurantId: string | null;
  };
}

const formSchema = z.object({
  role: z.string(),
  restaurantId: z.string(),
});

export const EditUserForm = ({ user }: Props) => {
  const router = useRouter();
  const restaurants = useFetchAllRestaurants(1, 100);
  const updateUser = useUpdateUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: user.roleId,
      restaurantId: user.restaurantId ?? "null",
    },
  });

  const handleSubmit = (payload: z.infer<typeof formSchema>) => {
    if (
      (payload.role === "manager" || payload.role === "deliverer") &&
      (!payload.restaurantId || payload.restaurantId === "null")
    ) {
      toast.error("You must select a restaurant for this role");
      return;
    }

    const restaurantId: string | null =
      payload.restaurantId === "null"
        ? null
        : payload.role === "customer" || payload.role === "admin"
        ? null
        : payload.restaurantId;

    updateUser.mutate(
      {
        id: user.id,
        data: {
          role: payload.role,
          restaurantId: restaurantId,
        },
      },
      {
        onSuccess: () => {
          toast.success("User updated");
          router.refresh();
        },
        onError: () => {
          toast.error("Error while updating user");
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="deliverer">Deliverer</SelectItem>
                    <SelectItem value="customer">Customer</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="restaurantId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Restaurant</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {restaurants.data?.pages[0].data.length === 0 && (
                      <SelectItem value="null" disabled>
                        No restaurant
                      </SelectItem>
                    )}
                    {restaurants.data?.pages.map((page) =>
                      page.data.map((restaurant) => (
                        <SelectItem key={restaurant.id} value={restaurant.id}>
                          {restaurant.name}
                        </SelectItem>
                      )),
                    )}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};
