"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { TrashIcon } from "lucide-react";
import toast from "react-hot-toast";
import { Button, buttonVariants } from "~/components/ui/button";
import { useDeleteAddress } from "~/hooks/delivery/addresses/use_delete_address";
import { useFetchAllAddresses } from "~/hooks/delivery/addresses/use_fetch_addresses";
import { cn } from "~/utils/cn";

export const Addresses = () => {
  const router = useRouter();
  const addresses = useFetchAllAddresses();

  const deleteAddress = useDeleteAddress();

  const handleDeleteAddress = (id: string) => {
    deleteAddress.mutate(id, {
      onSuccess: () => {
        toast.success("Address deleted");
        addresses.refetch();
      },
      onError: () => {
        toast.error("An error occurred");
      },
    });
  };

  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="flex h-full w-full flex-col">
        <div className="mb-2 flex justify-between">
          <h2 className="text-lg font-medium tracking-tight">Addresses</h2>

          <Link
            href="/account/addresses/add"
            className={buttonVariants({ variant: "default", size: "xs" })}
          >
            Add
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          {addresses.data?.addresses.map((address) => (
            <div
              key={address.id}
              className={cn(
                "flex cursor-pointer items-center justify-between border p-4 shadow-sm hover:bg-gray-50",
              )}
              onClick={() =>
                router.push(`/account/addresses/edit/${address.id}`)
              }
            >
              <div>
                <h3 className="mb-1 text-base font-medium tracking-tight">
                  {address.name}
                </h3>
                <p className="text-sm">{address.street}</p>
                <p className="text-sm">
                  {address.zip_code} {address.city}, {address.country}
                </p>
              </div>

              <div>
                <Button
                  size="xs"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteAddress(address.id);
                  }}
                >
                  <TrashIcon size={16} />
                </Button>
              </div>
            </div>
          ))}

          {addresses.data && addresses.data.addresses.length <= 0 ? (
            <div className="border p-4 shadow-sm">
              <h3 className="mb-1 flex items-center justify-between text-base font-medium tracking-tight">
                No addresses
              </h3>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
