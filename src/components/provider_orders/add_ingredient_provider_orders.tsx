import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@radix-ui/react-dropdown-menu";
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
import { Input } from "~/components/ui/input";
import { useFetchAllIngredients } from "~/hooks/catalog/ingredients/use_fetch_all_ingredients";
import { useUpdateProviderOrderById } from "~/hooks/ordering/use_update_provider_order_by_id";
import { useFetchProviderOrderById } from "~/hooks/ordering/use_fetch_provider_order_by_id";


interface Props {
  providerOrderId: string;
}

const formSchema = z.object({
  providerId: z.string(),
  ingredientId: z.string(),
  quantity: z.string(),
});

export const AddIngredientProviderOrders = ({ providerOrderId }: Props) => {

  const providerOrder = useFetchProviderOrderById(providerOrderId);
  const updateIngredientProvider = useUpdateProviderOrderById(providerOrderId);
  const allIngredients = useFetchAllIngredients();

  const filteredIngredients =
    allIngredients.data?.data.filter((ingredient) => {
      return !providerOrder.data?.ingredients.some(
        (providerOrderIngredient) =>
        providerOrderIngredient.ingredientId === ingredient.id,
      );
    }) ?? [];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (payload: z.infer<typeof formSchema>) => {
    updateIngredientProvider.mutate({ ingredients: [{ ingredientId: payload.ingredientId, quantity: parseInt(payload.quantity), name: allIngredients.data?.data.find((ingredient) => ingredient.id === payload.ingredientId)?.name ?? "" }] },
      {
        onSuccess: () => {
          toast.success("Ingredient added");
          providerOrder.refetch();
        },
        onError: () => {
          toast.error("An error occurred");
        },
      },
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 border border-border p-4"
      >
        <FormField
          control={form.control}
          name="ingredientId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add a new ingredient</FormLabel>
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
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <Button className="mt-2" type="submit">
          Save
        </Button>
      </form>
    </Form>
  );
};
