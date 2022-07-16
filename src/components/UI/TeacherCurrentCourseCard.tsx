import { Button } from "@mui/material";
import { FC } from "react";
import { courseType } from "../../model/course";
import notfoundSVG from "../../assets/not-found-svg.svg";

type TeacherCurrentCourseCardProps = {
  course: courseType | undefined;
};

const TeacherCurrentCourseCard: FC<TeacherCurrentCourseCardProps> = (props) => {
  return (
    <div className="cursor-pointer hover:bg-gray-100 flex group flex-row justify-between border-1 border-solid shadow-3xl border-gray-200 h-fit mt-3">
      <div className="flex flex-row">
        <img
          className="h-24 w-36"
          src={props.course?.courseInformation?.coverImageUrl}
          alt={props.course?.title}
          onError={(e) => (e.currentTarget.src = notfoundSVG)}
        />
        <div className="flex flex-col justify-between p-4">
          <h5 className="text-gray-800 text-sm">{props.course?.title}</h5>
          <p className="text-xs text-gray-600">Public</p>
        </div>
      </div>
      <div className="my-auto mr-5 hidden group-hover:block">
        <Button disableElevation variant="text" className="text-purpleish">
          Delete
        </Button>
      </div>
    </div>
  );
};
export default TeacherCurrentCourseCard;
