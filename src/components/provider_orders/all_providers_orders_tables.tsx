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

export const AllProvidersOrdersTable = () => {
  const providersOrders = useFetchAllProvidersOrders();

  if (providersOrders.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {providersOrders.data?.pages.map((page) =>
            page.data.map((provider) => (
              <TableRow key={provider.id}>
                <TableCell>{provider.name}</TableCell>
                <TableCell>
                  <Link href={`/admin/providersOrders/${provider.id}`}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            )),
          )}
        </TableBody>
      </Table>

      {providersOrders.isLoading && (
        <div className="flex items-center justify-center py-8">
          <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
        </div>
      )}

      {providersOrders.hasNextPage && (
        <button
          onClick={() => providersOrders.fetchNextPage()}
          disabled={providersOrders.isLoading}
        >
          Load more
        </button>
      )}
    </>
  );
};
