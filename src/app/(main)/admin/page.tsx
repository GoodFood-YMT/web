export default function Page() {
  return (
    <>
      <header className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Dashboard
        </h2>
      </header>

      <div>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Total Sales
            </dt>

            <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">
              4900€
            </dd>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Users
            </dt>

            <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">
              24
            </dd>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Orders
            </dt>

            <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">
              86
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
