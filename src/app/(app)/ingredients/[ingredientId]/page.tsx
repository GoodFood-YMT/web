import { OneIngredient } from "~/components/ingredients/one_ingredient";

interface Props {
  params: {
    ingredientId: string;
  };
}

export default function Page({ params }: Props) {
  return <OneIngredient id={params.ingredientId} />;
}
