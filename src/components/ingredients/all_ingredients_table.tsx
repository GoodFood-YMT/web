"use client";

import Link from "next/link";
import { Eye } from "lucide-react";
import { AiOutlineLoading } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useFetchAllIngredients } from "~/hooks/catalog/ingredients/use_fetch_all_ingredients";
import { cn } from "~/utils/cn";

export const AllIngredientsTable = () => {
  const ingredients = useFetchAllIngredients();

  if (ingredients.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
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
            <TableRow key={ingredient.id}>
              <TableCell>{ingredient.name}</TableCell>
              <TableCell>{ingredient.quantity}</TableCell>
              <TableCell>
                <Link href={`/admin/ingredients/${ingredient.id}`}>
                  <Eye />
                </Link>
              </TableCell>
            </TableRow>
          ))}

          {ingredients.data?.data.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No ingredients found
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
