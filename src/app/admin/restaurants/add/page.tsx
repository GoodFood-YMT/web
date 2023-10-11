import { LoggedInAdmin } from "~/components/auth/conditionnals/logged_in_admin";
import { AddRestaurantForm } from "~/components/restaurants/add_restaurant_form";

export default function Page() {
  return (
    <LoggedInAdmin>
      <h1 className="mb-4 text-2xl font-medium">Add restaurant</h1>
      <AddRestaurantForm />
    </LoggedInAdmin>
  );
}
