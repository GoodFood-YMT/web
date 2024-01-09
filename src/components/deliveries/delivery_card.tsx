"use client";

import { DateTime } from "luxon";
import { Button } from "~/components/ui/button";
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
  handleToTake: (id: string) => void;
}

export const DeliveryCard = ({ delivery, handleToTake }: Props) => {
  // Impossible pour le moment,
  // Il faut soit créer une route pour afficher l'addresse
  // par Id (celle des autres users comprises);
  // Soit retourner les informations de l'adresse dans la delivery
  // const address = useFetchAddressById(delivery.address_id);

  return (
    <div
      key={delivery.id}
      className={cn(
        "flex cursor-pointer items-center justify-between border p-4 shadow-sm hover:bg-gray-50",
      )}
    >
      <h3 className="mb-1 text-base font-medium tracking-tight">
        <span className="text-sm">{delivery.id}</span>
        <br />
        <span className="text-base">
          {DateTime.fromISO(delivery.created_at).toFormat("DDD")}
        </span>
      </h3>

      <h3 className="mb-1 text-base font-medium tracking-tight">
        <span className="text-xs italic">Status</span>
        <br />
        <span className="rounded-full bg-orange-400 px-2 py-1 text-sm capitalize text-white">
          {delivery.status.toLocaleLowerCase()}
        </span>
      </h3>

      <h3 className="mb-1 text-base font-medium tracking-tight">
        <Button onClick={() => handleToTake(delivery.id)}>Take</Button>
      </h3>
    </div>
  );
};
