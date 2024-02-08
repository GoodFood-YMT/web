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
import { useFetchUpdateProductIngredient } from "~/hooks/catalog/products/use_update_product_ingredient";

interface Props {
  productId: string;
  productIngredient: {
    ingredientId: string;
    quantity: number;
  };
}

const formSchema = z.object({
  quantity: z.number().gt(0),
});

export const EditIngredientProductForm = ({
  productId,
  productIngredient,
}: Props) => {
  console.log(productIngredient);
  const router = useRouter();
  const addProductIngredient = useFetchUpdateProductIngredient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: productIngredient.quantity,
    },
  });

  const handleSubmit = (payload: z.infer<typeof formSchema>) => {
    const data = { quantity: payload.quantity };
    addProductIngredient.mutate(
      { productId, ingredientId: productIngredient.ingredientId, data },
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
