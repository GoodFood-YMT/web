import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { EditProductIngredient } from "~/components/products/ingredients/edit_product_ingredient";

interface Props {
  params: {
    productId: string;
    ingredientId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInManager>
      <EditProductIngredient
        ingredientId={params.ingredientId}
        productId={params.productId}
      />
    </LoggedInManager>
  );
}
