import { PropsWithChildren } from "react";
import { AdminSidebar } from "~/components/admin_sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <AdminSidebar />
      <main className="min-h-screen p-8 pl-[312px]">{children}</main>
    </div>
  );
}
