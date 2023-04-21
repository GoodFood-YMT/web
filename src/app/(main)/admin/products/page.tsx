import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Products
        </h2>

        <Link
          href="/admin/products/new"
          className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          New
        </Link>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Label
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Stock
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <tr key={i}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <Link href="/admin/products/test">dj24hjdk3</Link>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Donuts
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    120
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    12.99€
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
