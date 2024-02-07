"use client";

import { useState } from "react";
import { TrashIcon } from "lucide-react";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { AddIngredientProvider } from "~/components/providers/add_ingredient_provider";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useDeleteProviderIngredient } from "~/hooks/providers/use_delete_ingredients_providers_by_id";
import { useFetchAllProvidersIngredients } from "~/hooks/providers/use_fetch_all_ingredients_providers_by_id";
import { useFetchProviderById } from "~/hooks/providers/use_fetch_providers_by_id";
import { cn } from "~/utils/cn";

interface Props {
  id: string;
}

export const OneProvider = ({ id }: Props) => {
  const provider = useFetchProviderById(id);
  const providersIngredients = useFetchAllProvidersIngredients(id);
  const deleteProviderIngredient = useDeleteProviderIngredient();

  const handleDeleteRow = async (providerId: string, ingredientId: string) => {
    await deleteProviderIngredient.mutate(
      { providerId, ingredientId },
      {
        onSuccess: () => {
          toast.success("Ingredient deleted successfully");
          providersIngredients.refetch();
        },
        onError: () => {
          toast.error("An error occurred while deleting the ingredient");
        },
      },
    );

    await providersIngredients.refetch();
  };

  if (provider.isLoading || providersIngredients.isLoading) {
    <div className="flex items-center justify-center py-4">
      <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
    </div>;
  }

  return (
    <>
      <h1 className="mb-4 text-2xl font-medium">
        Provider {'"'}
        {provider.data?.name}
        {'"'}
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ingredient</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {providersIngredients.data?.data.map((ingredient) => (
            <TableRow key={ingredient.ingredientId}>
              <TableCell>{ingredient.name}</TableCell>
              <TableCell className="text-right">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() =>
                    handleDeleteRow(
                      ingredient.providerId,
                      ingredient.ingredientId,
                    )
                  }
                  disabled={deleteProviderIngredient.isLoading}
                >
                  <TrashIcon size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}

          {providersIngredients.data?.data.length === 0 && (
            <TableRow>
              <TableCell colSpan={2}>No ingredients</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <AddIngredientProvider providerId={id} />
    </>
  );
};
