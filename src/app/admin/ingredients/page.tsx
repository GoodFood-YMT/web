import Link from "next/link";
import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { AllIngredients } from "~/components/ingredients/all_ingredients";
import { AllIngredientsTable } from "~/components/ingredients/all_ingredients_table";
import { buttonVariants } from "~/components/ui/button";

export default function Page() {
  return (
    <LoggedInManager>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-medium">Ingredients</h1>
        <Link href="/admin/ingredients/add" className={buttonVariants({})}>
          Add
        </Link>
      </div>
      <AllIngredientsTable />
    </LoggedInManager>
  );
}
