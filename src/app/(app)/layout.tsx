import { PropsWithChildren } from "react";
import { Navbar } from "~/components/navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <main className="p-8">{children}</main>
    </div>
  );
}
