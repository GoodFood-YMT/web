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
import { useFetchAllProviders } from "~/hooks/providers/use_fetch_all_providers";
import { cn } from "~/utils/cn";

export const AllProvidersTable = () => {
  const providers = useFetchAllProviders();

  if (providers.isError) {
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
          {providers.data?.pages.map((page) =>
            page.data.map((provider) => (
              <TableRow key={provider.id}>
                <TableCell>{provider.name}</TableCell>
                <TableCell>
                  <Link href={`/admin/providers/${provider.id}`}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            )),
          )}
        </TableBody>
      </Table>

      {providers.isLoading && (
        <div className="flex items-center justify-center py-8">
          <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
        </div>
      )}

      {providers.hasNextPage && (
        <button
          onClick={() => providers.fetchNextPage()}
          disabled={providers.isLoading}
        >
          Load more
        </button>
      )}
    </>
  );
};
