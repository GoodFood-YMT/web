"use client";

import { useFetchProviderOrderById } from "~/hooks/ordering/use_fetch_provider_order_by_id";
import { AiOutlineLoading } from "react-icons/ai";
import { AddIngredientProviderOrders } from "~/components/provider_orders/add_ingredient_provider_orders";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useFetchProviderById } from "~/hooks/providers/use_fetch_providers_by_id";
import { cn } from "~/utils/cn";

interface Props {
    id: string;
}

export const OneProviderOrder = ({ id }: Props) => {
    const providerOrder = useFetchProviderOrderById(id);
    const provider = useFetchProviderById(providerOrder.data?.providerId ?? "");
  
    if (provider.isLoading || providerOrder.isLoading) {
      <div className="flex items-center justify-center py-4">
        <AiOutlineLoading className={cn("h-6 w-6 animate-spin")} />
      </div>;
    }
  
    return (
      <>
        <h1 className="mb-4 text-2xl font-medium">
          Provider {'"'}
          {provider.data?.name}
          {'"'}
        </h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ingredient</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {providerOrder.data?.ingredients.map((ingredient) => (
              <TableRow key={ingredient.ingredientId}>
                <TableCell>{ingredient.name}</TableCell>
                <TableCell>{providerOrder.data?.ingredients.map((ingredient) =>
                    ingredient.quantity
                  )}
                  </TableCell>
              </TableRow>
            ))}
  
            {providerOrder.data?.ingredients.length === 0 && (
              <TableRow>
                <TableCell colSpan={2}>No ingredients</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
  
        <AddIngredientProviderOrders providerOrderId={id} />
      </>
    );
};
