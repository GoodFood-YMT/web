"use client";

import Link from "next/link";
import { TrashIcon } from "lucide-react";
import { useFetchMyOrders } from "~/hooks/ordering/use_fetch_my_orders";

export const Orders = () => {
  const orders = useFetchMyOrders(1, 3);

  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="flex h-full w-full flex-col">
        <div className="mb-2 flex justify-between">
          <h2 className="text-lg font-medium tracking-tight">Orders</h2>
        </div>
        <div>
          {orders.data?.data.map((order) => (
            <div key={order.id} className="mb-2 flex justify-between">
              <Link href={`/account/orders/${order.id}`}>{order.id}</Link>
              <span>{order.status}</span>
              <TrashIcon
                className="hover: cursor-pointer"
                // onClick={() => handleDeleteAddress(address.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
