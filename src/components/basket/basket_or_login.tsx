"use client";

import { ShoppingBasketIcon } from "lucide-react";
import { Basket } from "~/components/basket/basket";
import { useAccountStore } from "~/stores/account_store";

export const BasketOrLogin = () => {
  const { account } = useAccountStore();

  if (account) {
    return <Basket />;
  }

  return (
    <div className="sticky top-8 flex h-[70vh] flex-col items-center justify-center gap-4 bg-white shadow-sm">
      <ShoppingBasketIcon size={56} className="text-muted-foreground" />
      <p className="text-base tracking-tight text-muted-foreground">
        You must login to view your cart
      </p>
    </div>
  );
};
