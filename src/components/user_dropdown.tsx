"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogIn, LogOut, Settings, ShoppingBasket } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown";
import { useAccountStore } from "~/stores/account_store";

export const UserDropdown = () => {
  const router = useRouter();
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
      <DropdownMenuContent className="mr-6 w-56">
        {account ? (
          <>
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push("/orders")}>
                <ShoppingBasket className="mr-2 h-4 w-4" />
                <span>Orders</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/settings")}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-500"
              onClick={() => router.push("/logout")}
            >
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
