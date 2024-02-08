import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { OneProviderOrder } from "~/components/provider_orders/one_provider_order";

interface Props {
    params: {
        providerOrderId: string;
    };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInManager>
      <OneProviderOrder  id={params.providerOrderId} />
    </LoggedInManager>
  );
}
