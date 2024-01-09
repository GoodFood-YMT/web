import { AllOrders } from "~/components/account/orders/all_orders";
import { LoggedIn } from "~/components/auth/conditionnals/logged_in";

export default function Page() {
  return (
    <LoggedIn>
      <AllOrders />
    </LoggedIn>
  );
}
