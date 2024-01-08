import Image from "next/image";
import Link from "next/link";
import { Logo } from "~/components/identity/logo";
import { UserDropdown } from "~/components/user_dropdown";

export const Navbar = () => {
  return (
    <nav
      className="relative mb-8 flex items-center justify-between gap-8 px-8 py-12 shadow-sm max-md:flex-col"
      suppressHydrationWarning
    >
      <Image
        src="/banner.webp"
        alt="Banner"
        className="object-cover object-center"
        fill
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black/10"></div>
      <div className="z-40 flex items-center gap-8">
        <Link href="/">
          <Logo size={200} />
        </Link>
      </div>
      <UserDropdown />
    </nav>
  );
};
