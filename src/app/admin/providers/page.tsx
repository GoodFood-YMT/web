import Link from "next/link";
import { AllProvidersTable } from "~/components/providers/all_providers_table";
import { LoggedInAdmin } from "~/components/auth/conditionnals/logged_in_admin";
import { buttonVariants } from "~/components/ui/button";


export default function Page() {
  return (
    <LoggedInAdmin>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-medium">Providers</h1>
        <Link href="/admin/providers/add" className={buttonVariants({})}>
          Add
        </Link>
      </div>
      <AllProvidersTable/>
    </LoggedInAdmin>
  );
}