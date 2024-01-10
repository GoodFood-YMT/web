import { AllProvidersHome } from "~/components/providers/all_providers_home";
import { LoggedIn } from "~/components/auth/conditionnals/logged_in";


export default function Page() {
  return (
    <LoggedIn>
      <div className="bg-white p-4 shadow-sm">
        <div className="flex h-full w-full flex-col">
          <AllProvidersHome/>
        </div>
      </div>
    </LoggedIn>
  );
}