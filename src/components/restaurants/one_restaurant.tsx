"use client";

import { MapPin } from "lucide-react";
import { InStockProductsByRestaurant } from "~/components/products/in_stock_products_by_restaurant";
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

  return (
    <>
      <div className="mb-8 h-[200px] w-full rounded-md bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2370')] bg-cover bg-center">
        <div className="relative h-full w-full rounded-md bg-black/30">
          <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs text-black">
            <MapPin size={12} />
            {restaurant.data.address}, {restaurant.data.city},{" "}
            {restaurant.data.country}
          </span>
          <span className="absolute bottom-2 left-2 text-xl font-medium text-white">
            {restaurant.data.name}
          </span>
        </div>
      </div>

      <InStockProductsByRestaurant restaurantId={id} />
    </>
  );
};
