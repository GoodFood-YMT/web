import Image from "next/image";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

import { NavbarItem } from "~/core/components/nav/NavbarItem";

export const Navbar = () => {
  return (
    <header aria-label="Site Header" className="mb-12 border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex">
            <Image src="/logo.png" alt="Logo" width={64} height={64} />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-8">
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
          >
            <NavbarItem href="/restaurants">Restaurants</NavbarItem>
          </nav>

          <div className="flex items-center">
            <div className="flex items-center border-x border-gray-100">
              <span className="border-e border-e-gray-100">
                <Link
                  href="/cart"
                  className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
                >
                  <BsBag size={16} />

                  <span className="sr-only">Cart</span>
                </Link>
              </span>

              <span className="border-e border-e-gray-100">
                <a
                  href="/auth/login"
                  className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
                >
                  <CiUser size={20} />

                  <span className="sr-only"> Account </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
