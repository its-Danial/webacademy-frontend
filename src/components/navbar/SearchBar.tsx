import { FC } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

type SearchBarProps = {};

const SearchBar: FC<SearchBarProps> = (props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchKeywordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (pathname !== "/search") {
      navigate("/search");
    } else {
      setSearchParams({ title: event.target.value });
    }
  };

  return (
    <form className="sm:w-6/12 w-full sm:ml-0 ml-2">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        {/* TODO: will make a fetch request to for search input*/}
        <input
          onChange={onSearchKeywordHandler}
          type="search"
          className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
           border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
             dark:focus:border-blue-500"
          placeholder="Search a course by titles"
        />
      </div>
    </form>
  );
};
export default SearchBar;
