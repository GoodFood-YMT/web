import Image from "next/image";
import Link from "next/link";

const restaurants = [
  {
    name: "Dunkin Donuts",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1608455211475-3ac50b076f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80",
  },
  {
    name: "Burger King",
    location: "Washington",
    image:
      "https://images.unsplash.com/photo-1639781436072-897a64a9bc42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
  },
  {
    name: "Pizza Hut",
    location: "Milan",
    image:
      "https://images.unsplash.com/photo-1620174645265-05820da4ff20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80",
  },
  {
    name: "Sushi Place",
    location: "Paris",
    image:
      "https://images.unsplash.com/photo-1607247098731-5bf6416d2e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
];

export const FeaturedRestaurantsSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Featured Restaurants
          </h2>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {restaurants.map((restaurant, index) => (
            <li key={index}>
              <Link
                href="/restaurants/test"
                className="group block overflow-hidden"
              >
                <Image
                  src={restaurant.image}
                  alt="Restaurant"
                  height={300}
                  width={200}
                  className="h-[300px] w-full rounded-lg object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {restaurant.location}
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {restaurant.name}
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
