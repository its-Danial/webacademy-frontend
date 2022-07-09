import { FC } from "react";
import CourseInfoHeader from "../../components/course-details/CourseInfoHeader";
import CourseOverview from "../../components/course-details/CourseOverview";
import SkillAndTechnologiesList from "../../components/course-details/SkillAndTechnologiesList";
import TeacherInfo from "../../components/course-details/TeacherInfo";
import TopCompaniesFooter from "../../components/UI/TopCompaniesFooter";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCourseById } from "../../network/api/course";
import { getLecturesByCourseId } from "../../network/api/lecture";
import { courseType } from "../../model/course";
import { lectureType } from "../../model/lecture";

type CourseDetailsPageProps = {};

const CourseDetailsPage: FC<CourseDetailsPageProps> = (props) => {
  const { courseId } = useParams<string>();

  const { data: course, isLoading } = useQuery<courseType, Error>(["course", courseId], () =>
    getCourseById(courseId)
  );
  const { data: lectures, isLoading: lectureIsLoading } = useQuery<lectureType[], Error>(
    ["lecture", courseId],
    () => getLecturesByCourseId(courseId)
  );

  return (
    <>
      <CourseInfoHeader isLoading={isLoading} course={course} />
      <CourseOverview
        isLoading={isLoading}
        course={course}
        lectures={lectures}
        lectureIsLoading={lectureIsLoading}
      />
      <SkillAndTechnologiesList technologies={course?.categories} />
      <TeacherInfo teacher={course?.teacher} />
      <TopCompaniesFooter />
    </>
  );
};
export default CourseDetailsPage;
