import { FC } from "react";

type AdminSearchHeaderProps = {
  title: string;
  searchKeyWord: string;
  onSearchFieldChange: (newKeyWord: string) => void;
};

const AdminSearchHeader: FC<AdminSearchHeaderProps> = (props) => {
  const onTextChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onSearchFieldChange(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className="flex py-6 flex-row justify-between">
      <h1 className="font-serif text-4xl">{props.title}</h1>
      <div className="flex flex-row basis-1/4 relative w-full justify-end items-center">
        <input
          value={props.searchKeyWord}
          onChange={onTextChangeHandler}
          // name="search"
          type="search"
          id="search"
          className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border-gray-400"
          placeholder="Search by email"
          required
        />
        <button
          type="submit"
          className="absolute h-full  top-0 right-0 p-2.5 text-sm font-medium text-white bg-black border border-black hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-600 "
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
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
        </button>
      </div>
    </div>
  );
};
export default AdminSearchHeader;
