import { Addresses } from "~/components/account/addresses";
import { ProfileInformation } from "~/components/account/profile_information";
import { LoggedIn } from "~/components/auth/conditionnals/logged_in";

export default function Page() {
  return (
    <LoggedIn>
      <div className="flex flex-col gap-4">
        <ProfileInformation />
        <Addresses />
      </div>
    </LoggedIn>
  );
}
