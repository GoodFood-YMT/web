"use client";

import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";
import { Button } from "~/components/ui/button";
import { useFetchAllRestaurants } from "~/hooks/restaurants/use_fetch_all_restaurants";
import { cn } from "~/utils/cn";

export const AllRestaurantsHome = () => {
  const restaurants = useFetchAllRestaurants();

  if (restaurants.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className={cn("grid grid-cols-4")}>
        {restaurants.data?.pages.map((page) =>
          page.data.map((restaurant) => (
            <Link
              href={`/restaurants/${restaurant.id}/products`}
              key={restaurant.id}
            >
              {restaurant.name}
            </Link>
          )),
        )}
      </div>

      {restaurants.isLoading && (
        <div className="flex items-center justify-center py-8">
          <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
        </div>
      )}

      {restaurants.hasNextPage && (
        <div className="mt-4 flex justify-center">
          <Button
            onClick={() => restaurants.fetchNextPage()}
            disabled={restaurants.isLoading}
          >
            Load more
          </Button>
        </div>
      )}
    </>
  );
};
