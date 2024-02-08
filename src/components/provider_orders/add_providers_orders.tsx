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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useFetchAllIngredients } from "~/hooks/catalog/ingredients/use_fetch_all_ingredients";
import { useCreateProviderOrder } from "~/hooks/ordering/use_create_provider_order";
import { useFetchAllProviders } from "~/hooks/providers/use_fetch_all_providers";

const formSchema = z.object({
  providerId: z.string(),
  ingredients: z.array(
    z.object({
      name: z.string(),
      ingredientId: z.string(),
      quantity: z.number().gt(0),
    }),
  ),
});

export const AddProvidersOrders = () => {
  const createIngredientProvider = useCreateProviderOrder();
  const providers = useFetchAllProviders();
  const ingredients = useFetchAllIngredients();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: [],
    },
  });

  const ingredientsForm = form.watch("ingredients");

  const filteredIngredients = ingredients.data?.data.filter(
    (ingredient) =>
      !ingredientsForm.some(
        (ingredientForm) => ingredientForm.ingredientId === ingredient.id,
      ),
  );

  const onSubmit = (payload: z.infer<typeof formSchema>) => {
    if (payload.ingredients.length === 0) {
      toast.error("You must select at least one ingredient");
      return;
    }

    createIngredientProvider.mutate(
      {
        providerId: payload.providerId,
        ingredients: payload.ingredients.map((ingredient) => ({
          ingredientId: ingredient.ingredientId,
          quantity: ingredient.quantity,
        })),
      },
      {
        onSuccess: () => {
          toast.success("Your order has been created successfully");
          router.push("/admin/providers-orders");
        },
        onError: () => {
          toast.error("An error occurred");
        },
      },
    );
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="providerId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Provider</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value ?? undefined}
                  required={false}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {providers.data?.pages.map((page) =>
                      page.data.map((provider) => (
                        <SelectItem key={provider.id} value={provider.id}>
                          {provider.name}
                        </SelectItem>
                      )),
                    )}
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />

        <div>
          <FormLabel>Ingredients</FormLabel>
          <div className="h-2"></div>

          {ingredientsForm.length === 0 ? (
            <div className="flex items-center justify-center border border-border py-4 text-sm">
              No ingredients selected
            </div>
          ) : (
            <div className="flex flex-col gap-2 border border-border p-4">
              {ingredientsForm.map((ingredient) => (
                <span key={ingredient.ingredientId}>{ingredient.name}</span>
              ))}
            </div>
          )}
        </div>

        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Ingredient" />
            </SelectTrigger>
            <SelectContent>
              {filteredIngredients?.map((ingredient) => (
                <SelectItem key={ingredient.id} value={ingredient.id}>
                  {ingredient.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 flex justify-end">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Form>
  );
};
