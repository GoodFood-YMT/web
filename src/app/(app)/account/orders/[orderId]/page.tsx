import { OrderInformation } from "~/components/account/orders/order_information";
import { LoggedIn } from "~/components/auth/conditionnals/logged_in";

interface Props {
  params: {
    orderId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedIn>
      <OrderInformation id={params.orderId} />
    </LoggedIn>
  );
}
