import { AllUsers } from "~/components/auth/all_users";
import { LoggedInAdmin } from "~/components/auth/conditionnals/logged_in_admin";

export default function Page() {
  return (
    <LoggedInAdmin>
      <h1 className="mb-4 text-2xl font-medium">Users</h1>
      <AllUsers />
    </LoggedInAdmin>
  );
}
