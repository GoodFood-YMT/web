"use client";

import Link from "next/link";
import { GaugeCircle, LogOut, User } from "lucide-react";
import { LoggedInWithHighRoleSilent } from "~/components/auth/conditionnals/silents/logged_in_with_high_role_silent";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown";
import { useAuth } from "~/hooks/auth/use_auth";
import { useAccountStore } from "~/stores/account_store";

export const UserNav = () => {
  const { logout } = useAuth();
  const { account } = useAccountStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-orange-600 text-white">
              {account?.firstname.charAt(0).toUpperCase()}
              {account?.lastname.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {account?.firstname} {account?.lastname}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {account?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/account">
          <DropdownMenuItem>
            <User size={16} />
            My account
          </DropdownMenuItem>
        </Link>
        <Link href="/admin">
          <LoggedInWithHighRoleSilent>
            <DropdownMenuItem>
              <GaugeCircle size={16} />
              Administration
            </DropdownMenuItem>
          </LoggedInWithHighRoleSilent>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500" onClick={() => logout()}>
          <LogOut size={16} /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
