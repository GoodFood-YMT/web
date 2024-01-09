"use client";

import { DateTime } from "luxon";
import { useFetchMyOrders } from "~/hooks/ordering/use_fetch_my_orders";
import { cn } from "~/utils/cn";

export const Orders = () => {
  const orders = useFetchMyOrders(1, 3);

  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="flex h-full w-full flex-col">
        <div className="mb-2 flex justify-between">
          <h2 className="text-lg font-medium tracking-tight">Orders</h2>
        </div>
        <div className="flex flex-col gap-2">
          {orders.data?.data.map((order) => (
            <div
              key={order.id}
              className={cn(
                "flex cursor-pointer items-center justify-between border p-4 shadow-sm hover:bg-gray-50",
              )}
            >
              <h3 className="mb-1 text-base font-medium tracking-tight">
                <span className="text-xs italic">{order.id}</span>
                <br />
                <span className="text-base">
                  {DateTime.fromISO(order.created_at).toFormat("DDD")}
                </span>
              </h3>

              <h3 className="mb-1 text-base font-medium tracking-tight">
                <span className="text-xs italic">Status</span>
                <br />
                <span className="rounded-full bg-orange-400 px-2 py-1 text-sm capitalize text-white">
                  {order.status.toLocaleLowerCase()}
                </span>
              </h3>

              <h3 className="mb-1 text-base font-medium tracking-tight">
                <span className="text-xs italic">Total</span>
                <br />
                <span className="text-base">{order.total_price}€</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
