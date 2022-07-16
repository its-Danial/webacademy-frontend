import { FC } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTeacherCoursesByTeacherId } from "../../network/api/course";
import { courseType } from "../../model/course";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from "react-loader-spinner";
import TeacherCoursesGuideSection from "../../components/UI/TeacherCoursesGuideSection";
import TeacherCreateCourseCard from "../../components/UI/TeacherCreateCourseCard";
import TeacherCurrentCourseCard from "../../components/UI/TeacherCurrentCourseCard";
import { Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

type TeacherCoursesHomePageProps = {};

const TeacherCoursesHomePage: FC<TeacherCoursesHomePageProps> = (props) => {
  const navigate = useNavigate();

  const teacherAuthUserId: number = useSelector((state: any) => state.teacherAuth.id);

  const { data: teacherCourses, isLoading } = useQuery<courseType[], Error>(
    ["teacher-courses", Number(teacherAuthUserId)],
    () => getTeacherCoursesByTeacherId(teacherAuthUserId),
    { enabled: !!teacherAuthUserId, retry: 1 }
  );

  const onCreateCourseClickHandler = () => {
    navigate("/teacher/course/create");
  };

  return (
    <>
      {isLoading && (
        <div className="flex justify-center my-12">
          <ThreeDots color="#1c1d1f" height={150} width={150} />
        </div>
      )}
      {/* Note: if teacher has courses */}
      {!isLoading && teacherCourses && (
        <div className="mt-12">
          <div className="flex justify-end">
            <Button
              onClick={onCreateCourseClickHandler}
              className="rounded-none bg-[#a435f0] normal-case py-3 px-5 text-sm"
              variant="contained"
              disableElevation
            >
              New Course
            </Button>
            {/* TODO: page content goes from here to here */}
          </div>
          {teacherCourses.map((course) => (
            <TeacherCurrentCourseCard key={uuidv4()} course={course} />
          ))}
        </div>
      )}

      {/* Note: if teacher doesnt have courses */}
      {!isLoading && !teacherCourses && <TeacherCreateCourseCard onCreateClick={onCreateCourseClickHandler} />}
      <TeacherCoursesGuideSection />
    </>
  );
};
export default TeacherCoursesHomePage;
