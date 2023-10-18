import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { EditProduct } from "~/components/products/edit_product";

interface Props {
  params: {
    productId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInManager>
      <EditProduct id={params.productId} />
    </LoggedInManager>
  );
}
