import { PropsWithChildren } from "react";
import Link from "next/link";

import { Container } from "~/core/components/Container";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-[200px,1fr]">
        <div>
          <nav
            aria-label="Main Nav"
            className="flex flex-col space-y-1 rounded-lg bg-gray-50"
          >
            <Link
              href="/settings"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              General
            </Link>

            <Link
              href="/settings/orders"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Orders
            </Link>
          </nav>
        </div>
        <div>{children}</div>
      </div>
    </Container>
  );
}
