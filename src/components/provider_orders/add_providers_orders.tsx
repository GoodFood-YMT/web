"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Minus, Plus, TrashIcon } from "lucide-react";
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
import { useCreateProviderOrder } from "~/hooks/ordering/use_create_provider_order";
import { useFetchAllProvidersIngredients } from "~/hooks/providers/use_fetch_all_ingredients_providers_by_id";
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: [],
    },
  });

  const selectedProviderId = form.watch("providerId");

  const createIngredientProvider = useCreateProviderOrder();
  const providers = useFetchAllProviders();
  const ingredients = useFetchAllProvidersIngredients(selectedProviderId);
  const router = useRouter();

  const [selectedIngredientId, setSelectedIngredientId] =
    useState<string>("null");
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const ingredientsForm = form.watch("ingredients");

  const filteredIngredients = ingredients.data?.data.filter(
    (ingredient) =>
      !ingredientsForm.some(
        (ingredientForm) =>
          ingredientForm.ingredientId === ingredient.ingredientId,
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

  const handleAddIngredient = (ingredientId: string, quantity: number) => {
    if (!ingredientId || ingredientId === "null") {
      toast.error("You must select an ingredient");
      return;
    }

    if (quantity <= 0) {
      toast.error("Quantity must be greater than 0");
      return;
    }

    form.setValue("ingredients", [
      ...form.getValues("ingredients"),
      {
        name:
          ingredients.data?.data.find((i) => i.ingredientId === ingredientId)
            ?.name ?? "",
        ingredientId,
        quantity,
      },
    ]);

    setSelectedIngredientId("null");
    setSelectedQuantity(1);
  };

  const handleDeleteIngredient = (ingredientId: string) => {
    form.setValue(
      "ingredients",
      form
        .getValues("ingredients")
        .filter((i) => i.ingredientId !== ingredientId),
    );
  };

  const handleIncrementQuantity = (ingredientId: string) => {
    const ingredient = form
      .getValues("ingredients")
      .find((i) => i.ingredientId === ingredientId);

    if (ingredient) {
      form.setValue(
        "ingredients",
        form
          .getValues("ingredients")
          .map((i) =>
            i.ingredientId === ingredientId
              ? { ...i, quantity: i.quantity + 1 }
              : i,
          ),
      );
    }
  };

  const handleDecrementQuantity = (ingredientId: string) => {
    const ingredient = form
      .getValues("ingredients")
      .find((i) => i.ingredientId === ingredientId);

    if (ingredient && ingredient.quantity > 1) {
      form.setValue(
        "ingredients",
        form
          .getValues("ingredients")
          .map((i) =>
            i.ingredientId === ingredientId
              ? { ...i, quantity: i.quantity - 1 }
              : i,
          ),
      );
    }
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
            <div className="flex flex-col border border-border">
              {ingredientsForm.map((ingredient) => (
                <div
                  key={ingredient.ingredientId}
                  className="flex items-center justify-between px-4 py-4 text-sm even:bg-slate-50"
                >
                  {ingredient.name}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleDecrementQuantity(ingredient.ingredientId)
                        }
                      >
                        <Minus size={10} />
                      </Button>
                      <span className="w-[50px] px-2 text-center font-medium">
                        {ingredient.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleIncrementQuantity(ingredient.ingredientId)
                        }
                      >
                        <Plus size={10} />
                      </Button>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleDeleteIngredient(ingredient.ingredientId)
                      }
                    >
                      <TrashIcon size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-[3fr,3fr,1fr] gap-4">
          <Select
            value={selectedIngredientId}
            onValueChange={(value) => setSelectedIngredientId(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Ingredient" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="null" disabled>
                Select an ingredient
              </SelectItem>
              {filteredIngredients?.map((ingredient) => (
                <SelectItem
                  key={ingredient.ingredientId}
                  value={ingredient.ingredientId}
                >
                  {ingredient.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            placeholder="Quantity"
            type="number"
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
          />

          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddIngredient(selectedIngredientId, selectedQuantity);
            }}
          >
            Add
          </Button>
        </div>

        <div className="mt-4 flex justify-end">
          <Button type="submit" disabled={createIngredientProvider.isLoading}>
            Create
          </Button>
        </div>
      </form>
    </Form>
  );
};
