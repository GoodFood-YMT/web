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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useFetchAllIngredients } from "~/hooks/catalog/ingredients/use_fetch_all_ingredients";
import { useFetchAddProductIngredient } from "~/hooks/catalog/products/use_add_ingredient_to_product";
import { useFetchAllIngredientsByProduct } from "~/hooks/catalog/products/use_fetch_ingredients_by_product";

interface Props {
  productId: string;
}

const formSchema = z.object({
  ingredientId: z.string(),
  quantity: z.number().gt(0),
});

export const AddIngredientProductForm = ({ productId }: Props) => {
  const router = useRouter();
  const ingredients = useFetchAllIngredients();
  const productIngredients = useFetchAllIngredientsByProduct(productId);
  const addProductIngredient = useFetchAddProductIngredient();

  const filteredIngredients =
    ingredients.data?.data.filter((ingredient) => {
      return !productIngredients.data?.data.some(
        (productIngredient) => productIngredient.ingredientId === ingredient.id,
      );
    }) ?? [];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 0,
    },
  });

  const handleSubmit = (payload: z.infer<typeof formSchema>) => {
    const data = { quantity: payload.quantity };
    addProductIngredient.mutate(
      { productId, ingredientId: payload.ingredientId, data },
      {
        onSuccess: () => {
          toast.success("Ingredient added");
          router.push(`/admin/products/${productId}/ingredients`);
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
          name="ingredientId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ingredient</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} required={false}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredIngredients.map((ingredient) => (
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
