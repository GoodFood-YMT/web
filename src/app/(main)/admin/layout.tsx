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
              href="/admin"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/orders"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Orders
            </Link>

            <Link
              href="/admin/products"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Products
            </Link>

            <Link
              href="/admin/categories"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Categories
            </Link>

            <Link
              href="/admin/providers"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Providers
            </Link>

            <Link
              href="/admin/ingredients"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Ingredients
            </Link>

            <Link
              href="/admin/users"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Users
            </Link>
          </nav>
        </div>
        <div>{children}</div>
      </div>
    </Container>
  );
}
