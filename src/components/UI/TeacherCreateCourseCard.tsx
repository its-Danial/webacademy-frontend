import { FC } from "react";
import { Button } from "@mui/material";

type TeacherCreateCourseCardProps = {};

const TeacherCreateCourseCard: FC<TeacherCreateCourseCardProps> = (props) => {
  return (
    <div className="flex justify-between items-center border-1 border-solid shadow-3xl border-gray-200 p-12 my-12">
      <p className="text-gray-500">Jump Into Course Creation</p>
      <Button
        className="rounded-none bg-[#a435f0] normal-case py-3 px-16 text-base"
        variant="contained"
        disableElevation
      >
        Create Your Course
      </Button>
      {/* TODO: page content goes from here to here */}
    </div>
  );
};
export default TeacherCreateCourseCard;
