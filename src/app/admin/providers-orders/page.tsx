import Link from "next/link";
import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { AllProvidersOrdersTable } from "~/components/provider_orders/all_providers_orders_table";
import { buttonVariants } from "~/components/ui/button";

export default function Page() {
  return (
    <LoggedInManager>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-medium">Providers Orders</h1>
        <Link href="/admin/providers-orders/add" className={buttonVariants({})}>
          Create an Order
        </Link>
      </div>
      <AllProvidersOrdersTable />
    </LoggedInManager>
  );
}
