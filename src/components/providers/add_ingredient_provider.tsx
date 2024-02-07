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
import { useFetchAllIngredients } from "~/hooks/catalog/ingredients/use_fetch_all_ingredients";
import { useCreateIngredientProvider } from "~/hooks/providers/use_create_ingredients_providers_by_id";
import { useFetchAllProvidersIngredients } from "~/hooks/providers/use_fetch_all_ingredients_providers_by_id";

interface Props {
  providerId: string;
}

const formSchema = z.object({
  ingredientId: z.string(),
});

export const AddIngredientProvider = ({ providerId }: Props) => {
  const createIngredientProvider = useCreateIngredientProvider();
  const allIngredients = useFetchAllIngredients();
  const providerIngredients = useFetchAllProvidersIngredients(providerId);

  const filteredIngredients =
    allIngredients.data?.data.filter((ingredient) => {
      return !providerIngredients.data?.data.some(
        (providerIngredient) =>
          providerIngredient.ingredientId === ingredient.id,
      );
    }) ?? [];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (payload: z.infer<typeof formSchema>) => {
    createIngredientProvider.mutate(
      { providerId, ingredientId: payload.ingredientId },
      {
        onSuccess: () => {
          toast.success("Ingredient added");
          providerIngredients.refetch();
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
        <Button className="mt-2" type="submit">
          Save
        </Button>
      </form>
    </Form>
  );
};
