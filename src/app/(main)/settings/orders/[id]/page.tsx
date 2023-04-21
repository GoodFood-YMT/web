import Link from "next/link";

import { Container } from "~/core/components/Container";

export default function Page() {
  return (
    <Container>
      <section>
        <header>
          <h2 className="mb-8 text-xl font-bold text-gray-900 sm:text-3xl">
            Order #cu12hdue34
          </h2>

          <div className="grid grid-cols-[auto,1fr] gap-6">
            <span className="font-bold">Status</span>
            <span>Completed</span>

            <span className="font-bold">Restaurant</span>
            <span>Dunkin Donuts</span>

            <span className="font-bold">Date</span>
            <span>20/04/2023 11:38</span>

            <span className="font-bold">Price</span>
            <span>24.00€</span>
          </div>
        </header>

        <div className="overflow-x-auto py-12">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Product
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Quantity
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Unit Price
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Total Price
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <tr key={i}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      <Link href="/products/test">Donuts</Link>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      2
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      12.00€
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24.00€
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </Container>
  );
}
