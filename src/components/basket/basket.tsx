"use client";

import Image from "next/image";
import { Cross, Minus, Plus, XCircle } from "lucide-react";
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
    <div className="sticky top-8 h-[600px] gap-4 bg-white p-4 shadow-sm">
      {/* <div className="flex h-full w-full flex-col">
        <h2 className="mb-2 text-lg font-medium tracking-tight">
          Shopping Cart
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <Image
            src="/cart.webp"
            width={80}
            height={80}
            alt="Cart"
            className="mb-8"
          />
          <span className="text-center text-lg font-medium">
            Your cart is empty
          </span>
          <span className="max-w-[60%] text-center text-xs opacity-60">
            Looks like you haven{"'"}t added any food to your cart yet.
          </span>
        </div>
      </div> */}

      <div className="flex h-full flex-col justify-between gap-4">
        <div className="flex flex-col gap-2 overflow-y-scroll">
          <div className="mb-2 flex justify-between">
            <h2 className="text-lg font-medium tracking-tight">
              Shopping Cart
            </h2>

            <Button size="xs" variant="ghost">
              Clear
            </Button>
          </div>

          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="grid grid-cols-[1fr,3fr,2fr] gap-2">
              <div className="relative aspect-square w-full">
                <Image
                  src="/restaurants/burger.webp"
                  className="object-cover object-center"
                  alt="Product"
                  fill
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">Double CheeseBurger</span>
                <span className="text-xs font-medium opacity-60">59.00 €</span>
              </div>
              <div className="flex items-center">
                <Button variant="outline" size="sm">
                  <Minus size={10} />
                </Button>
                <span className="px-2 font-medium">2</span>
                <Button variant="outline" size="sm">
                  <Plus size={10} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex w-full flex-col gap-4 bg-black bg-opacity-[0.03] p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">Subtotal</span>
              <span className="text-xs">56.00€</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">Shipping & Handling</span>
              <span className="text-xs">2.00€</span>
            </div>
            <div className="w-full border-b border-black/5"></div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Total</span>
              <span className="text-sm">58.00€</span>
            </div>
          </div>
          <Button>Proceed to checkout</Button>
        </div>
      </div>
    </div>
  );
};
