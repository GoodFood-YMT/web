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
    <div className="sticky top-8 h-[70vh] gap-4 bg-white p-4 shadow-sm">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col overflow-y-scroll">
          <div className="mb-4 grid grid-cols-[1fr,3fr,2fr,1fr,1fr] gap-4">
            <span className="text-xs font-medium">Product</span>
            <span></span>
            <span className="text-xs font-medium">Quantity</span>
            <span className="text-xs font-medium">Total</span>
            <span></span>
          </div>

          <div className="grid grid-cols-[1fr,3fr,2fr,1fr,1fr] gap-4">
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
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="rounded-full">
                <Minus size={10} />
              </Button>
              <span className="font-medium">2</span>
              <Button variant="outline" size="sm" className="rounded-full">
                <Plus size={10} />
              </Button>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium">56.00 €</span>
            </div>
            <div className="flex items-center">
              <span>
                <XCircle size={16} />
              </span>
            </div>
          </div>
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
