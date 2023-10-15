"use client";

import Link from "next/link";
import { Home, Store, TableProperties, Users } from "lucide-react";
import { LoggedInAdminSilent } from "~/components/auth/conditionnals/silents/logged_in_admin_silent";
import { Logo } from "~/components/identity/logo";
import { buttonVariants } from "~/components/ui/button";
import { UserNav } from "~/components/user_nav";
import { cn } from "~/utils/cn";

export const AdminSidebar = () => {
  return (
    <aside className="fixed flex h-screen w-[280px] flex-col gap-4 border-r border-gray-200 bg-gray-100 p-4">
      <Link href="/" className="flex w-full justify-center">
        <Logo size={72} />
      </Link>

      <div className="flex flex-col gap-1">
        <Link
          href="/admin"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full justify-start gap-1",
          )}
        >
          <Home size={16} /> Home
        </Link>

        <LoggedInAdminSilent>
          <Link
            href="/admin/users"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full justify-start gap-1",
            )}
          >
            <Users size={16} /> Users
          </Link>
        </LoggedInAdminSilent>

        <LoggedInAdminSilent>
          <Link
            href="/admin/restaurants"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full justify-start gap-1",
            )}
          >
            <Store size={16} /> Restaurants
          </Link>
        </LoggedInAdminSilent>

        <LoggedInAdminSilent>
          <Link
            href="/admin/categories"
            className={cn(
              buttonVariants({ variant: "outline"}),
              "w-full justify-start gap-1"
            )}
          >
            <TableProperties size={16}/> Categories
          </Link>
        </LoggedInAdminSilent>

        <div className="absolute bottom-5 left-5">
          <UserNav />
        </div>
      </div>
    </aside>
  );
};
