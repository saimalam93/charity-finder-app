import Card from "../components/Card";
import { Charity } from "../types/charity.types";
import { Link } from "react-router-dom";

type Props = {
  charities: Charity[];
};

const List = ({ charities }: Props) => {
  return (
    <div className="container mx-auto px-4 my-8">
      <h1 className="text-3xl font-bold text-gray-600 text-center my-8">
        Choosen for you
      </h1>
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
    </div>
  );
};

export default List;
