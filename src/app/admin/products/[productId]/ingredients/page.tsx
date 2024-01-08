import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { AllProductIngredientsTable } from "~/components/products/ingredients/all_product_ingredients_table";

interface Props {
  params: {
    productId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInManager>
      <AllProductIngredientsTable productId={params.productId} />
    </LoggedInManager>
  );
}
