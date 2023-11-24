"use client";

import Image from "next/image";
import { Button } from "~/components/ui/button";
import { useClearBasket } from "~/hooks/basket/use_clear_basket";
import { useFetchBasket } from "~/hooks/basket/use_fetch_basket";

export const Basket = () => {
  const basket = useFetchBasket();
  const clearBasket = useClearBasket();

  if (basket.isLoading) {
    return <div>Loading...</div>;
  }

  if (basket.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="sticky top-8 h-[70vh] gap-4 bg-white p-4 shadow-sm">
      <div className="flex flex-col">
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-4">
          <div className="relative h-[80px] w-[80px]">
            <Image
              src="/restaurants/burger.webp"
              className="object-cover object-center"
              alt="Product"
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Double CheeseBurger</span>
            <span className="text-xs font-medium opacity-60">$ 59.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
