import Link from "next/link";
import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { AllProductIngredientsTable } from "~/components/products/ingredients/all_product_ingredients_table";
import { buttonVariants } from "~/components/ui/button";

interface Props {
  params: {
    productId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInManager>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-medium">
          Product #{params.productId} -&gt; Ingredients
        </h1>
        <Link
          href={`/admin/products/${params.productId}/ingredients/add`}
          className={buttonVariants({})}
        >
          Add
        </Link>
      </div>
      <AllProductIngredientsTable productId={params.productId} />
    </LoggedInManager>
  );
}
