import { LoggedInWithHighRole } from "~/components/auth/conditionnals/logged_in_with_high_role";

export default function Page() {
  return <LoggedInWithHighRole>Homepage</LoggedInWithHighRole>;
}
