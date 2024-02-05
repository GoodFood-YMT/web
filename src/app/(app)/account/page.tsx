import { Addresses } from "~/components/account/addresses/addresses";
import { ProfileInformation } from "~/components/account/addresses/profile_information";
import { Orders } from "~/components/account/orders/orders";
import { LoggedIn } from "~/components/auth/conditionnals/logged_in";

export default function Page() {
  return (
    <LoggedIn>
      <div className="flex flex-col gap-4">
        <ProfileInformation />
        <Addresses />
        <Orders />
      </div>
    </LoggedIn>
  );
}
