import Link from "next/link";

import { Container } from "~/core/components/Container";

export default function Page() {
  return (
    <Container>
      <section>
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Create a new address
          </h2>
        </header>

        <form action="" className="flex flex-col gap-6 py-12">
          <div>
            <label htmlFor="name">Name</label>

            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Name"
            />
          </div>

          <div>
            <label htmlFor="city">City</label>

            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="City"
            />
          </div>

          <div>
            <label htmlFor="zipcode">Zip Code</label>

            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Zip Code"
            />
          </div>

          <div>
            <label htmlFor="street">Street</label>

            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Street"
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="/settings"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-2 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
            >
              Create
            </Link>
          </div>
        </form>
      </section>
    </Container>
  );
}
