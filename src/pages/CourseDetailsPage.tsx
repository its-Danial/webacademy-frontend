import { FC } from "react";
import CourseInfoHeader from "../components/course-details/CourseInfoHeader";
import CourseOverview from "../components/course-details/CourseOverview";
import SkillAndTechnologiesList from "../components/course-details/SkillAndTechnologiesList";
import TeacherInfo from "../components/course-details/TeacherInfo";

type CourseDetailsPageProps = {};

const CourseDetailsPage: FC<CourseDetailsPageProps> = (props) => {
  return (
    <>
      <CourseInfoHeader />
      <CourseOverview />
      <SkillAndTechnologiesList />
      <TeacherInfo />
    </>
  );
};
export default CourseDetailsPage;
