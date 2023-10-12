"use client";

import { PropsWithChildren } from "react";
import { LoggedInWithRoleSilent } from "~/components/auth/conditionnals/silents/logged_in_with_role_silent";

export const LoggedInManagerSilent = ({ children }: PropsWithChildren) => {
  return (
    <LoggedInWithRoleSilent role="manager">{children}</LoggedInWithRoleSilent>
  );
};
