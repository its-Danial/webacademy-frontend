import { FC } from "react";
import TeacherPerformanceCourseCard from "../../components/UI/TeacherPerformanceCourseCard";

type TeacherPerformanceOverviewPageProps = {};

const TeacherPerformanceOverviewPage: FC<TeacherPerformanceOverviewPageProps> = (props) => {
  return (
    <div className="w-full">
      <h1 className="font-serif text-4xl text-gray-700">Overview</h1>
      <p className="my-6 text-gray-500">Get top insights about your performance</p>
      <div className="flex flex-col border-1 w-full border-solid border-gray-200 shadow-3xl mb-6">
        <div className="p-4 flex flex-col border-0 border-b-2 border-solid border-gray-300">
          <p>Total revenue</p>
          <h3 className="text-4xl font-normal mt-2">$0.00</h3>
        </div>
        <div className="min-h-[400px] ">
          <TeacherPerformanceCourseCard />
        </div>
      </div>
    </div>
  );
};
export default TeacherPerformanceOverviewPage;
