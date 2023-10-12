"use client";

import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "~/hooks/auth/use_auth";
import { AuthStatus } from "~/types/auth/auth_status";

export const LoggedIn = ({ children }: PropsWithChildren) => {
  const { status } = useAuth();

  if (status === AuthStatus.Guest) {
    redirect("/auth/login");
  }

  return <>{children}</>;
};
