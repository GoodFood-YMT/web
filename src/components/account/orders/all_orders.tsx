"use client";

import { notFound } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";
import { OrderCard } from "~/components/account/orders/order_card";
import { Button } from "~/components/ui/button";
import { useFetchMyOrders } from "~/hooks/ordering/use_fetch_my_orders";
import { cn } from "~/utils/cn";

export const AllOrders = () => {
  const orders = useFetchMyOrders();

  if (orders.isLoading) {
    return <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />;
  }

  if (orders.isError) {
    notFound();
  }

  return (
    <>
      <div className="bg-white p-4 shadow-sm">
        <div className="flex h-full w-full flex-col">
          <div className="mb-2 flex justify-between">
            <h2 className="text-lg font-medium tracking-tight">My Orders</h2>
          </div>
          <div className="flex flex-col gap-2">
            {orders.data.pages.map((page) =>
              page.data.map((order) => (
                <OrderCard key={order.id} order={order} />
              )),
            )}

            {orders.hasNextPage && (
              <div className="mt-4 flex justify-center">
                <Button
                  onClick={() => orders.fetchNextPage()}
                  disabled={orders.isLoading}
                >
                  Load more
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
