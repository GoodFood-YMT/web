import { LoggedInAdmin } from "~/components/auth/conditionnals/logged_in_admin";
import { EditUser } from "~/components/auth/edit_user";

interface Props {
  params: {
    userId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInAdmin>
      <h1 className="mb-4 text-2xl font-medium">User #{params.userId}</h1>
      <EditUser id={params.userId} />
    </LoggedInAdmin>
  );
}
