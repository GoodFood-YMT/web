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
import { useUpdateIngredient } from "~/hooks/catalog/ingredients/use_update_ingredient";
import { extractFields } from "~/utils/extract_fields";

const formSchema = z.object({
  name: z.string(),
  quantity: z.number(),
});

interface Props {
  ingredient: {
    id: string;
    name: string;
    quantity: number;
    restaurantId: string;
  };
}

export const EditIngredientForm = ({ ingredient }: Props) => {
  const router = useRouter();
  const updateIngredient = useUpdateIngredient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ingredient.name,
      quantity: ingredient.quantity,
    },
  });

  const handleSubmit = (payload: z.infer<typeof formSchema>) => {
    const fields = extractFields(form.formState.dirtyFields, payload) as {
      name: string;
      quantity: number;
    };

    updateIngredient.mutate(
      {
        id: ingredient.id,
        data: {
          ...fields,
        },
      },
      {
        onSuccess: () => {
          toast.success("Ingredient updated");
          router.push("/admin/ingredients");
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
