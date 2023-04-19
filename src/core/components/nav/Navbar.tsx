import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

import { Container } from "~/core/components/Container";
import { NavbarItem } from "~/core/components/nav/NavbarItem";

export const Navbar = () => {
  return (
    <header aria-label="Site Header" className="border-b border-gray-100">
      <Container>
        <div className="flex items-center gap-4">
          <button type="button" className="p-2 lg:hidden">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link href="/" className="flex">
            <span className="sr-only">Logo</span>
            <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-8">
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
          >
            <NavbarItem href="/">Restaurants</NavbarItem>
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
      </Container>
    </header>
  );
};
