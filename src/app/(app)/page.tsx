import { AllRestaurants } from "~/components/restaurants/all_restaurants";

import { AllRestaurantsHome } from "~/components/restaurants/all_restaurants_home";

export default function Page() {
  return (
    <>
      <h1 className="mb-6 text-xl font-medium">Restaurants</h1>

      <AllRestaurants />
    </>
  );
}
