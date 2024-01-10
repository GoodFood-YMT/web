"use client";

import Link from "next/link";
import { Beef, Eye } from "lucide-react";
import { DateTime } from "luxon";
import { AiOutlineLoading } from "react-icons/ai";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useFetchManagerOrders } from "~/hooks/ordering/use_fetch_manager_orders";
import { cn } from "~/utils/cn";

export const AllOrdersTable = () => {
  const orders = useFetchManagerOrders();

  if (orders.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.data?.pages.map((page) =>
            page.data.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>
                  {DateTime.fromISO(order.created_at).toFormat("DDD HH:mm")}
                </TableCell>
                <TableCell>
                  <span className="rounded-full bg-orange-400 px-2 py-1 text-sm capitalize text-white">
                    {order.status.toLocaleLowerCase()}
                  </span>
                </TableCell>
                <TableCell>{order.total_price}€</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Link href={`/admin/orders/${order.id}`}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            )),
          )}
        </TableBody>
      </Table>

      {orders.isLoading && (
        <div className="flex items-center justify-center py-8">
          <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
        </div>
      )}

      {orders.hasNextPage && (
        <div className="mt-4 flex justify-center">
          <Button
            onClick={() => orders.fetchNextPage()}
            disabled={orders.isLoading}
          >
            Load more
          </Button>
        </div>
      )}
    </>
  );
};
