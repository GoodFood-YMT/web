import { AddAddress } from "~/components/account/addresses/add_address_form";
import { LoggedIn } from "~/components/auth/conditionnals/logged_in";

export default function Page() {
  return (
    <LoggedIn>
      <div className="bg-white p-4 shadow-sm">
        <div className="flex h-full w-full flex-col">
          <h2 className="mb-2 text-lg font-medium tracking-tight">
            Create a new address
          </h2>
          <AddAddress />
        </div>
      </div>
    </LoggedIn>
  );
}
