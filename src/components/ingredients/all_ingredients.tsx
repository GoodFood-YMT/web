"use client";

import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";
import { Button } from "~/components/ui/button";
import { useFetchAllIngredients } from "~/hooks/catalog/ingredients/use_fetch_all_ingredients";
import { cn } from "~/utils/cn";

export const AllIngredients = () => {
  const ingredients = useFetchAllIngredients();

  if (ingredients.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className={cn("grid grid-cols-4")}>
        {ingredients.data?.pages.map((page) =>
          page.data.map((ingredient) => (
            <Link href={`/ingredients/${ingredient.id}`} key={ingredient.id}>
              {ingredient.name}
            </Link>
          )),
        )}

        {ingredients.isLoading && (
          <div className="flex items-center justify-center py-8">
            <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
          </div>
        )}

        {ingredients.hasNextPage && (
          <div className="mt-4 flex justify-center">
            <Button
              onClick={() => ingredients.fetchNextPage()}
              disabled={ingredients.isLoading}
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
