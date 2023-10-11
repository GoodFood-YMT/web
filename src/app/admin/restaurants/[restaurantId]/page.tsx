import { LoggedInAdmin } from "~/components/auth/conditionnals/logged_in_admin";
import { EditRestaurant } from "~/components/restaurants/edit_restaurant";

interface Props {
  params: {
    restaurantId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInAdmin>
      <h1 className="mb-4 text-2xl font-medium">
        Restaurant #{params.restaurantId}
      </h1>
      <EditRestaurant id={params.restaurantId} />
    </LoggedInAdmin>
  );
}
