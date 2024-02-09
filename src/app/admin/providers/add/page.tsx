import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { AddProviderForm } from "~/components/providers/add_provider_form";

export default function Page() {
  return (
    <LoggedInManager>
      <h1 className="mb-4 text-2xl font-medium">Create a new provider</h1>
      <div className="flex h-full w-full flex-col">
        <AddProviderForm />
      </div>
    </LoggedInManager>
  );
}
