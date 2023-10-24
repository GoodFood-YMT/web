"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye } from "lucide-react";
import { AiOutlineLoading } from "react-icons/ai";
import { Input } from "~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useFetchAllIngredientsByProduct } from "~/hooks/catalog/products/use_fetch_ingredients_by_product";
import { cn } from "~/utils/cn";

interface Props {
  productId: string;
}

export const AllProductIngredientsTable = ({ productId }: Props) => {
  const router = useRouter();
  const ingredients = useFetchAllIngredientsByProduct(productId);

  if (ingredients.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[350px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ingredients.data?.pages.map((page) =>
            page.data.map((ingredient) => (
              <TableRow key={ingredient.ingredientId}>
                <TableCell className="font-medium">
                  {ingredient.ingredientId}
                </TableCell>
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
