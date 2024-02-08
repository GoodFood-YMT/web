"use client";

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
import { useFetchAllProvidersOrders } from "~/hooks/ordering/use_fetch_all_providers_orders";
import { useFetchAllProviders } from "~/hooks/providers/use_fetch_all_providers";
import { cn } from "~/utils/cn";

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
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {providersOrders.data?.pages.map((page) =>
            page.data.map((providerOrder) => (
              <TableRow key={providerOrder.id}>
                <TableCell>
                  {providers.data?.pages.map(
                    (page) =>
                      page.data.find(
                        (provider) => provider.id === providerOrder.provider_id,
                      )?.name,
                  )}
                </TableCell>
                <TableCell className="capitalize">
                  {providerOrder.status}
                </TableCell>
                <TableCell>
                  <Link href={`/admin/providersOrders/${providerOrder.id}`}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            )),
          )}

          {providersOrders.data?.pages[0].data.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No providers orders found
              </TableCell>
            </TableRow>
          )}
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
