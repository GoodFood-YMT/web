import { PropsWithChildren } from "react";
import Link from "next/link";

type Props = {
  href: string;
};

export const NavbarItem = ({ href, children }: PropsWithChildren<Props>) => {
  return (
    <Link
      href={href}
      className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
    >
      {children}
    </Link>
  );
};
