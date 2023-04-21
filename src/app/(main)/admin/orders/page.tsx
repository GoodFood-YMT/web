import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Orders</h2>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                City
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <tr key={i}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <Link href="/admin/orders/test">dj24hjdk3</Link>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    04/04/2023 12:34
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    New York
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24.99€
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Completed
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
