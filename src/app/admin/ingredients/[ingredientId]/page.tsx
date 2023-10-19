import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { EditIngredient } from "~/components/ingredients/edit_ingredient";

interface Props {
  params: {
    ingredientId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInManager>
      <EditIngredient id={params.ingredientId} />
    </LoggedInManager>
  );
}
