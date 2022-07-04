import { FC } from "react";
import { Rating } from "@mui/material";

type SearchCourseListProps = {
  imgUrl: string;
};

const SearchCourseList: FC<SearchCourseListProps> = (props) => {
  return (
    <div
      className="flex flex-col relative items-start bg-white 
     
      md:flex-row md:max-w-full md:max-h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 
      dark:hover:bg-gray-700"
    >
      <img
        className=" justify-start object-cover h-auto w-60"
        src={props.imgUrl}
        alt=""
      />

      <div className="flex flex-col justify-between px-4 leading-normal">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white  w-[80%]">
          Python for Beginners - Learn Programming from scratch
        </h5>
        <p className="text-sm text-gray-700 mb-2 w-[80%]">
          The modern JavaScript course for everyone! Master JavaScript with
          projects, challenges and theory. Many courses in one!
        </p>
        <p className="mb-3 text-xs font-normal text-gray-600 dark:text-gray-400">
          Created by Edwin Diaz and 1 other
        </p>
        <div className="flex items-center">
          <span className="text-amber-600 mr-1 font-bold">2.5</span>
          <Rating defaultValue={2.5} precision={0.5} size="small" readOnly />
        </div>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-400">
          2.5 total hours - 84 lectures
        </p>
      </div>

      <h5 className="absolute right-0 top-0 text-lg dark:text-gray-100 text-violet-600">
        S$21.98
      </h5>
    </div>
  );
};
export default SearchCourseList;
