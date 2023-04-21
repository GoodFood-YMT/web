export default function Page() {
  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          New Product
        </h2>
      </header>

      <form action="" className="flex flex-col gap-6">
        <div className="grid max-w-xs grid-cols-2 gap-4 md:grid-cols-1">
          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            className="aspect-square w-full rounded-xl object-cover"
          />
        </div>

        <div>
          <label htmlFor="name">Name</label>

          <input
            type="text"
            className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="city">Price</label>

          <input
            type="text"
            className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="zipcode">Category</label>

          <input
            type="text"
            className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="street">Ingredients</label>

          <div className="mb-4 overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
              <tbody className="divide-y divide-gray-200">
                {Array(2)
                  .fill(0)
                  .map((_, i) => (
                    <tr key={i}>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        Potatoe
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        2
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        Delete
                      </td>
                    </tr>
                  ))}

                <tr>
                  <td>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Ingredient"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Quantity"
                    />
                  </td>
                  <td>
                    <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-2 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto">
                      +
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-2 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
