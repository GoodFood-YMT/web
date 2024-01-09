"use client";

import Link from "next/link";
import { TrashIcon } from "lucide-react";
import toast from "react-hot-toast";
import { buttonVariants } from "~/components/ui/button";
import { useDeleteAddress } from "~/hooks/delivery/addresses/use_delete_address";
import { useFetchAllAddresses } from "~/hooks/delivery/addresses/use_fetch_addresses";

export const Addresses = () => {
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
        <div>
          {addresses.data?.addresses.map((address) => (
            <div key={address.id} className="mb-2 flex justify-between">
              <Link href={`/account/addresses/edit/${address.id}`}>
                {address.name}
              </Link>
              <TrashIcon
                className="hover: cursor-pointer"
                onClick={() => handleDeleteAddress(address.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
