import { PropsWithChildren } from "react";
import { NotLogged } from "~/components/auth/conditionnals/not_logged";

export default function Layout({ children }: PropsWithChildren) {
  return <NotLogged>{children}</NotLogged>;
}
