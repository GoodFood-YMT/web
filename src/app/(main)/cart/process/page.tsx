export default function Page() {
  return (
    <>
      <section>
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50 py-12 md:py-24">
            <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
              <div className="flex items-center gap-4">
                <span className="h-10 w-10 rounded-full bg-blue-700"></span>

                <h2 className="font-medium text-gray-900">Dunkin Donuts</h2>
              </div>

              <div>
                <p className="text-2xl font-medium tracking-tight text-gray-900">
                  24.00€
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  For the purchase of
                </p>
              </div>

              <div>
                <div className="flow-root">
                  <ul className="-my-4 divide-y divide-gray-100">
                    <li className="flex items-center gap-4 py-4">
                      <img
                        src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                        alt=""
                        className="h-16 w-16 rounded rounded-lg object-cover"
                      />

                      <div>
                        <h3 className="text-sm text-gray-900">Donuts</h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt className="inline">Quantity:</dt>
                            <dd className="inline">2</dd>
                          </div>
                        </dl>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-12 md:py-24">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <form className="grid grid-cols-6 gap-4">
                <fieldset className="col-span-6">
                  <legend className="block text-sm font-medium text-gray-700">
                    Card Details
                  </legend>

                  <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                    <div>
                      <input
                        type="text"
                        id="CardNumber"
                        placeholder="Card Number"
                        className="relative mt-1 w-full rounded-md border border-gray-200 p-2 focus:z-10 sm:text-sm"
                      />
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1">
                        <input
                          type="text"
                          id="CardExpiry"
                          placeholder="Expiry Date"
                          className="relative mt-1 w-full rounded-md border border-gray-200 p-2 focus:z-10 sm:text-sm"
                        />
                      </div>

                      <div className="-ms-px flex-1">
                        <input
                          type="text"
                          id="CardCVC"
                          placeholder="CVC"
                          className="relative mt-1 w-full rounded-md border border-gray-200 p-2 focus:z-10 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="col-span-6">
                  <legend className="block text-sm font-medium text-gray-700">
                    Billing Address
                  </legend>

                  <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                    <div>
                      <select
                        id="Country"
                        className="relative mt-1 w-full rounded-md border border-gray-200 p-2 focus:z-10 sm:text-sm"
                      >
                        <option>Home</option>
                        <option>Wales</option>
                        <option>Scotland</option>
                        <option>France</option>
                        <option>Belgium</option>
                        <option>Japan</option>
                      </select>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="col-span-6">
                  <legend className="block text-sm font-medium text-gray-700">
                    Delivery Address
                  </legend>

                  <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                    <div>
                      <select
                        id="Country"
                        className="relative mt-1 w-full rounded-md border border-gray-200 p-2 focus:z-10 sm:text-sm"
                      >
                        <option>Home</option>
                        <option>Wales</option>
                        <option>Scotland</option>
                        <option>France</option>
                        <option>Belgium</option>
                        <option>Japan</option>
                      </select>
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-6">
                  <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
