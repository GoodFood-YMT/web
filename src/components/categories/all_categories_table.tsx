"use client";

import Link from "next/link";
import { Eye } from "lucide-react";
import { AiOutlineLoading } from "react-icons/ai";
import { useFetchAllCategories } from "~/hooks/catalog/categories/use_fetch_all_categories";
import { cn } from "~/utils/cn";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export const AllCategoriesTable = () => {
  const categories = useFetchAllCategories();

  if (categories.isError) {
    return <div>Something wen wrong</div>;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[350px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.data?.pages.map((page) =>
            page.data.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium">{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>
                  <Link href={`/admin/categories/${category.id}`}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            )),
          )}
        </TableBody>
      </Table>

      {categories.isLoading && (
        <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
      )}

      {categories.hasNextPage && (
        <button
          onClick={() => categories.fetchNextPage()}
          disabled={categories.isLoading}
        >
          Load more
        </button>
      )}
    </>
  );
};