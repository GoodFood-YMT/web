"use client";

import { notFound } from "next/navigation";
import { EditProviderForm } from "~/components/providers/edit_provider_form";
import { useFetchProviderById } from "~/hooks/providers/use_fetch_providers_by_id";

interface Props {
  id: string;
}

export const EditProvider = ({ id }: Props) => {
  const provider = useFetchProviderById(id);

  if (provider.isLoading) {
    return <div>Loading...</div>;
  }

  if (provider.isError) {
    notFound();
  }

  return <EditProviderForm provider={provider.data} />;
};
