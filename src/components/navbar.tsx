"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { useAuth } from "~/hooks/auth/use_auth";
import { useAccountStore } from "~/stores/account_store";

export const Navbar = () => {
  const { logout } = useAuth();
  const { account } = useAccountStore();

  if (!account) {
    return (
      <nav className="flex justify-between bg-gray-200 px-8 py-8">
        <Link href="/auth/login">Login</Link>
      </nav>
    );
  }

  return (
    <nav className="flex justify-between bg-gray-200 px-8 py-8">
      <div>{account.email}</div>
      <Button onClick={logout}>Logout</Button>
      <div>
        {account.firstname} {account.lastname}
      </div>
    </nav>
  );
};
