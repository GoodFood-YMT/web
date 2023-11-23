import Link from "next/link";
import { Logo } from "~/components/identity/logo";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-8">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Logo size={200} />
        </Link>
      </div>
      <div></div>
    </nav>
  );
};
