/* eslint-disable @next/next/no-img-element */
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { AiOutlineLoading } from "react-icons/ai";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useFetchAllRestaurants } from "~/hooks/restaurants/use_fetch_all_restaurants";
import { cn } from "~/utils/cn";

export const AllRestaurants = () => {
  const [q, setQ] = useState("");
  const restaurants = useFetchAllRestaurants(1, 10, q);

  if (restaurants.isError) {
    return <div>Something went wrong</div>;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target: { search: { value: string } } = e.target as unknown as {
      search: { value: string };
    };
    setQ(target.search.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4 flex items-center gap-2">
        <Input type="text" placeholder="Search..." name="search" />
        <Button type="submit">Search</Button>
      </form>
      <div className={cn("grid grid-cols-4 gap-4")}>
        {restaurants.data?.pages.map((page) =>
          page.data.map((restaurant) => (
            <Link
              href={`/restaurants/${restaurant.id}`}
              key={restaurant.id}
              className="text-medium relative"
            >
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2370"
                alt="Restaurant"
                className="rounded-md"
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-md bg-black/30">
                <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs text-black">
                  <MapPin size={12} />
                  {restaurant.city}
                </span>
                <span className="absolute bottom-2 left-2 text-white">
                  {restaurant.name}
                </span>
              </div>
            </Link>
          )),
        )}
      </div>

      {restaurants.isLoading && (
        <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
      )}

      {restaurants.hasNextPage && (
        <div className="flex justify-center py-8">
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
