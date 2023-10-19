import { LoggedInAdmin } from "~/components/auth/conditionnals/logged_in_admin";
import { EditCategory } from "~/components/categories/edit_category";

interface Props {
  params: {
    categoryId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInAdmin>
      <h1 className="mb-4 text-2xl font-medium">
        Category #{params.categoryId}
      </h1>
      <EditCategory id={params.categoryId} />
    </LoggedInAdmin>
  );
}
