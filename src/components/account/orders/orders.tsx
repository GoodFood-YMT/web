"use client";

import Link from "next/link";
import { OrderCard } from "~/components/account/orders/order_card";
import { buttonVariants } from "~/components/ui/button";
import { useFetchMyOrders } from "~/hooks/ordering/use_fetch_my_orders";

export const Orders = () => {
  const orders = useFetchMyOrders(1, 3);

  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="flex h-full w-full flex-col">
        <div className="mb-2 flex justify-between">
          <h2 className="text-lg font-medium tracking-tight">Last Orders</h2>
        </div>
        <div className="flex flex-col gap-2">
          {orders.data?.pages.map((page) =>
            page.data.map((order) => (
              <OrderCard key={order.id} order={order} />
            )),
          )}
        </div>

        {orders.data?.pages[0].meta.total === 0 ? (
          <div className="border p-4 shadow-sm">
            <h3 className="mb-1 flex items-center justify-between text-base font-medium tracking-tight">
              No orders
            </h3>
          </div>
        ) : (
          <div className="mt-4 flex items-center justify-center">
            <Link href="/account/orders" className={buttonVariants({})}>
              View all orders
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
