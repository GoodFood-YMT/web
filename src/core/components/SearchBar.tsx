export const SearchBar = () => {
  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-md border border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
        />
      </div>
    </>
  );
};
