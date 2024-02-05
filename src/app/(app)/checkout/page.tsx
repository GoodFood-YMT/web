import { LoggedIn } from "~/components/auth/conditionnals/logged_in";
import { Checkout } from "~/components/basket/checkout";

export default function Page() {
  return (
    <LoggedIn>
      <Checkout />
    </LoggedIn>
  );
}
