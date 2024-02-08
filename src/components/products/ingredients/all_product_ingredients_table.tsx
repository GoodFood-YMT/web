"use client";

import Link from "next/link";
import { Eye, Trash } from "lucide-react";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { buttonVariants } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useDeleteProductIngredient } from "~/hooks/catalog/products/use_delete_product_ingredient";
import { useFetchAllIngredientsByProduct } from "~/hooks/catalog/products/use_fetch_ingredients_by_product";
import { useFetchProductById } from "~/hooks/catalog/products/use_fetch_product_by_id";
import { cn } from "~/utils/cn";

interface Props {
  productId: string;
}

export const AllProductIngredientsTable = ({ productId }: Props) => {
  const product = useFetchProductById(productId);
  const ingredients = useFetchAllIngredientsByProduct(productId);
  const deleteProductIngredient = useDeleteProductIngredient();

  const handleDeleteProductIngredient = (ingredientId: string) => {
    deleteProductIngredient.mutate(
      { productId, ingredientId },
      {
        onSuccess: () => {
          toast.success("Ingredient deleted");
          ingredients.refetch();
        },
        onError: () => {
          toast.error("An error occured");
        },
      },
    );
  };

  if (ingredients.isError || product.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-medium">
          {`"${product.data?.label}" `}Ingredients
        </h1>
        <Link
          href={`/admin/products/${productId}/ingredients/add`}
          className={buttonVariants({})}
        >
          Add
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ingredients.data?.data.map((ingredient) => (
            <TableRow key={ingredient.ingredientId}>
              <TableCell>{ingredient.name}</TableCell>
              <TableCell>{ingredient.quantity}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Link
                    href={`/admin/products/${ingredient.productId}/ingredients/${ingredient.ingredientId}`}
                  >
                    <Eye />
                  </Link>
                  <Trash
                    className="cursor-pointer"
                    onClick={() =>
                      handleDeleteProductIngredient(ingredient.ingredientId)
                    }
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}

          {ingredients.data?.data.length === 0 && (
            <TableRow>
              <TableCell colSpan={3}>
                <div className="text-center">No ingredients</div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {ingredients.isLoading && (
        <div className="flex items-center justify-center py-8">
          <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
        </div>
      )}
    </>
  );
};
