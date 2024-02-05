import { AddProviderForm } from "~/components/providers/add_provider_form";
import { LoggedInAdmin } from "~/components/auth/conditionnals/logged_in_admin";

export default function Page() {
  return (
    <LoggedInAdmin>
      <div className="bg-white p-4 shadow-sm">
        <div className="flex h-full w-full flex-col">
          <AddProviderForm />
        </div>
      </div>
    </LoggedInAdmin>
  );
}