import { OneCategory } from "~/components/categories/one_category";

interface Props {
  params: {
    categoryId: string;
  };
}

export default function Page({ params }: Props) {
  return <OneCategory id={params.categoryId} />;
}
