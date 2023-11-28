"use client";

import Image from "next/image";
import { Basket } from "~/components/basket/basket";
import { useAccountStore } from "~/stores/account_store";

export const BasketOrLogin = () => {
  const { account } = useAccountStore();

  if (account) {
    return <Basket />;
  }

  return (
    <div className="sticky top-8 flex h-[600px] flex-col items-center justify-center gap-4 bg-white p-4 shadow-sm">
      <div className="flex h-full w-full flex-col">
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
            You are not logged in
          </span>
          <span className="max-w-[60%] text-center text-xs opacity-60">
            You need to be logged in to view your cart.
          </span>
        </div>
      </div>
    </div>
  );
};
