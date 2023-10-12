"use client";

import { PropsWithChildren } from "react";
import { LoggedInWithRole } from "~/components/auth/conditionnals/logged_in_with_role";

export const LoggedInAdmin = ({ children }: PropsWithChildren) => {
  return <LoggedInWithRole role="admin">{children}</LoggedInWithRole>;
};
