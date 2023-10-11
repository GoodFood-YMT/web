"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { Logo } from "~/components/identity/logo";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/utils/cn";

export const AdminSidebar = () => {
  return (
    <aside className="fixed flex h-screen w-[280px] flex-col gap-4 border-r border-gray-200 bg-gray-100 p-4">
      <Link href="/" className="flex w-full justify-center">
        <Logo size={72} />
      </Link>

      <div>
        <Link
          href="/admin"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full justify-start gap-1",
          )}
        >
          <Home size={16} /> Home
        </Link>
      </div>
    </aside>
  );
};
