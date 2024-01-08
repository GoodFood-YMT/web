"use client";

import Link from "next/link";
import { Beef, Eye } from "lucide-react";
import { AiOutlineLoading } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useFetchAllProducts } from "~/hooks/catalog/products/use_fetch_all_products";
import { cn } from "~/utils/cn";

export const AllProductsTable = () => {
  const products = useFetchAllProducts();

  if (products.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[350px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Ingredients</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.data?.pages.map((page) =>
            page.data.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.label}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <Link href={`/admin/products/${product.id}/ingredients`}>
                    <Beef />
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/admin/products/${product.id}`}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            )),
          )}
        </TableBody>
      </Table>

      {products.isLoading && (
        <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
      )}

      {products.hasNextPage && (
        <button
          onClick={() => products.fetchNextPage()}
          disabled={products.isLoading}
        >
          Load more
        </button>
      )}
    </>
  );
};
