import { FC } from "react";
import { Rating } from "@mui/material";
import notfoundSVG from "../../assets/not-found-svg.svg";

type TeacherPerformanceCourseCardProps = {};

const TeacherPerformanceCourseCard: FC<TeacherPerformanceCourseCardProps> = (props) => {
  return (
    <div className="bg-white hover:bg-gray-50 flex flex-row justify-between h-fit">
      <div className="flex flex-row">
        <img className="h-24 w-36" src={notfoundSVG} alt="" onError={(e) => (e.currentTarget.src = notfoundSVG)} />
        <div className="flex flex-col justify-between p-4">
          <h5 className="text-gray-800 text-sm">Course Title</h5>
          <p className="text-xs text-gray-600">Public</p>
        </div>
      </div>
      <div className="my-auto w-1/2 flex justify-around items-center">
        <div className="flex flex-col ">
          <h4 className="font-normal text-2xl">$0.00</h4>
          <p className="text-xs text-gray-600">Course earning</p>
        </div>
        <div className="flex flex-col ">
          <h4 className="font-normal text-2xl">2019-12-12</h4>
          <p className="text-xs text-gray-600">Created on</p>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-row items-center">
            <h4 className="font-normal text-2xl mr-1">4.50</h4>
            <Rating name="read-only" value={4.5} readOnly size="small" />
          </div>

          <p className="text-xs text-gray-600">Course rating</p>
        </div>
      </div>
    </div>
  );
};
export default TeacherPerformanceCourseCard;
