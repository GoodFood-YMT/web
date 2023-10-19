import { AllRestaurants } from "~/components/restaurants/all_restaurants";

export default function Page() {
  return (
    <>
      <h1 className="mb-6 text-xl font-medium">Restaurants</h1>

      <AllRestaurants />
    </>
  );
}
