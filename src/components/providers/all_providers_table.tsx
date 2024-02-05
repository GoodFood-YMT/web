"use client";

import Link from "next/link";
import { useFetchAllProviders } from "~/hooks/providers/use_fetch_all_providers";
import { cn } from "~/utils/cn";
import { AiOutlineLoading } from "react-icons/ai";
import { Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export const AllProvidersTable = () => {
  const providers = useFetchAllProviders();

  if (providers.isError) {
    return <div>Une erreur est survenue</div>;
  }

  return (
    <>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {providers.data?.pages.map((page) =>
          page.data.map((providers) => (
            <TableRow>
              <TableCell>
                {providers.id}
              </TableCell>
              <TableCell>
                {providers.name}
              </TableCell>
              <TableCell>
                <Link href={`/admin/providers/${providers.id}`} key={providers.id}>
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
)};
