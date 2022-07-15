import { FC } from "react";
import TeacherCoursesGuideSection from "../../components/UI/TeacherCoursesGuideSection";
import TeacherCreateCourseCard from "../../components/UI/TeacherCreateCourseCard";

type TeacherCoursesHomePageProps = {};

const TeacherCoursesHomePage: FC<TeacherCoursesHomePageProps> = (props) => {
  return (
    <>
      <TeacherCreateCourseCard />
      <TeacherCoursesGuideSection />
    </>
  );
};
export default TeacherCoursesHomePage;
