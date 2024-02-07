"use client";
import toast from "react-hot-toast";
import z from "zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Input } from "~/components/ui/input";

import { useCreateProviderOrder } from "~/hooks/ordering/use_create_provider_order";
import { useFetchAllProviders } from "~/hooks/providers/use_fetch_all_providers";
import { useFetchAllIngredients } from "~/hooks/catalog/ingredients/use_fetch_all_ingredients";

const formSchema = z.object({
    providerId: z.string(),
    ingredientId: z.string(),
    quantity: z.string(),
});

export const AddProvidersOrders = () => {
    const createIngredientProvider = useCreateProviderOrder();
    const providers = useFetchAllProviders().data?.pages.flatMap((page) => page.data) ?? [];
    const ingredients = useFetchAllIngredients();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (payload: z.infer<typeof formSchema>) => {
        createIngredientProvider.mutate({ providerId: payload.providerId, ingredients: [{ ingredientId: payload.ingredientId, quantity: parseInt(payload.quantity) }]}, 
        {
            onSuccess: () => {
                toast.success("");
            },
            onError: () => {
                toast.error("An error occurred");
            },
        });
    };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="providerId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Provider</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value ?? undefined} required={false}>
                  <SelectTrigger>
                      <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {providers.map((provider) => (
                      <SelectItem key={provider.id} value={provider.id}>
                        {provider.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
              </Select>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ingredientId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ingredient</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value ?? undefined} required={false}>
                  <SelectTrigger>
                      <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ingredients.data?.data.map((ingredient) => (
                      <SelectItem key={ingredient.id} value={ingredient.id}>
                        {ingredient.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
              </Select>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(event) =>
                    field.onChange(parseInt(event.target.value))
                  }
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Save</Button>
      </form>
    </Form>

  );
};
