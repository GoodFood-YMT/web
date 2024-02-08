import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { AddIngredientProductForm } from "~/components/products/ingredients/add_product_ingredient_form";

interface Props {
  params: {
    productId: string;
  };
}
export default function Page({ params }: Props) {
  return (
    <LoggedInManager>
      <h1 className="mb-4 text-2xl font-medium">Add ingredient</h1>
      <AddIngredientProductForm productId={params.productId} />
    </LoggedInManager>
  );
}
