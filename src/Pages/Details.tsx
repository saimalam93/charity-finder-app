import { useParams } from "react-router-dom";
import getCharityByID from "../api/getCharityByID";
import { Charity } from "../types/charity.types";
import { useState, useEffect } from "react";
import Heart from "../assets/heart";

type Props = {
  favorites: Charity[];
  setFavorites: (charity: Charity[]) => void;
};

const Details = ({ favorites, setFavorites }: Props) => {
  const { id } = useParams();
  const [charity, setCharity] = useState<Charity>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const loadData = async () => {
    await getCharityByID(id!).then((data) => {
      setCharity(data.nonprofit);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const isFound = favorites.find((fav) => fav.ein === charity?.ein);
    if (isFound !== undefined) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorites, charity]);

  const addFavorite = (charity: Charity) => {
    setFavorites([...favorites, charity]);
  };

  const removeFavorite = (charity: Charity) => {
    const newFavorites = favorites.filter((fav) => fav.ein !== charity.ein);
    setFavorites(newFavorites);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center my-8">
        <div className="w-full flex flex-col items-center bg-gray-900 rounded-lg shadow-xl p-8 mx-10">
          {isFavorite ? (
            <div
              onClick={() => removeFavorite(charity!)}
              className="flex flex-col items-center self-end"
            >
              <Heart fill="red" storke="red" />
              <p className="text-white text-sm">Remove Favorite</p>
            </div>
          ) : (
            <div
              onClick={() => addFavorite(charity!)}
              className="flex flex-col items-center self-end"
            >
              <Heart fill="white" storke="white" />
              <p className="text-white text-sm">Add Favorite</p>
            </div>
          )}

          <div className="flex items-center justify-center border-b-2 w-full">
            <img
              src={charity?.logoUrl}
              alt={charity?.name}
              className="h-12 object-contain my-2"
            />

            <p className="text-white text-2xl grow ml-4">{charity?.name}</p>
          </div>

          <p className="text-white text-sm italic my-2 text-left w-full">
            {charity?.locationAddress}
          </p>
          <img
            src={charity?.coverImageUrl}
            alt={charity?.name}
            className="h-96 w-full object-contain"
          />
          <p className="text-white text-sm my-8">{charity?.descriptionLong}</p>

          <a
            href={charity?.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white text-sm hover:underline hover:text-blue-500"
          >
            {charity?.websiteUrl}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
