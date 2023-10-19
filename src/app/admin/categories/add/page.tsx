import { LoggedInAdmin } from "~/components/auth/conditionnals/logged_in_admin";
import { AddCategory } from "~/components/categories/add_category_form";

export default function Page() {
  return (
    <LoggedInAdmin>
      <h1 className="mb-4 text-2xl font-medium">Add category</h1>
      <AddCategory />
    </LoggedInAdmin>
  );
}
