import { FC, useState } from "react";
import { Button, Menu, Typography } from "@mui/material";
import MyCoursesProgressItem from "./menu-items/MyCoursesProgressItem";
import { useQuery } from "react-query";
import { progressType } from "../../../model/studentProgress";
import { courseType } from "../../../model/course";
import { getProgressByStudentId } from "../../../network/api/studentProgress";
import { getStudentCoursesByStudentId } from "../../../network/api/course";
import { useSelector } from "react-redux";
import { calculateProgress } from "../../../helper/progressCalculator";
import { v4 as uuidv4 } from "uuid";

type MyCoursesDropDownProps = {};

const MyCoursesDropDown: FC<MyCoursesDropDownProps> = (props) => {
  const authUserId = useSelector((state: any) => state.auth.id);

  const { data: studentProgresses } = useQuery<progressType[], Error>(["student-progresses", authUserId], () =>
    getProgressByStudentId(authUserId)
  );

  const { data: studentCourses } = useQuery<courseType[], Error>(["student-courses", authUserId], () =>
    getStudentCoursesByStudentId(authUserId)
  );

  const progressPerCourseList = calculateProgress(studentProgresses);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    // What happens when the drop down button is clicked
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const noCoursesMenu = <Typography sx={{ p: 3 }}>No current courses</Typography>;

  const menuWithCourses = studentCourses?.map((course, index) => (
    <MyCoursesProgressItem
      key={uuidv4()}
      img={course.courseInformation.coverImageUrl}
      title={course.title}
      progress={progressPerCourseList[index].progress}
      showDivider={index !== studentCourses.length - 1}
    />
  ));

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="hidden sm:block normal-case text-gray-900 hover:text-blue-600 dark:text-gray-300 
        dark:hover:text-blue-500"
      >
        My Courses
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        // Note: this is for the little triangle on top
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 3.5,
            // for the arrow
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0.5,
              right: 14,
              width: 15,
              height: 15,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* BUG: this mapping for progress and course might not be correct, check later */}

        {studentCourses?.length === 0 ? noCoursesMenu : menuWithCourses}

        {/* {studentCourses?.map((course, index) => (
          <MyCoursesProgressItem
            key={uuidv4()}
            img={course.courseInformation.coverImageUrl}
            title={course.title}
            progress={progressPerCourseList[index].progress}
            showDivider={index !== studentCourses.length - 1}
          />
        ))} */}
      </Menu>
    </>
  );
};
export default MyCoursesDropDown;
