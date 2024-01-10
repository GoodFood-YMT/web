"use client";

import { notFound, useRouter } from "next/navigation";
import { DateTime } from "luxon";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { Button } from "~/components/ui/button";
import { useCompleteDelivery } from "~/hooks/delivery/use_complete_delivery";
import { useFetchDeliveryById } from "~/hooks/delivery/use_fetch_delivery_by_id";
import { useTakeDelivery } from "~/hooks/delivery/use_take_delivery";
import { useAccountStore } from "~/stores/account_store";
import { cn } from "~/utils/cn";

interface Props {
  deliveryId: string;
}

export const DeliveryInformation = ({ deliveryId }: Props) => {
  const delivery = useFetchDeliveryById(deliveryId);
  const takeDelivery = useTakeDelivery();
  const completeDelivery = useCompleteDelivery();

  const handleTakeDelivery = () => {
    takeDelivery.mutate(deliveryId, {
      onSuccess: () => {
        toast.success("Delivery taked");
        delivery.refetch();
      },
      onError: () => {
        toast.error("An error occurred");
      },
    });
  };

  const handleCompleteDelivery = () => {
    completeDelivery.mutate(deliveryId, {
      onSuccess: () => {
        toast.success("Delivery completed");
        delivery.refetch();
      },
      onError: () => {
        toast.error("An error occurred");
      },
    });
  };

  const { account } = useAccountStore();

  if (delivery.isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
      </div>
    );
  }

  if (delivery.isError) {
    return notFound();
  }

  return (
    <>
      <div className="flex w-full flex-col items-start gap-4 md:flex-row">
        <div className="h-full w-full">
          <div className="flex h-full w-full flex-col">
            <h2 className="mb-4 flex items-center justify-between text-2xl font-medium tracking-tight">
              <span>
                Delivery <span className="text-sm">({delivery.data?.id})</span>
              </span>
              <span className="rounded-full bg-orange-400 px-2 py-1 text-xs capitalize text-white">
                {delivery.data?.status.toLocaleLowerCase()}
              </span>
            </h2>
            <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm">
              <span className="font-medium">Date</span>
              <span>
                {DateTime.fromISO(delivery.data!.created_at).toFormat(
                  "DDD HH:mm",
                )}
              </span>

              <span className="font-medium">Address</span>
              <span>
                {delivery.data?.address.street},{" "}
                {delivery.data?.address.zip_code} {delivery.data?.address.city},{" "}
                {delivery.data?.address.country}
              </span>
            </div>

            <div className="mt-4 flex justify-end">
              {delivery.data.deliverer_id === null &&
              delivery.data.status == "pending" ? (
                <Button onClick={handleTakeDelivery}>Take to delivery</Button>
              ) : null}

              {delivery.data.status === "delivering" &&
              account?.id === delivery.data.deliverer_id ? (
                <Button onClick={handleCompleteDelivery}>
                  Mark as delivered
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
