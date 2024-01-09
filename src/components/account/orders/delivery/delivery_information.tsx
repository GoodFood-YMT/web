"use client";

import { notFound } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";
import { useFetchAddressById } from "~/hooks/delivery/addresses/use_fetch_adress_by_id";
import { useFetchDeliveryById } from "~/hooks/delivery/use_fetch_delivery_by_id";
import { cn } from "~/utils/cn";

interface Props {
  id: string;
}

export const DeliveryInformation = ({ id }: Props) => {
  const delivery = useFetchDeliveryById(id);

  if (delivery.isLoading) {
    return <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />;
  }

  if (delivery.isError) {
    notFound();
  }

  //   const address = useFetchAddressById(delivery.data.id);

  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="flex h-full w-full flex-col">
        <h2 className="mb-2 text-lg font-medium tracking-tight">
          Delivery - {delivery.data.id}
        </h2>
        <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1 text-sm">
          <span className="font-medium">Address</span>
          <span>
            {delivery.data.address_id}
            {/* {address.data?.street}, {address.data?.city} */}
          </span>

          <span className="font-medium">Status</span>
          <span className="capitalize">{delivery.data.status}</span>
        </div>
      </div>
    </div>
  );
};
