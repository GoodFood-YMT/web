"use client";

import { notFound } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";
import { DeliveryCard } from "~/components/deliveries/delivery_card";
import { Button } from "~/components/ui/button";
import { useFetchAllDeliveries } from "~/hooks/delivery/use_fetch_all_deliveries";
import { useTakeDelivery } from "~/hooks/delivery/use_take_delivery";
import { cn } from "~/utils/cn";

export const AllDeliveries = () => {
  const deliveries = useFetchAllDeliveries();
  const takeDelivery = useTakeDelivery();
  const handleTakeDelivery = (id: string) => {
    takeDelivery.mutate(id);
    deliveries.refetch();
  };

  if (deliveries.isLoading) {
    return <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />;
  }

  if (deliveries.isError) {
    notFound();
  }

  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="flex h-full w-full flex-col">
        <div className="mb-2 flex justify-between">
          <h2 className="text-lg font-medium tracking-tight">My Deliveries</h2>
        </div>
        <div className="flex flex-col gap-2">
          {deliveries.data.pages.map((page) =>
            page.data.map((delivery) => (
              <DeliveryCard
                key={delivery.id}
                delivery={delivery}
                handleToTake={handleTakeDelivery}
              />
            )),
          )}
          {deliveries.hasNextPage && (
            <div className="mt-4 flex justify-center">
              <Button
                onClick={() => deliveries.fetchNextPage()}
                disabled={deliveries.isLoading}
              >
                Load more
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
