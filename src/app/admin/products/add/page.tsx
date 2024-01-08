import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { AddProductForm } from "~/components/products/add_product_form";

export default function Page() {
  return (
    <LoggedInManager>
      <h1 className="mb-4 text-2xl font-medium">Add Product</h1>
      <AddProductForm />
    </LoggedInManager>
  );
}
