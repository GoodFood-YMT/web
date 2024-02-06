import { AddProviderForm } from "~/components/providers/add_provider_form";
import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";

export default function Page() {
  return (
    <LoggedInManager>
      <div className="bg-white p-4 shadow-sm">
        <div className="flex h-full w-full flex-col">
          <AddProviderForm />
        </div>
      </div>
    </LoggedInManager>
  );
}