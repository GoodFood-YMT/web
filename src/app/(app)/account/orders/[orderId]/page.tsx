import { LoggedIn } from "~/components/auth/conditionnals/logged_in";

interface Props {
  params: {
    orderId: string;
  };
}

export default function Page({ params }: Props) {
  return <LoggedIn>{params.orderId}</LoggedIn>;
}
