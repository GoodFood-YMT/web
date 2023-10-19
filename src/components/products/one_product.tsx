"use client";

import { Button } from "~/components/ui/button";
import { useFetchProductById } from "~/hooks/catalog/products/use_fetch_product_by_id";

interface Props {
  id: string;
}

export const OneProduct = ({ id }: Props) => {
  const product = useFetchProductById(id);

  if (product.isLoading) {
    return <div>Loading...</div>;
  }

  if (product.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="h-[500px] w-full rounded-md bg-[url('https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=2522&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
      <div className="flex flex-col gap-4">
        <span className="flex justify-between text-xl font-medium">
          <span>{product.data.label}</span> <span>{product.data.price}€</span>
        </span>
        <p>{product.data.description}</p>
        <Button disabled={product.data.quantity <= 0}>
          {product.data.quantity > 0 ? "Add to cart" : "Not in stock"}
        </Button>
      </div>
    </div>
  );
};
