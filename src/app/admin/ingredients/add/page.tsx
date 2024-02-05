import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { AddIngredient } from "~/components/ingredients/add_ingredient_form";

export default function Page() {
  return (
    <LoggedInManager>
      <h1 className="mb-4 text-2xl font-medium">Add Ingredient</h1>
      <AddIngredient />
    </LoggedInManager>
  );
}
