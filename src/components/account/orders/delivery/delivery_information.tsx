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
  const address = useFetchAddressById(delivery.data?.address_id);

  if (delivery.isLoading) {
    return <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />;
  }

  if (delivery.isError) {
    notFound();
  }

  //   const address = useFetchAddressById(delivery.data.id);

  return (
    <div className="h-full w-full bg-white p-4 shadow-sm">
      <div className="flex h-full w-full flex-col">
        <h2 className="mb-2 flex items-center justify-between text-lg font-medium tracking-tight">
          <span>
            Delivery <span className="text-sm">({delivery.data.id})</span>
          </span>
          <span className="rounded-full bg-orange-400 px-2 py-1 text-xs capitalize text-white">
            {delivery.data.status}
          </span>
        </h2>
        <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm">
          {address.data && (
            <>
              <span className="font-medium">Address</span>
              <span>
                {address.data.street}, {address.data.zip_code}{" "}
                {address.data.city}, {address.data.country}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
