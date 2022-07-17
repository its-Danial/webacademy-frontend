import { FC } from "react";
import { Card, CardContent, Rating, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import notfoundSVG from "../../assets/not-found-svg.svg";
import { truncateString } from "../../helper/tuncateString";

// TODO: This should take in all the details that need to be fixed
type CourseCardProps = {
  img: string;
  courseName: string;
  teacherName: string;
  price: number;
  rating: number;
  courseId: number;
};

const CourseCard: FC<CourseCardProps> = (props) => {
  const navigate = useNavigate();

  const onCourseCardClickHandler = () => {
    navigate(`/course/${props.courseId}`);
  };

  return (
    <Card
      onClick={onCourseCardClickHandler}
      sx={{ maxWidth: 250, maxHeight: 300, margin: 0, height: 280, position: "relative" }}
      className="shadow-none border-solid border-1 border-slate-200
       text-base dark:bg-gray-700 dark:text-gray-200
       dark:border-gray-600 dark:shadow-gray-900"
    >
      <CardActionArea>
        <img
          src={props.img ? props.img : notfoundSVG}
          onError={(e) => (e.currentTarget.src = notfoundSVG)}
          alt=""
          className="w-60 h-36"
        />
        {/* NOTE: Things under the video picture */}
        <CardContent className="p-1">
          <h5 className="text-base">{truncateString(props.courseName, 50)}</h5>
          <p className="text-xs text-gray-500 dark:text-gray-300">{props.teacherName}</p>
          <div className="my-2 flex items-center">
            <span className="text-amber-600 mr-1 font-bold">{props.rating}</span>
            <Rating value={props.rating} precision={0.5} size="small" readOnly />
          </div>
          <h5 className="text-lg ">${props.price}</h5>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CourseCard;
