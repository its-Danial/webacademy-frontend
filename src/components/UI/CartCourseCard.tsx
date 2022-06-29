import { FC } from "react";
import { Rating } from "@mui/material";

type CartCourseCardProps = {
  imgUrl: string;
};

const CartCourseCard: FC<CartCourseCardProps> = (props) => {
  return (
    <div
      className="flex flex-col relative items-center bg-white border-solid border-1 border-gray-200
    md:flex-row md:max-w-full md:max-h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 
    dark:hover:bg-gray-700"
    >
      <img
        className="p-2 object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={props.imgUrl}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          Python for Beginners - Learn Programming from scratch
        </h5>
        <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
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

      <div className="flex justify-between w-1/5 sm:absolute right-6 top-4">
        <button
          className="text-base cursor-pointer rounded-md font-light bg-transparent text-violet-600 hover:text-violet-800 hover:bg-gray-300
        focus:bg-gray-300 border-0 focus:outline-none dark:text-gray-300 dark:hover:text-gray-200 dark:focus:text-white dark:bg-gray-700
        dark:hover:bg-gray-600"
        >
          Remove
        </button>
        <h5 className="text-lg dark:text-gray-100 text-violet-600">S$21.98</h5>
      </div>
    </div>
  );
};
export default CartCourseCard;
