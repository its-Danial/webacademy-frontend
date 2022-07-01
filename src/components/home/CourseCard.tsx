import { FC } from "react";
import { Card, CardContent, Rating, CardActionArea } from "@mui/material";

// TODO: This should take in all the details that need to be fixed
type CourseCardProps = {
  img: React.ReactNode;
};

const CourseCard: FC<CourseCardProps> = (props) => {
  return (
    <Card
      sx={{ maxWidth: 250, maxHeight: 300, margin: 0 }}
      className="shadow-none border-solid border-1 border-slate-200
       text-base dark:bg-gray-700 dark:text-gray-200
       dark:border-gray-600 dark:shadow-gray-900"
    >
      <CardActionArea>
        {/* <ReactPlayer
          height="150px"
          width="250px"
          light="https://i3.ytimg.com/vi/aYtrnxYsIYg/maxresdefault.jpg"
          playIcon={
            <PlayCircleOutlinedIcon className="text-white" fontSize="large" />
          }
          url="https://www.youtube.com/watch?v=7sDY4m8KNLc&t=171s"
        /> */}
        <img
          src="https://i3.ytimg.com/vi/aYtrnxYsIYg/maxresdefault.jpg"
          alt=""
          className="w-60 h-36"
        />
        {/* NOTE: Things under the video picture */}
        <CardContent className="p-1">
          <h5 className="text-lg">Course Name</h5>
          <p className="text-xs text-gray-500 dark:text-gray-300">
            Teacher name
          </p>
          <div className="my-2 flex items-center">
            <span className="text-amber-600 mr-1 font-bold">2.5</span>
            <Rating defaultValue={2.5} precision={0.5} size="small" readOnly />
          </div>
          <h5 className="text-lg">S$21.98</h5>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CourseCard;
