import { Button } from "@mui/material";
import { FC } from "react";
import { courseType } from "../../model/course";
import notfoundSVG from "../../assets/not-found-svg.svg";

type TeacherCurrentCourseCardProps = {
  course: courseType | undefined;
  onDeleteClick: (courseId: number) => void;
  onManageClick: (courseId: number, courseTitle: string) => void;
};

const TeacherCurrentCourseCard: FC<TeacherCurrentCourseCardProps> = (props) => {
  const onManageClickHandler = () => {
    props.onManageClick(Number(props.course?.courseId), String(props.course?.title));
  };

  const onCourseDeleteClickHandler = () => {
    props.onDeleteClick(Number(props.course?.courseId));
  };
  return (
    <div className="hover:bg-gray-100 flex group flex-row justify-between border-1 border-solid shadow-3xl border-gray-200 h-fit mt-3">
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
      <div className="my-auto w-1/4 flex justify-between mr-5 invisible group-hover:visible">
        <Button
          onClick={onManageClickHandler}
          disableElevation
          variant="text"
          className="text-purpleish cursor-pointer normal-case py-2"
        >
          Edit / manage course
        </Button>
        <Button
          onClick={onCourseDeleteClickHandler}
          disableElevation
          variant="text"
          className="text-purpleish cursor-pointer normal-case py-2"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
export default TeacherCurrentCourseCard;
