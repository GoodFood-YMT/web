"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useAddToBasket } from "~/hooks/basket/use_add_to_basket";
import { useFetchProductById } from "~/hooks/catalog/products/use_fetch_product_by_id";

interface Props {
  id: string;
}

export const OneProduct = ({ id }: Props) => {
  const product = useFetchProductById(id);
  const addToBasket = useAddToBasket();
  const [quantity, setQuantity] = useState(1);

  const onAddToBasket = () => {
    addToBasket.mutate({ id, quantity });
    toast.success("Product added to basket");
  };

  if (product.isLoading) {
    return <div>Loading...</div>;
  }

  if (product.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-product h-[500px] w-full rounded-md bg-cover bg-center"></div>
      <div className="flex flex-col gap-4">
        <span className="flex justify-between text-xl font-medium">
          <span>{product.data.label}</span> <span>{product.data.price}€</span>
        </span>
        <p>{product.data.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <Button disabled={product.data.quantity <= 0} onClick={onAddToBasket}>
            {product.data.quantity > 0 ? "Add to cart" : "Not in stock"}
          </Button>
        </div>
      </div>
    </div>
  );
};
