import { useCreateIngredientProvider } from "~/hooks/providers/use_create_ingredients_providers_by_id";
import { useFetchAllIngredients } from "~/hooks/catalog/ingredients/use_fetch_all_ingredients";
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
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Select } from "~/components/ui/select";

interface FormValues {
  provider_id: string;
  ingredient_id: string;
}

const formSchema = z.object({
  provider_id: z.string(),
  ingredient_id: z.string(),
});

export const AddIngredientProvider = () => {
    const createIngredientProvider = useCreateIngredientProvider();
    const { data, fetchNextPage, hasNextPage } = useFetchAllIngredients();
  
    const {
      handleSubmit,
      control,
      getValues,
    } = useForm<FormValues>({
      resolver: zodResolver(formSchema),
    });
  
    const onSubmit: SubmitHandler<FormValues> = (data) => {
      createIngredientProvider.mutate(data, {
        onSuccess: () => {
          toast.success("Ingredient Added to Provider");
        },
        onError: () => {
          toast.error("An error occurred");
        },
      });
    };
  
    // Flatten the data from the useFetchAllIngredients hook
    const allIngredients = data?.pages.flatMap((page) => page.data) ?? [];
  
    // Filter ingredients that are not already in the provider
    const filteredIngredients = allIngredients.filter(
      (ingredient) =>
        !getValues("ingredient_id") ||
        ingredient.id !== getValues("ingredient_id")
    );
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
            control={control}
            name="provider_id"
            render={({ field }) => (
            <FormControl>
              <FormLabel>Provider ID</FormLabel>
              <Input {...field} />
            </FormControl>
          )}
        />
  
        <Controller
            control={control}
            name="ingredient_id"
            render={({ field }) => (
                <FormControl>
                    <FormLabel>Ingredient ID</FormLabel>
                    <Select {...field}>
                        <option value="">Select an ingredient</option>
                        {filteredIngredients.map((ingredient) => (
                            <option key={ingredient.id} value={ingredient.id}>
                                {ingredient.name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
            )}
        />
  
        <Button type="submit">Create</Button>
  
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()} disabled={createIngredientProvider.isLoading}>
            Load More
          </Button>
        )}
      </form>
    );
  };