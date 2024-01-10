import { PropsWithChildren } from "react";
import { AdminSidebar } from "~/components/admin_sidebar";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[1fr,4fr] gap-4 px-8">
        <AdminSidebar />
        <main className="bg-white p-4 shadow-sm">{children}</main>
      </div>
      <Footer />
    </>
  );
}
