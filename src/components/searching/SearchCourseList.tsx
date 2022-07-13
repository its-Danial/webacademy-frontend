import { FC } from "react";
import { Rating } from "@mui/material";
import { courseType } from "../../model/course";
import { useNavigate } from "react-router-dom";

type SearchCourseListProps = {
  course: courseType | undefined;
};

const SearchCourseList: FC<SearchCourseListProps> = (props) => {
  const navigate = useNavigate();

  const onCourseClickHandler = (courseId: number | undefined) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div
      onClick={() => onCourseClickHandler(props.course?.courseId)}
      className="flex flex-col relative items-start bg-white md:flex-row md:max-w-full md:max-h-96
      cursor-pointer hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 
      dark:hover:bg-gray-700"
    >
      <img
        className=" justify-start object-cover h-auto w-60"
        src={props.course?.courseInformation.coverImageUrl}
        alt=""
      />

      <div className="flex flex-col justify-between px-4 leading-normal">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white  w-[80%]">
          {props.course?.title}
        </h5>
        <p className="text-sm text-gray-700 mb-2 w-[80%]">{props.course?.courseInformation.summary}</p>
        <p className="mb-3 text-xs font-normal text-gray-600 dark:text-gray-400">
          Created by {props.course?.teacher.fullName}
        </p>
        <div className="flex items-center">
          <span className="text-amber-600 mr-1 font-bold">{props.course?.courseRating}</span>
          <Rating value={props.course?.courseRating} precision={0.5} size="small" readOnly />
        </div>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-400">2.5 total hours - 84 lectures</p>
      </div>

      <h5 className="absolute right-2 top-1 text-xl dark:text-gray-100 text-violet-600">
        ${props.course?.courseInformation.price}
      </h5>
    </div>
  );
};
export default SearchCourseList;
