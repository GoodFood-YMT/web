"use client";

import { AiOutlineLoading } from "react-icons/ai";
import { useFetchAllRestaurants } from "~/hooks/restaurants/use_fetch_all_restaurants";
import { cn } from "~/utils/cn";

export const AllRestaurants = () => {
  const restaurants = useFetchAllRestaurants();

  if (restaurants.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className={cn("grid grid-cols-4")}>
        {restaurants.data?.pages.map((page) =>
          page.data.map((restaurant) => (
            <div key={restaurant.id}>{restaurant.name}</div>
          )),
        )}
      </div>

      {restaurants.isLoading && (
        <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
      )}

      {restaurants.hasNextPage && (
        <button
          onClick={() => restaurants.fetchNextPage()}
          disabled={restaurants.isLoading}
        >
          Load more
        </button>
      )}
    </>
  );
};
