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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

interface Props {
  providerId: string;
}

const formSchema = z.object({
  ingredient_id: z.string(),
});

export const AddIngredientProvider = ({ providerId }: Props) => {
  const createIngredientProvider = useCreateIngredientProvider();
  const { data } = useFetchAllIngredients();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (payload: z.infer<typeof formSchema>) => {
    const { ingredient_id } = payload;
    createIngredientProvider.mutate({ provider_id: providerId, ingredient_id }, 
    {
      onSuccess: () => {
        toast.success("Ingredient added");
      },
      onError: () => {
        toast.error("An error occurred");
      },
    },
  );
  };

   // Flatten the data from the useFetchAllIngredients hook
   const allIngredients = data?.pages.flatMap((page) => page.data) ?? [];
  
   // Filter ingredients that are not already in the provider
   const filteredIngredients = allIngredients.filter(
     (ingredient) =>
       !form.getValues("ingredient_id") ||
       ingredient.id !== form.getValues("ingredient_id")
   );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="ingredient_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ingredient</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value ?? undefined} required={false}>
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
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};