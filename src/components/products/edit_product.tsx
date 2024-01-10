"use client";

import { notFound } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";
import { useFetchProductById } from "~/hooks/catalog/products/use_fetch_product_by_id";
import { cn } from "~/utils/cn";
import { EditProductForm } from "./edit_product_form";

interface Props {
  id: string;
}

export const EditProduct = ({ id }: Props) => {
  const product = useFetchProductById(id);

  if (product.isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
      </div>
    );
  }

  if (product.isError) {
    notFound();
  }

  return <EditProductForm product={product.data} />;
};
