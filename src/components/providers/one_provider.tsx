"use client";

import { AiOutlineLoading } from "react-icons/ai";
import { useFetchAllProvidersIngredients } from "~/hooks/providers/use_fetch_all_ingredients_providers_by_id";
import toast from "react-hot-toast";
import { cn } from "~/utils/cn";
import { AddIngredientProvider } from "~/components/providers/add_ingredient_provider";
import { useDeleteProviderIngredient } from "~/hooks/providers/use_delete_ingredients_providers_by_id";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import { useState } from "react"; 

interface Props {
  id: string;
}

export const OneProvider = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false); 
  const providers_ingredients = useFetchAllProvidersIngredients(id);

  const deleteProviderIngredient = useDeleteProviderIngredient();
  const handleDeleteRow = async (providerId: string, ingredientId: string) => {
    try {
      setIsLoading(true);
  
      await deleteProviderIngredient.mutate(
        { provider_id: providerId, ingredient_id: ingredientId },
        {
          onSuccess: () => {
            toast.success("Ingredient deleted successfully");
          },
          onError: () => {
            toast.error("An error occurred while deleting the ingredient");
          },
        }
      );
      await providers_ingredients.refetch();
    } catch (error) {
      console.error("Erreur lors de la suppression", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Provider {providers_ingredients.data?.pages[0]?.data[0]?.provider_id}</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ingredients</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {providers_ingredients.data?.pages.map((page) =>
            page.data.map((providers_ingredients) => (
              <TableRow>
                <TableCell>{providers_ingredients.ingredient[0].name}</TableCell>
                <TableCell>
                  <Button
                    type="button"
                    onClick={() => handleDeleteRow(providers_ingredients.provider_id ,providers_ingredients.ingredient[0].id)}
                    disabled={isLoading}
                  >
                    {isLoading ? "Deleting..." : "Delete"}
                  </Button>
                </TableCell>
              </TableRow>
            )),
          )}
        </TableBody>
      </Table>

      {providers_ingredients.isLoading && (
        <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
      )}

      {providers_ingredients.hasNextPage && (
        <button
          onClick={() => providers_ingredients.fetchNextPage()}
          disabled={providers_ingredients.isLoading}
        >
          Load more
        </button>
      )}
      
      <AddIngredientProvider providerId={id}/>
    </>
  );
};
