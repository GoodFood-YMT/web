"use client";

import { useRouter } from "next/navigation";
import { DateTime } from "luxon";
import { cn } from "~/utils/cn";

interface Props {
  delivery: {
    id: string;
    status: string;
    address_id: string;
    delivery_id: string;
    order_id: string;
    restaurant_id: string;
    created_at: string;
    updated_at: string;
  };
}

export const DeliveryCard = ({ delivery }: Props) => {
  const router = useRouter();

  return (
    <div
      key={delivery.id}
      className={cn(
        "flex cursor-pointer items-center justify-between border p-4 shadow-sm hover:bg-gray-50",
      )}
      onClick={() => router.push(`deliveries/${delivery.id}`)}
    >
      <h3 className="mb-1 text-base font-medium tracking-tight">
        <span className="text-sm">{delivery.id}</span>
        <br />
        <span className="text-base">
          {DateTime.fromISO(delivery.created_at).toFormat("DDD HH:mm")}
        </span>
      </h3>

      <h3 className="mb-1 text-base font-medium tracking-tight">
        <span className="text-xs italic">Status</span>
        <br />
        <span className="rounded-full bg-orange-400 px-2 py-1 text-sm capitalize text-white">
          {delivery.status.toLocaleLowerCase()}
        </span>
      </h3>
    </div>
  );
};
