"use client";

import { useFetchRestaurantById } from "~/hooks/restaurants/use_fetch_restaurant_by_id";

interface Props {
  id: string;
}

export const OneRestaurant = ({ id }: Props) => {
  const restaurant = useFetchRestaurantById(id);

  if (restaurant.isLoading) {
    return <div>Loading...</div>;
  }

  if (restaurant.isError) {
    return <div>Something went wrong</div>;
  }

  return <div>{restaurant.data?.name}</div>;
};
