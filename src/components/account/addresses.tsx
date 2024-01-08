"use client";

import Link from "next/link";
import { Button, buttonVariants } from "~/components/ui/button";
import { useFetchAllAddresses } from "~/hooks/delivery/use_fetch_addresses";

export const Addresses = () => {
  const addresses = useFetchAllAddresses();
  console.log(addresses);

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
            <div key={address.id}>{address.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
