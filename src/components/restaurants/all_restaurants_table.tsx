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
import { useFetchAllRestaurants } from "~/hooks/restaurants/use_fetch_all_restaurants";
import { cn } from "~/utils/cn";

export const AllRestaurantsTable = () => {
  const restaurants = useFetchAllRestaurants();

  if (restaurants.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {restaurants.data?.pages.map((page) =>
            page.data.map((restaurant) => (
              <TableRow key={restaurant.id}>
                <TableCell className="font-medium">{restaurant.id}</TableCell>
                <TableCell>{restaurant.name}</TableCell>
                <TableCell>{restaurant.city}</TableCell>
                <TableCell>{restaurant.country}</TableCell>
                <TableCell>
                  <Link href={`/admin/restaurants/${restaurant.id}`}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            )),
          )}
        </TableBody>
      </Table>

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
