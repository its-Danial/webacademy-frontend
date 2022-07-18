import { FC } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import TeacherPerformanceCourseCard from "../../components/UI/TeacherPerformanceCourseCard";
import { courseType } from "../../model/course";
import {
  getEarningsPerCourseByTeacherId,
  getTeacherCoursesByTeacherId,
  getTotalEarningForCourseByTeacherId,
} from "../../network/api/course";

type TeacherPerformanceOverviewPageProps = {};

const TeacherPerformanceOverviewPage: FC<TeacherPerformanceOverviewPageProps> = (props) => {
  const teacherAuthUserId: number = useSelector((state: any) => state.teacherAuth.id);

  const { data: teacherTotalEarning } = useQuery<number, Error>(
    ["teacher-total-earning", Number(teacherAuthUserId)],
    () => getTotalEarningForCourseByTeacherId(Number(teacherAuthUserId)),
    { enabled: !!teacherAuthUserId }
  );

  const { data: teacherEarningPerCourseList } = useQuery<
    {
      courseId: number;
      totalEarnings: number;
    }[],
    Error
  >(
    ["teacher-earnings-per-course", Number(teacherAuthUserId)],
    () => getEarningsPerCourseByTeacherId(Number(teacherAuthUserId)),
    { enabled: !!teacherAuthUserId }
  );

  const { data: teacherCourses } = useQuery<courseType[], Error>(
    ["teacher-courses", Number(teacherAuthUserId)],
    () => getTeacherCoursesByTeacherId(Number(teacherAuthUserId)),
    { enabled: !!teacherAuthUserId }
  );

  return (
    <div className="w-full mb-9">
      <h1 className="font-serif text-4xl text-gray-700">Overview</h1>
      <p className="my-6 text-gray-500">Get top insights about your performance</p>
      <div className="flex flex-col border-1 w-full border-solid border-gray-200 shadow-3xl ">
        <div className="p-4 flex flex-col border-0 border-b-2 border-solid border-gray-300">
          <p>Total revenue</p>
          <h3 className="text-4xl font-normal mt-2">${teacherTotalEarning}.00</h3>
        </div>
        <div className="min-h-[400px]">
          {(!teacherCourses || teacherCourses.length === 0) && (
            <div className="flex justify-center mt-20">
              <h1 className="text-lg text-gray-600 font-medium">No Data available</h1>
            </div>
          )}
          {teacherCourses?.map((course) => (
            <TeacherPerformanceCourseCard
              key={uuidv4()}
              img={course.courseInformation.coverImageUrl}
              title={course.title}
              createdAt={course.createdAt}
              rating={course.courseRating}
              courseEarnings={teacherEarningPerCourseList?.find((element) => element.courseId === course.courseId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeacherPerformanceOverviewPage;
