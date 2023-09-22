import { OneRestaurant } from "~/components/restaurants/one_restaurant";

interface Props {
  params: {
    restaurantId: string;
  };
}

export default function Page({ params }: Props) {
  return <OneRestaurant id={params.restaurantId} />;
}
