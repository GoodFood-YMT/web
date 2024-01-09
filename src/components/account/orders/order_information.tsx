"use client";

import { notFound } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";
import { DeliveryInformation } from "~/components/account/orders/delivery/delivery_information";
import { useFetchOrderById } from "~/hooks/ordering/use_fetch_order_by_id";
import { cn } from "~/utils/cn";

interface Props {
  id: string;
}

export const OrderInformation = ({ id }: Props) => {
  const order = useFetchOrderById(id);

  if (order.isLoading) {
    return <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />;
  }

  if (order.isError) {
    notFound();
  }

  return (
    <>
      {/* Order Informations */}
      <div className="bg-white p-4 shadow-sm">
        <div className="flex h-full w-full flex-col">
          <h2 className="mb-2 text-lg font-medium tracking-tight">
            Order - {order.data.id}
          </h2>
          <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1 text-sm">
            <span className="font-medium">Created At</span>
            <span>{order.data.created_at}</span>

            <span className="font-medium">Status</span>
            <span className="capitalize">{order.data.status}</span>

            <h3 className="mb-2 text-base font-medium tracking-tight">
              Products
            </h3>
            <div className="ml-2">
              {order.data.products.map((product) => (
                <div key={product.product_id}>
                  <span className="font-medium">{product.label}</span>
                </div>
              ))}
            </div>

            <span className="font-medium">Total Price</span>
            <span>{order.data.total_price}</span>
          </div>
        </div>
      </div>
      {/* Delivery Details */}
      <DeliveryInformation id={order.data.delivery_id} />
    </>
  );
};
