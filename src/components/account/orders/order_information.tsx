"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { DateTime } from "luxon";
import { AiOutlineLoading } from "react-icons/ai";
import { DeliveryInformation } from "~/components/account/orders/delivery/delivery_information";
import { useFetchOrderById } from "~/hooks/ordering/use_fetch_order_by_id";
import { cn } from "~/utils/cn";
import { formatToPrice } from "~/utils/format_to_price";
import { getRestaurantImage } from "~/utils/get_restaurant_image";

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
      <div className="flex w-full flex-col items-start gap-4 md:flex-row">
        <div className="h-full w-full bg-white p-4 shadow-sm">
          <div className="flex h-full w-full flex-col">
            <h2 className="mb-2 flex items-center justify-between text-lg font-medium tracking-tight">
              <span>
                Order <span className="text-sm">({order.data.id})</span>
              </span>
              <span className="rounded-full bg-orange-400 px-2 py-1 text-xs capitalize text-white">
                {order.data.status.toLocaleLowerCase()}
              </span>
            </h2>
            <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm">
              <span className="font-medium">Date</span>
              <span>
                {DateTime.fromISO(order.data.created_at).toFormat("DDD")}
              </span>

              <span className="font-medium">Total Paid</span>
              <span>{order.data.total_price}€</span>
            </div>
          </div>
        </div>
        <DeliveryInformation id={order.data.delivery_id} />
      </div>

      <div className="mt-4 w-full bg-white p-4 shadow-sm">
        <div className="flex w-full flex-col">
          <h2 className="mb-2 flex items-center justify-between text-lg font-medium tracking-tight">
            <span>Products</span>
          </h2>

          {order.data.products.map((product) => (
            <div
              key={product.product_id}
              className="grid grid-cols-[80px,3fr,2fr] gap-2"
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
                  {product.quantity}x {product.label}
                </span>
                <span className="text-xs font-medium opacity-60">
                  {formatToPrice(parseInt(product.price) * product.quantity)} €
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
