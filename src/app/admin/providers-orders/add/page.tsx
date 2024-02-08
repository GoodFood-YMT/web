import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { AddProvidersOrders } from "~/components/provider_orders/add_providers_orders";

export default function Page() {
  return (
    <LoggedInManager>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-medium">Create a new order</h1>
      </div>
      <AddProvidersOrders />
    </LoggedInManager>
  );
}
