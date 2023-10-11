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
import { Input } from "~/components/ui/input";
import { Switch } from "~/components/ui/switch";
import { useUpdateRestaurant } from "~/hooks/restaurants/use_update_restaurant";
import { extractFields } from "~/utils/extract_fields";

interface Props {
  restaurant: {
    id: string;
    name: string;
    enabled: boolean;
    address: string;
    city: string;
    country: string;
  };
}

const formSchema = z.object({
  name: z.string().optional(),
  enabled: z.boolean().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

export const EditRestaurantForm = ({ restaurant }: Props) => {
  const router = useRouter();
  const updateRestaurant = useUpdateRestaurant();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: restaurant.name,
      enabled: restaurant.enabled,
      address: restaurant.address,
      city: restaurant.city,
      country: restaurant.country,
    },
  });

  const handleSubmit = (payload: z.infer<typeof formSchema>) => {
    const fields = extractFields(form.formState.dirtyFields, payload) as {
      name?: string;
      enabled?: boolean;
      address?: string;
      city?: string;
      country?: string;
    };

    updateRestaurant.mutate(
      {
        id: restaurant.id,
        data: {
          ...fields,
        },
      },
      {
        onSuccess: () => {
          toast.success("Restaurant updated");
          router.push("/admin/restaurants");
        },
        onError: () => {
          toast.error("An error occurred");
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="enabled"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel>Enabled</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input {...field} />
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
