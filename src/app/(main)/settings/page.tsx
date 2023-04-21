import Link from "next/link";

import { Container } from "~/core/components/Container";

export default function Page() {
  return (
    <Container>
      <section>
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Informations
          </h2>
        </header>

        <form action="" className="flex flex-col gap-6 py-12">
          <div>
            <label htmlFor="firstname">Firstname</label>

            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter your firstname"
            />
          </div>

          <div>
            <label htmlFor="lastname">Lastname</label>

            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter your lastname"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>

            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-2 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
            >
              Save
            </button>
          </div>
        </form>
      </section>

      <section>
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Addresses
          </h2>
        </header>

        <div className="overflow-x-auto py-12">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  City
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Zip Code
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Street
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Home
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  New York
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  12E93
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  12th Avenue
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <Link
            href="/settings/addresses/new"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-2 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
          >
            New
          </Link>
        </div>
      </section>
    </Container>
  );
}
