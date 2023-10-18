"use client";

import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";
import { useFetchInStockProductsByRestaurant } from "~/hooks/catalog/products/use_fetch_products_by_restaurant";
import { cn } from "~/utils/cn";

interface Props {
    restaurantId: string;
};

export const InStockProductsByRestaurant = ({restaurantId}: Props) => {
    console.log(restaurantId)
    const products = useFetchInStockProductsByRestaurant(restaurantId);

    if(products.isError){
        return <div>Something went wrong</div>
    }

    return (
        <>
            <div className={cn("grid grid-cols-4")}>
                {products.data?.pages.map((page) =>
                        page.data.map((product) => (
                            <Link href={`/restaurants/${restaurantId}/products/${product.id}`} key={product.id}>
                                {product.label}
                            </Link>
                        ))
                    )
                }

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
    )
}