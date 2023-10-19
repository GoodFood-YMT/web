"use client";

import Link from "next/link";
import { Euro } from "lucide-react";
import { AiOutlineLoading } from "react-icons/ai";
import { useFetchInStockProductsByRestaurant } from "~/hooks/catalog/products/use_fetch_products_by_restaurant";
import { cn } from "~/utils/cn";

interface Props {
  restaurantId: string;
}

export const InStockProductsByRestaurant = ({ restaurantId }: Props) => {
  const products = useFetchInStockProductsByRestaurant(restaurantId);

  if (products.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className={cn("grid grid-cols-4 gap-4")}>
        {products.data?.pages.map((page) =>
          page.data.map((product) => (
            <Link
              href={`/restaurants/${restaurantId}/products/${product.id}`}
              key={product.id}
            >
              <div className="bg-product h-[250px] w-full rounded-md bg-cover bg-center">
                <div className="relative h-full w-full rounded-md bg-black/30">
                  {product.quantity > 0 ? (
                    <span className="absolute left-2 top-2 rounded-full bg-green-300 px-2 text-xs text-green-900">
                      In stock
                    </span>
                  ) : (
                    <span className="absolute left-2 top-2 rounded-full bg-red-300 px-2 text-xs text-red-900">
                      Out of stock
                    </span>
                  )}
                  <span className="absolute right-2 top-2 flex items-center rounded-full bg-white px-2 py-1 text-xs text-black">
                    {product.price}
                    <Euro size={12} />
                  </span>
                  <span className="absolute bottom-2 left-2 text-lg font-medium text-white">
                    {product.label}
                  </span>
                </div>
              </div>
            </Link>
          )),
        )}

        {products.isLoading && (
          <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
        )}

        {products.hasNextPage && (
          <button
            onClick={() => products.fetchNextPage()}
            disabled={products.isLoading}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};
