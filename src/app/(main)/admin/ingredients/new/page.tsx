export default function Page() {
  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          New Ingredient
        </h2>
      </header>

      <form action="" className="flex flex-col gap-6">
        <div>
          <label htmlFor="name">Name</label>

          <input
            type="text"
            className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder=""
          />
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
