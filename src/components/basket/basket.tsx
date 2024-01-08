"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Minus, Plus, X } from "lucide-react";
import { Loader } from "~/components/loader";
import { Button, buttonVariants } from "~/components/ui/button";
import { useAddToBasket } from "~/hooks/basket/use_add_to_basket";
import { useClearBasket } from "~/hooks/basket/use_clear_basket";
import { useDeleteFromBasket } from "~/hooks/basket/use_delete_from_basket";
import { useFetchBasket } from "~/hooks/basket/use_fetch_basket";
import { formatToPrice } from "~/utils/format_to_price";
import { getRestaurantImage } from "~/utils/get_restaurant_image";

export const Basket = () => {
  const pathname = usePathname();
  const basket = useFetchBasket();
  const clearBasket = useClearBasket();
  const addToBasket = useAddToBasket();
  const deleteFromBasket = useDeleteFromBasket();

  const readOnly = pathname === "/checkout";

  const subtotal =
    basket.data?.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    ) ?? 0;

  const handleClearBasket = async () => {
    await clearBasket.mutateAsync();
    await basket.refetch();
  };

  const handleAddToBasket = async (id: string) => {
    await addToBasket.mutateAsync({ id, quantity: 1 });
    await basket.refetch();
  };

  const handleDeleteFromBasket = async (id: string) => {
    await deleteFromBasket.mutateAsync({ id, quantity: 1 });
    await basket.refetch();
  };

  if (basket.isLoading) {
    return (
      <div className="sticky top-8 h-[600px] bg-white p-4 shadow-sm">
        <div className="flex h-full w-full flex-col">
          <h2 className="mb-2 text-lg font-medium tracking-tight">
            Shopping Cart
          </h2>
          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
            <Loader />
          </div>
        </div>
      </div>
    );
  }

  if (basket.isError) {
    return (
      <div className="sticky top-8 h-[600px] bg-white p-4 shadow-sm">
        <div className="flex h-full w-full flex-col">
          <h2 className="mb-2 text-lg font-medium tracking-tight">
            Shopping Cart
          </h2>
          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
            <X size={80} className="text-red-500" />
            <span className="text-center text-lg font-medium">
              Something went wrong
            </span>
            <span className="max-w-[60%] text-center text-xs opacity-60">
              Could not load your cart. Please try again later.
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-8 h-[600px] gap-4 bg-white p-4 shadow-sm">
      {basket.data.items.length === 0 ? (
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
              Your cart is empty
            </span>
            <span className="max-w-[60%] text-center text-xs opacity-60">
              Looks like you haven{"'"}t added any food to your cart yet.
            </span>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col justify-between gap-4">
          <div className="flex flex-col gap-2 overflow-y-auto">
            <div className="mb-2 flex justify-between">
              <h2 className="text-lg font-medium tracking-tight">
                Shopping Cart
              </h2>

              {!readOnly && (
                <Button size="xs" variant="ghost" onClick={handleClearBasket}>
                  Clear
                </Button>
              )}
            </div>

            {basket.data.items.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[1fr,3fr,2fr] gap-2"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={getRestaurantImage(product.label)}
                    className="object-cover object-center"
                    alt="Product"
                    fill
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium">
                    {readOnly && `${product.quantity}x`} {product.label}
                  </span>
                  <span className="text-xs font-medium opacity-60">
                    {formatToPrice(product.price * product.quantity)} €
                  </span>
                </div>
                <div className="flex items-center">
                  {!readOnly && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteFromBasket(product.id)}
                      >
                        <Minus size={10} />
                      </Button>
                      <span className="w-[50px] px-2 text-center font-medium">
                        {product.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleAddToBasket(product.id)}
                      >
                        <Plus size={10} />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-full flex-col gap-4 bg-black bg-opacity-[0.03] p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">Subtotal</span>
                <span className="text-xs">{formatToPrice(subtotal)}€</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">Shipping & Handling</span>
                <span className="text-xs">2.00€</span>
              </div>
              <div className="w-full border-b border-black/5"></div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total</span>
                <span className="text-sm">{formatToPrice(subtotal + 2)}€</span>
              </div>
            </div>

            {!readOnly && (
              <Link href="/checkout" className={buttonVariants({})}>
                Proceed to checkout
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
