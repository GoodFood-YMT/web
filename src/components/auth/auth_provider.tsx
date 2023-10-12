"use client";

import { PropsWithChildren, useEffect } from "react";
import { Loader } from "~/components/loader";
import { useAuth } from "~/hooks/auth/use_auth";
import { AuthStatus } from "~/types/auth/auth_status";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { status, authenticate } = useAuth();

  useEffect(() => authenticate(), [authenticate]);

  if (status === AuthStatus.Unknown) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
};
