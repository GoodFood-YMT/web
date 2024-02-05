"use client";

import { AiOutlineLoading } from "react-icons/ai";
import { useFetchAllProvidersIngredients } from "~/hooks/providers/use_fetch_all_ingredients_providers_by_id";
import { cn } from "~/utils/cn";
import { AddIngredientProvider } from "~/components/providers/add_ingredient_provider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

interface Props {
  id: string;
}

export const OneProvider = ({ id }: Props) => {
  const providers_ingredients = useFetchAllProvidersIngredients(id);

  if (providers_ingredients.isError) {
    return <div>Une erreur est survenue</div>;
  }

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
                  <link href="">
                    Delete
                  </link>
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
      
      <AddIngredientProvider />
    </>
  );
};
