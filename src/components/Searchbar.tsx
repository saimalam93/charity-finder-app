const Searchbar = () => {
  return (
    <>
      <div className="flex items-center flex-shrink-0 text-white mr-6 grow min-w-[50%] my-8">
        <form action="" method="get" className="flex items-center grow">
          <input
            type="text"
            placeholder="Search"
            className="grow bg-gray-300 appearance-none border-2 border-gray-700 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
          {/* <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button> */}
        </form>
      </div>
    </>
  );
};

export default Searchbar;
