"use client";

import { PropsWithChildren } from "react";

import { ReactQueryProvider } from "~/components/providers/react_query_provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
