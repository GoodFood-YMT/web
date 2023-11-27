"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Gauge, LogIn, LogOut, User } from "lucide-react";
import { LoggedInWithHighRoleSilent } from "~/components/auth/conditionnals/silents/logged_in_with_high_role_silent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown";
import { useAuth } from "~/hooks/auth/use_auth";
import { useAccountStore } from "~/stores/account_store";

export const UserDropdown = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const { account } = useAccountStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer select-none items-center gap-4">
          <div className="relative h-[50px] w-[50px]">
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              className="rounded-full object-cover object-center"
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">
              {account ? `${account.firstname} ${account.lastname}` : "Sign In"}
            </span>
            <span className="text-xs capitalize opacity-50">
              {account ? account.role_id : "customer"}
            </span>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-6 w-56">
        {account ? (
          <>
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push("/orders")}>
                <User className="mr-2 h-4 w-4" />
                <span>My account</span>
              </DropdownMenuItem>
              <LoggedInWithHighRoleSilent>
                <DropdownMenuItem onClick={() => router.push("/admin")}>
                  <Gauge className="mr-2 h-4 w-4" />
                  <span>Administration</span>
                </DropdownMenuItem>
              </LoggedInWithHighRoleSilent>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500" onClick={() => logout()}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem onClick={() => router.push("/auth/login")}>
            <LogIn className="mr-2 h-4 w-4" />
            <span>Sign In</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
