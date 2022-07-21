import { Button, Rating } from "@mui/material";
import { FC } from "react";
import notfoundSVG from "../../assets/not-found-svg.svg";

type AdminTeacherDetailsCourseCardProps = {
  img: string | undefined;
  title: string | undefined;
  courseId: number;
  onDeleteClick: (courseId: number) => void;
  createdAt: string | undefined;
  rating: number;
  courseEarnings:
    | {
        courseId: number;
        totalEarnings: number;
      }
    | undefined;
};

const AdminTeacherDetailsCourseCard: FC<AdminTeacherDetailsCourseCardProps> = (props) => {
  const onDeleteClickHandler = () => {
    props.onDeleteClick(props.courseId);
  };
  return (
    <div className="group bg-white hover:bg-gray-100 flex flex-row justify-between order-1 border-solid shadow-3xl border-gray-200 h-fit mt-3">
      <div className="flex flex-row">
        <img
          className="h-24 w-36"
          src={props.img}
          alt={props.title}
          onError={(e) => (e.currentTarget.src = notfoundSVG)}
        />
        <div className="flex flex-col justify-between p-4">
          <h5 className="text-gray-800 text-sm">{props.title}</h5>
          <p className="text-xs text-gray-600">Public</p>
        </div>
      </div>
      <div className="flex flex-row justify-between basis-1/2">
        <div className="my-auto  flex justify-around basis-3/4 items-center">
          <div className="flex flex-col ">
            <h4 className="font-normal text-2xl">${props.courseEarnings?.totalEarnings}.00</h4>
            <p className="text-xs text-gray-600">Course earning</p>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <h4 className="font-normal text-xl">{props.createdAt?.slice(0, 10)}</h4>
              <p className="text-xs">{props.createdAt?.slice(14, props.createdAt.length)}</p>
            </div>
            <p className="text-xs text-gray-600">Created on</p>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row items-center">
              <h4 className="font-normal text-2xl mr-1">{props.rating}</h4>
              <Rating name="read-only" value={props.rating} readOnly size="small" />
            </div>
            <p className="text-xs text-gray-600">Course rating</p>
          </div>
        </div>
        <Button
          onClick={onDeleteClickHandler}
          disableElevation
          variant="text"
          className="invisible group-hover:visible basis-1/4  hover:bg-red-100 text-red-500 cursor-pointer normal-case py-2"
        >
          Delete course
        </Button>
      </div>
    </div>
  );
};
export default AdminTeacherDetailsCourseCard;
