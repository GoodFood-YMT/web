import { PropsWithChildren } from "react";

import { Navbar } from "~/core/components/nav/Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
