"use client";

import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import { ShoppingBag } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useAddToBasket } from "~/hooks/basket/use_add_to_basket";
import { useFetchProductById } from "~/hooks/catalog/products/use_fetch_product_by_id";
import { formatToPrice } from "~/utils/format_to_price";
import { getRestaurantImage } from "~/utils/get_restaurant_image";

interface Props {
  id: string;
}

export const OneProduct = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const product = useFetchProductById(id);
  const addToBasket = useAddToBasket();

  const onAddToBasket = async () => {
    await addToBasket.mutateAsync({ id, quantity: 1 });
    // toast.success("Product added to basket");
    await queryClient.invalidateQueries({ queryKey: ["basket"] });
  };

  if (product.isLoading) {
    return <div>Loading...</div>;
  }

  if (product.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="grid grid-cols-[1fr,2fr] gap-4 bg-white p-4 shadow-sm">
      <div className="relative aspect-square w-full">
        <Image
          src={getRestaurantImage(product.data.label)}
          alt="Product"
          className="object-cover object-center"
          fill
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-medium tracking-tight">
              {product.data.label}
            </h2>
            <span className="text-lg font-medium tracking-tight">
              {formatToPrice(product.data.price)} €
            </span>
          </div>
          <p className="text-sm opacity-60">{product.data.description}</p>
        </div>
        <div className="flex justify-end">
          <Button onClick={onAddToBasket}>
            <ShoppingBag size={16} /> Add to basket
          </Button>
        </div>
      </div>
    </div>
  );
};
