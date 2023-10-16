import { Link } from "react-router-dom";

const Favourite = () => {
  return (
    <Link
      to="/favorites"
      className="flex items-center flex-shrink-0 text-white mr-6 mb-4 lg:mb-0"
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <button className="bg-zinc-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
          <figure className="flex flex-col items-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/08/29/13/55/heart-1628313_1280.png"
              alt="Favorites"
              className="w-6"
            />
            <figcaption className="text-sm">Favorites</figcaption>
          </figure>
        </button>
      </div>
    </Link>
  );
};

export default Favourite;
