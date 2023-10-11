"use client";

import { PropsWithChildren } from "react";
import { LoggedInWithRoleSilent } from "~/components/auth/conditionnals/silents/logged_in_with_role_silent";

export const LoggedInAdminSilent = ({ children }: PropsWithChildren) => {
  return (
    <LoggedInWithRoleSilent role="admin">{children}</LoggedInWithRoleSilent>
  );
};
