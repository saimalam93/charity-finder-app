import Favourite from "./FavoriteBtn";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import { Charity } from "../types/charity.types";

type Props = {
  setCharityList: React.Dispatch<React.SetStateAction<Charity[]>>;
};

const Nav = ({ setCharityList }: Props) => {
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between bg-gray-800 shadow-[10px_10px_15px_15px_rgba(0,0,0,0.3)] sticky top-0 z-10">
      <Logo />
      <Searchbar setCharityList={setCharityList} />
      <Favourite />
    </nav>
  );
};

export default Nav;
