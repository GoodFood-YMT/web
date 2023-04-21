import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Users</h2>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Firstname
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Lastname
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Role
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <tr key={i}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <Link href="/admin/users/test">dj24hjdk3</Link>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    John
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Doe
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    test@gmail.com
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    User
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
