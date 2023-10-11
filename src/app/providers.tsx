"use client";

import { PropsWithChildren } from "react";
import { AuthProvider } from "~/components/auth/auth_provider";
import { ReactQueryProvider } from "~/components/providers/react_query_provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryProvider>
  );
};
