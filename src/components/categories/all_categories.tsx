"use client";

import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";
import { Button } from "~/components/ui/button";
import { useFetchAllCategories } from "~/hooks/catalog/categories/use_fetch_all_categories";
import { cn } from "~/utils/cn";

export const AllCategories = () => {
  const categories = useFetchAllCategories();

  if (categories.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className={cn("grid")}>
        {categories.data?.pages.map((page) =>
          page.data.map((category) => (
            <Link href={`/categories/${category.id}`} key={category.id}>
              {category.name}
            </Link>
          )),
        )}
      </div>

      {categories.isLoading && (
        <div className="flex items-center justify-center py-8">
          <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
        </div>
      )}

      {categories.hasNextPage && (
        <div className="mt-4 flex justify-center">
          <Button
            onClick={() => categories.fetchNextPage()}
            disabled={categories.isLoading}
          >
            Load more
          </Button>
        </div>
      )}
    </>
  );
};
