"use client";

import { PropsWithChildren } from "react";
import { useAuth } from "~/hooks/auth/use_auth";
import { useAccountStore } from "~/stores/account_store";
import { AuthStatus } from "~/types/auth/auth_status";

interface Props {
  role: string | string[];
}

export const LoggedInWithRoleSilent = ({
  role,
  children,
}: PropsWithChildren<Props>) => {
  const { status } = useAuth();
  const { account } = useAccountStore();

  if (status === AuthStatus.Guest) {
    return null;
  }

  if (role instanceof Array) {
    if (!role.includes(account?.role_id.toLowerCase() ?? "")) {
      return null;
    }
  } else {
    if (account?.role_id.toLowerCase() !== role) {
      return null;
    }
  }

  return <>{children}</>;
};
