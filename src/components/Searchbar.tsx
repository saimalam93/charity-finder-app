import { useState, useEffect } from "react";
import CausesList from "../CausesList.json";
import { Charity } from "../types/charity.types";
import getCharityByCause from "../api/getCharityByCause";
import { useNavigate } from "react-router-dom";

type Props = {
  setCharityList: React.Dispatch<React.SetStateAction<Charity[]>>;
};

const searchOptions = CausesList.causes;

const Searchbar = ({ setCharityList }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const navigate = useNavigate();

  const loadData = async (cause?: String) => {
    const response = await getCharityByCause(cause).then((data) => {
      return data;
    });
    setCharityList(response);
  };

  useEffect(() => {
    const results = searchOptions.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const results = searchOptions.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    loadData(event.currentTarget.innerText);
    navigate("/");
    setSearchTerm("");
  };

  return (
    <>
      <div className="flex items-center flex-shrink-0 text-white mr-6 grow min-w-[50%] my-4">
        <div className="relative grow">
          <form
            action=""
            method="get"
            className="flex items-center grow relative block"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search"
              className="grow bg-gray-300 appearance-none border-2 border-gray-800 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              value={searchTerm}
              onChange={handleChange}
            />
          </form>
          {searchTerm === "" ? null : (
            <div className="absolute bg-gray-100 rounded-lg shadow-xl w-full mt-1 rounded-bl rounded-br max-h-64 overflow-y-auto">
              <ul className="flex flex-col">
                {searchResults.map((item, index) => (
                  <li
                    key={index}
                    className="text-black px-2 py-1 hover:bg-gray-400 rounded-md"
                    onClick={handleClick}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Searchbar;
