import Link from "next/link";

import { Container } from "~/core/components/Container";

export default function Page() {
  return (
    <Container>
      <section>
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Orders
          </h2>
        </header>

        <div className="overflow-x-auto py-12">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  #
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Date
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Restaurant
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Total Price
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <tr key={i}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      <Link href="/settings/orders/cu8ee">cu8e2ei00dd2</Link>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      20/04/2023 11:38
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Completed
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Dunkin Donuts
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
