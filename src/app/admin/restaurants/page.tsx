import Link from "next/link";
import { LoggedInAdmin } from "~/components/auth/conditionnals/logged_in_admin";
import { AllRestaurantsTable } from "~/components/restaurants/all_restaurants_table";
import { buttonVariants } from "~/components/ui/button";

export default function Page() {
  return (
    <LoggedInAdmin>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-medium">Restaurants</h1>
        <Link href="/admin/restaurants/add" className={buttonVariants({})}>
          Add
        </Link>
      </div>
      <AllRestaurantsTable />
    </LoggedInAdmin>
  );
}
