"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";
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
      {orders.data.data.map((order) => (
        <Link key={order.id} href={`/account/orders/${order.id}`}>
          <div className="bg-white p-4 shadow-sm">
            <div className="flex h-full w-full flex-col">
              <div className="mb-2 flex justify-between">
                <h2 className="text-lg font-medium tracking-tight">Orders</h2>
              </div>
              <div className="mb-2 flex justify-between">
                <span>{order.id}</span>
                <span>{order.status}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
