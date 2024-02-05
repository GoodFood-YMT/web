import { LoggedInDeliverer } from "~/components/auth/conditionnals/logged_in_deliverer";
import { DeliveryInformation } from "~/components/deliveries/delivery_information";

interface Props {
  params: {
    deliveryId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInDeliverer>
      <DeliveryInformation deliveryId={params.deliveryId} />
    </LoggedInDeliverer>
  );
}
