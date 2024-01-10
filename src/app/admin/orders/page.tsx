import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { AllOrdersTable } from "~/components/orders/all_orders_table";

export default function Page() {
  return (
    <LoggedInManager>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-medium">Orders</h1>
      </div>
      <AllOrdersTable />
    </LoggedInManager>
  );
}
