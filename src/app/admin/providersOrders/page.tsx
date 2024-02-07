import Link from "next/link";
import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { buttonVariants } from "~/components/ui/button";

export default function Page() {
  return (
    <LoggedInManager>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-medium">Providers Orders</h1>
      </div>
    </LoggedInManager>
  );
}
