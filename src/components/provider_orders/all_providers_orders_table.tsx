"use client";

import { useFetchAllProvidersOrders } from "~/hooks/ordering/use_fetch_all_providers_orders";
import Link from "next/link";
import { Eye } from "lucide-react";
import { AiOutlineLoading } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { cn } from "~/utils/cn";
import { useFetchAllProviders } from "~/hooks/providers/use_fetch_all_providers";

export const AllProvidersOrdersTable = () => {
  const providersOrders = useFetchAllProvidersOrders();
  const providers = useFetchAllProviders();

  return (
    <>
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>Provider</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Prix total</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            providersOrders.data?.data.map((providerOrder) =>(
              <TableRow key={providerOrder.id}>
                <TableCell>
                  {providers.data?.pages.map((page) =>
                    page.data.find((provider) => provider.id === providerOrder.provider_id)?.name
                  )}
                </TableCell>
                <TableCell>{providerOrder.status}</TableCell>
                <TableCell>{providerOrder.total_price}</TableCell>
                <TableCell>
                  <Link href={`/admin/providersOrders/${providerOrder.id}`}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>

      {providersOrders.isLoading && (
        <div className="flex items-center justify-center py-8">
          <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
        </div>
      )}
    </>
  );
};
