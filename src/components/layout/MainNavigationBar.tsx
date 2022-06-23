import { FC } from "react";
import { Navbar } from "flowbite-react";
import logo from "../assets/companyLogo.png";
import CategoriesDropDown from "./CategoriesDropDown";
import SearchBar from "../UI/SearchBar";

type MainNavigationBarProps = {};

const MainNavigationBar: FC<MainNavigationBarProps> = (props) => {
  return (
    <nav className="shadow border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 rounded">
      <div className="flex items-center">
        <Navbar.Brand>
          <img src={logo} className="h-10 sm:h-16" alt="WebAcademy Logo" />
          <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
            WebAcademy
          </span>
        </Navbar.Brand>
        <CategoriesDropDown label={"Categories"} />
        <SearchBar />
        <div className="flex absolute right-72">
          <CategoriesDropDown label={"Teach on WebAcademy"} />
        </div>

        <button
          type="button"
          className="absolute right-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Log in
        </button>
        <button
          type="button"
          className="absolute right-9 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};
export default MainNavigationBar;
