"use client";

import Link from "next/link";
import { Eye } from "lucide-react";
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
import { useFetchAllIngredientsByProduct } from "~/hooks/catalog/products/use_fetch_ingredients_by_product";
import { useFetchProductById } from "~/hooks/catalog/products/use_fetch_product_by_id";
import { cn } from "~/utils/cn";

interface Props {
  productId: string;
}

export const AllProductIngredientsTable = ({ productId }: Props) => {
  const product = useFetchProductById(productId);
  const ingredients = useFetchAllIngredientsByProduct(productId);

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
          </TableRow>
        </TableHeader>
        <TableBody>
          {ingredients.data?.pages.map((page) =>
            page.data.map((ingredient) => (
              <TableRow key={ingredient.ingredientId}>
                <TableCell>{ingredient.name}</TableCell>
                <TableCell>{ingredient.quantity}</TableCell>
                <TableCell>
                  <Link
                    href={`/admin/products/${ingredient.productId}/ingredients/${ingredient.ingredientId}`}
                  >
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            )),
          )}
        </TableBody>
      </Table>

      {ingredients.isLoading && (
        <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
      )}

      {ingredients.hasNextPage && (
        <button
          onClick={() => ingredients.fetchNextPage()}
          disabled={ingredients.isLoading}
        >
          Load more
        </button>
      )}
    </>
  );
};