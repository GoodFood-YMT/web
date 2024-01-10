import { LoggedInWithHighRole } from "~/components/auth/conditionnals/logged_in_with_high_role";
import { Deliveries } from "~/components/marketing/deliveries";
import { Kpi } from "~/components/marketing/kpi";
import { Orders } from "~/components/marketing/orders";
import { Turnover } from "~/components/marketing/turnover";
import { Users } from "~/components/marketing/users";

export default function Page() {
  return (
    <LoggedInWithHighRole>
      <h1 className="mb-4 text-2xl font-medium">Dashboard</h1>
      <Kpi />
      <Turnover />
      <Users />
      <Orders />
      <Deliveries />
    </LoggedInWithHighRole>
  );
}
