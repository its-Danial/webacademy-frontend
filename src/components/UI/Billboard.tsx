import { FC } from "react";

import banner from "../../assets/banner.svg";

type BillboardProps = {};

const Billboard: FC<BillboardProps> = (props) => {
  return (
    <div className="pt-12 mb-12 h-56 sm:h-96 flex justify-between items-center bg-gray-200 dark:bg-gray-700">
      <div
        className="ml-20 mb-32 hidden sm:block p-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md 
      dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-4xl font-serif tracking-tight text-gray-900 dark:text-white">
          Get there. From here.
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Chart your path to success. Log in for limited-time savings on the
          latest topics.
        </p>
      </div>

      <img src={banner} alt="banner" className="h-full w-full sm:w-6/12" />
    </div>
  );
};
export default Billboard;
