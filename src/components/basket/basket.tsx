"use client";

import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useClearBasket } from "~/hooks/basket/use_clear_basket";
import { useFetchBasket } from "~/hooks/basket/use_fetch_basket";

export const Basket = () => {
  const basket = useFetchBasket();
  const clearBasket = useClearBasket();

  if (basket.isLoading) {
    return <div>Loading...</div>;
  }

  if (basket.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className="flex h-full w-full justify-end">
        <Button
          onClick={() => {
            clearBasket.mutate();
            basket.refetch();
          }}
        >
          Clear basket
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Row Total</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {basket.data?.items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.label}</TableCell>
              <TableCell>{item.price}€</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.price * item.quantity}€</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
