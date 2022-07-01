import { FC } from "react";
import CourseInfoHeader from "../components/course-details/CourseInfoHeader";
import CourseOverview from "../components/course-details/CourseOverview";

type CourseDetailsPageProps = {};

const CourseDetailsPage: FC<CourseDetailsPageProps> = (props) => {
  return (
    <>
      <CourseInfoHeader />
      <CourseOverview />
    </>
  );
};
export default CourseDetailsPage;
