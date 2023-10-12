import Favourite from "./Favourite";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

const Nav = () => {
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between bg-gray-800 p-6 ">
      <Logo />
      <Searchbar />
      <Favourite />
    </nav>
  );
};

export default Nav;
