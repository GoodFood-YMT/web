"use client";

import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "~/hooks/auth/use_auth";
import { useAccountStore } from "~/stores/account_store";
import { AuthStatus } from "~/types/auth/auth_status";

interface Props {
  role: string | string[];
}

export const LoggedInWithRole = ({
  role,
  children,
}: PropsWithChildren<Props>) => {
  const { status } = useAuth();
  const { account } = useAccountStore();

  if (status === AuthStatus.Guest) {
    redirect("/auth/login");
  }

  if (role instanceof Array) {
    if (!role.includes(account?.role_id.toLowerCase() ?? "")) {
      redirect("/");
    }
  } else {
    if (account?.role_id.toLowerCase() !== role) {
      redirect("/");
    }
  }

  return <>{children}</>;
};
