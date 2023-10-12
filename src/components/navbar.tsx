"use client";

import Link from "next/link";
import { Logo } from "~/components/identity/logo";
import { UserNav } from "~/components/user_nav";
import { useAccountStore } from "~/stores/account_store";

export const Navbar = () => {
  const { account } = useAccountStore();

  return (
    <nav className="flex h-[90px] items-center justify-between border-b border-gray-200 bg-gray-100 px-8">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Logo size={72} />
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/restaurants"
            className="font-medium transition hover:opacity-80"
          >
            Restaurants
          </Link>
          <Link
            href="/products"
            className="font-medium transition hover:opacity-80"
          >
            Products
          </Link>
        </div>
      </div>
      {account ? (
        <>
          <UserNav />
        </>
      ) : (
        <>
          <Link href="/auth/login">Sign in</Link>
        </>
      )}
    </nav>
  );
};
