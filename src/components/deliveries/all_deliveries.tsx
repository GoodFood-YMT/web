"use client";

import { notFound } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";
import { DeliveryCard } from "~/components/deliveries/delivery_card";
import { Button } from "~/components/ui/button";
import { useFetchAllDeliveries } from "~/hooks/delivery/use_fetch_all_deliveries";
import { cn } from "~/utils/cn";

export const AllDeliveries = () => {
  const deliveries = useFetchAllDeliveries();

  if (deliveries.isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
      </div>
    );
  }

  if (deliveries.isError) {
    notFound();
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="mb-2 flex justify-between">
        <h1 className="mb-4 text-2xl font-medium">Deliveries</h1>
      </div>
      <div className="flex flex-col gap-2">
        {deliveries.data.pages.map((page) =>
          page.data.map((delivery) => (
            <DeliveryCard key={delivery.id} delivery={delivery} />
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
  );
};
