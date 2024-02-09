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
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useCreateProvider } from "~/hooks/providers/use_create_providers";
import { useFetchAllRestaurants } from "~/hooks/restaurants/use_fetch_all_restaurants";
import { useAccountStore } from "~/stores/account_store";

const formSchema = z.object({
  name: z.string(),
});

export const AddProviderForm = () => {
  const router = useRouter();
  const createProvider = useCreateProvider();
  const accountStore = useAccountStore();
  const { data } = useFetchAllRestaurants();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (payload: z.infer<typeof formSchema>) => {
    if (!accountStore.account) {
      return;
    }

    createProvider.mutate(
      {
        ...payload,
        restaurant_id: accountStore.account.restaurant_id,
      },
      {
        onSuccess: () => {
          toast.success("Provider created");
          router.push("/admin/providers");
        },
        onError: () => {
          toast.error("An error occurred");
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Form>
  );
};
