"use client";

import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";
import { Button } from "~/components/ui/button";
import { useFetchInStockProducts } from "~/hooks/catalog/products/use_fetch_in_stock_products";
import { cn } from "~/utils/cn";

export const InStockProducts = () => {
  const products = useFetchInStockProducts();

  if (products.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className={cn("grid grid-cols-4")}>
        {products.data?.pages.map((page) =>
          page.data.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              {product.label}
            </Link>
          )),
        )}

        {products.isLoading && (
          <div className="flex items-center justify-center py-8">
            <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
          </div>
        )}

        {products.hasNextPage && (
          <div className="mt-4 flex justify-center">
            <Button
              onClick={() => products.fetchNextPage()}
              disabled={products.isLoading}
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
