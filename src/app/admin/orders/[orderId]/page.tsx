import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { OrderInformationAdmin } from "~/components/orders/order_information_admin";

interface Props {
  params: {
    orderId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInManager>
      <OrderInformationAdmin id={params.orderId} />
    </LoggedInManager>
  );
}
