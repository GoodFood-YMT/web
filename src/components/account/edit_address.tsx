"use client";

import { notFound } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";
import { EditAddressForm } from "~/components/account/edit_address_form";
import { useFetchAddressById } from "~/hooks/delivery/use_fetch_adress_by_id";
import { cn } from "~/utils/cn";

interface Props {
  id: string;
}

export const EditAddress = ({ id }: Props) => {
  const address = useFetchAddressById(id);

  if (address.isLoading) {
    return <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />;
  }

  if (address.isError) {
    notFound();
  }

  return (
    <EditAddressForm
      address={{ ...address.data, zipCode: address.data.zip_code }}
    />
  );
};
