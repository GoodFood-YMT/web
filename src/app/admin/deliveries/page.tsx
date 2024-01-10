import { LoggedInDeliverer } from "~/components/auth/conditionnals/logged_in_deliverer";
import { AllDeliveries } from "~/components/deliveries/all_deliveries";

export default function Page() {
  return (
    <LoggedInDeliverer>
      <AllDeliveries />
    </LoggedInDeliverer>
  );
}
