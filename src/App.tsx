import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import List from "./Pages/List";
import Details from "./Pages/Details";
import Favorites from "./Pages/Favorites";
import { Routes, Route } from "react-router-dom";
import getCharityByCause from "./api/getCharityByCause";
import { Charity } from "./types/charity.types";
import NotFound from "./Pages/NotFound";
import RandomCause from "./utils/randomCauseGenerator";
// import { BsFillArrowDownCircleFill } from "react-icons/bs";

function App() {
  // const ref = useRef<HTMLDivElement>(null);
  const [charityList, setCharityList] = useState<Charity[]>([]);
  const [favorites, setFavorites] = useState<Charity[]>(() => {
    const data = localStorage.getItem("favorites");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });

  const loadData = async (cause?: String) => {
    const response = await getCharityByCause(cause).then((data) => {
      return data;
    });
    setCharityList(response);
  };

  useEffect(() => {
    const randomCause = RandomCause();
    loadData(randomCause);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <Nav setCharityList={setCharityList} />
      {/* {viewClicked && (
        <div className="w-full h-[100vh] bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2020/05/16/20/33/stone-5179174_1280.jpg')]">
          <div className="flex flex-col justify-center items-center h-full">
            <div
              className="flex flex-col text-white justify-center items-center p-4 rounded-md hover:text-black transition duration-500 ease-in-out"
              onClick={() => {
                ref.current?.scrollIntoView({ behavior: "smooth" });
                setViewClicked(false);
              }}
            >
              <p className=" tracking-widest text-2xl font-bold text-center">
                View Charities
              </p>
              <BsFillArrowDownCircleFill className="text-5xl animate-bounce mt-4" />
            </div>
          </div>
        </div>
      )}
      <div ref={ref}></div> */}
      <Routes>
        <Route path="/" element={<List charities={charityList} />} />
        <Route
          path="details/:id"
          element={
            <Details favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route path="favorites" element={<Favorites charities={favorites} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
