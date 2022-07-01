import { FC } from "react";
import { Button, IconButton } from "@mui/material";

import { PlayArrow, FavoriteBorder, Star } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";

type CourseInfoHeaderProps = {};

const CourseInfoHeader: FC<CourseInfoHeaderProps> = (props) => {
  return (
    <div className="bg-black h-[32rem] flex sm:flex-row flex-col justify-between">
      <div className="text-white w-1/2">
        <div className="my-24 mx-32 flex flex-col">
          <h1 className="font-serif text-4xl">
            The Web Developer Bootcamp 2022
          </h1>
          <div className="flex justify-between border-0 border-b-[1px] border-gray-600 border-solid pb-4">
            <div className="flex flex-col justify-between mt-3">
              <p className="text-gray-300 font-bold underline underline-offset-4 ">
                {/* TODO: teacher name */}
                Colt Steele
              </p>
              <Button
                startIcon={<PlayArrow />}
                variant="outlined"
                className="text-white normal-case border-white hover:bg-gray-700 rounded-none "
              >
                Preview
              </Button>
            </div>
            <div>
              <img
                className="rounded-full w-20 my-2"
                src="https://s.udemycdn.com/premium-clp/instructors/colt-steele/ColtSteele-1x.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            className="flex flex-row relative py-5 items-center border-0 border-b-[1px] 
      border-gray-600 border-solid"
          >
            <div className="flex flex-col">
              <div className="mr-10 flex flex-row justify-center">
                <h2 className="text-2xl">4.7</h2>
                <Star className="m-1 text-amber-300" />
              </div>
              <p className="text-sm font-bold text-gray-300 underline underline-offset-4">
                ratings
              </p>
            </div>
            <div>
              <h2 className="text-2xl">63hr</h2>
              <p className="text-sm font-bold text-gray-300">total content</p>
            </div>
            <div className="absolute right-0">
              <IconButton
                className="border-solid border-2 border-gray-200 "
                color="primary"
                aria-label="heart"
                size="small"
              >
                <FavoriteBorder className="text-gray-200" />
              </IconButton>
            </div>
          </div>
          <div className="flex flex-row mt-5 justify-center">
            <div className="flex flex-col justify-center basis-1/2">
              <h2 className="mr-5">S$118.98</h2>
            </div>
            <LoadingButton
              loading={false}
              loadingPosition="start"
              className="w-full normal-case h-14 rounded-none 
              bg-blue-700 disabled:text-gray-100 disabled:bg-gray-600"
              variant="contained"
              disableElevation
            >
              Add to cart
            </LoadingButton>
          </div>
        </div>
      </div>
      <div className="text-white w-1/2">
        <img
          // Note: can also try object-fill
          className="object-cover w-full h-full"
          src="https://s.udemycdn.com/premium-clp/625204/CourseImage-2x.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default CourseInfoHeader;
