import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { courseType } from "../../model/course";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { progressPerCourseType } from "../../helper/progressCalculator";
import notfoundSVG from "../../assets/not-found-svg.svg";
import { truncateString } from "../../helper/tuncateString";

type MyCurrentCoursesProps = {
  authUserName: string;
  studentCourses: courseType[] | undefined;
  studentProgresses: progressPerCourseType[];
};

const MyCurrentCourses: FC<MyCurrentCoursesProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="px-8 mb-12">
      <h1 className="mb-2 text-4xl font-serif tracking-tight text-gray-900 dark:text-white">
        Let's start learning, {props.authUserName}
      </h1>
      <div className="flex flex-nowrap overflow-auto py-5 mt-2 overflow-y-hidden overflow">
        {props.studentCourses?.map((course, index) => (
          <div
            onClick={() => navigate(`/course/${course.courseId}/learn/lecture`)}
            key={uuidv4()}
            className="flex flex-col items-center bg-white border border-solid border-gray-200 shadow-md
             md:flex-row md:max-w-md md:max-h-36  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 
             dark:hover:bg-gray-700 cursor-pointer mr-3"
          >
            <img
              className="object-fill max-w-[12em] h-full "
              src={course.courseInformation?.coverImageUrl}
              onError={(e) => (e.currentTarget.src = notfoundSVG)}
              alt=""
            />
            <div className="flex flex-col justify-between leading-normal h-full w-32">
              <p className="p-4 text-sm font-bold tracking-tight text-gray-500 dark:text-white">
                {truncateString(course.title, 30)}
              </p>

              <BorderLinearProgress variant="determinate" value={props.studentProgresses[index]?.progress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyCurrentCourses;

// Note: styling for the progress bar
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
