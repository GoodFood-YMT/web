import { PropsWithChildren } from "react";

import { Footer } from "~/core/components/Footer";
import { Navbar } from "~/core/components/nav/Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
