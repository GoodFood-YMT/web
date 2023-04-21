import Link from "next/link";

import { Container } from "~/core/components/Container";

export default function Page() {
  return (
    <Container>
      <section>
        <header>
          <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-3xl">
            Order #cu12hdue34
          </h2>
        </header>

        <div className="flex flex-col gap-2">
          <span>Status: Waiting</span>
          <span>Date: 23/03/2023 12:44</span>
        </div>

        <h2 className="mb-6 mt-6 text-xl font-bold text-gray-900 sm:text-3xl">
          Products
        </h2>
        <div className="flex flex-col gap-4">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="grid grid-cols-[100px,2fr] gap-2">
                <div>
                  <div>
                    <img
                      alt="Les Paul"
                      src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                      className="aspect-square w-full rounded-xl object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span>Donuts</span>
                    <span>23€</span>
                  </div>
                  <span>Quantity: 2</span>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-4">
          <Link
            href="/admin/products/new"
            className="block rounded bg-gray-700 px-5 py-3 text-center text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Take Delivery
          </Link>
        </div>
      </section>
    </Container>
  );
}
