"use client";

import { PropsWithChildren } from "react";
import { useAuth } from "~/hooks/auth/use_auth";
import { AuthStatus } from "~/types/auth/auth_status";

export const NotLoggedSilent = ({ children }: PropsWithChildren) => {
  const { status } = useAuth();

  if (status !== AuthStatus.Guest) {
    return null;
  }

  return <>{children}</>;
};
