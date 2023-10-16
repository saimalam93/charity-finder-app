import { Charity } from "../types/charity.types";
import { Link } from "react-router-dom";
import Card from "../components/Card";

type Props = {
  charities: Charity[];
};

const Favorites = ({ charities }: Props) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-600 text-center my-8">
        Your Favorites
      </h1>
      {charities.length === 0 ? (
        <p className="text-2xl text-center text-gray-600">
          You have no favorites yet
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {charities.map(
            (charity, index) =>
              charity.ein && (
                <Link to={`/details/${charity.ein}`} key={index}>
                  <Card charity={charity} />
                </Link>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
