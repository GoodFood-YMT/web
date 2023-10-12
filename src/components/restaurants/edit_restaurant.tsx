"use client";

import { notFound } from "next/navigation";
import { EditRestaurantForm } from "~/components/restaurants/edit_restaurant_form";
import { useFetchRestaurantById } from "~/hooks/restaurants/use_fetch_restaurant_by_id";

interface Props {
  id: string;
}

export const EditRestaurant = ({ id }: Props) => {
  const restaurant = useFetchRestaurantById(id);

  if (restaurant.isLoading) {
    return <div>Loading...</div>;
  }

  if (restaurant.isError) {
    notFound();
  }

  return <EditRestaurantForm restaurant={restaurant.data} />;
};
