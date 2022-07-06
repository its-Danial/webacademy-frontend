import { FC } from "react";
import Footer from "../../components/layout/Footer";
import LectureNavBar from "../../components/layout/LectureNavBar";
import ReactPlayer from "react-player/youtube";
import WatchLectureAccordion from "../../components/learn-course-lecture/WatchLectureAccordion";
import AboutCourseSection from "../../components/learn-course-lecture/AboutCourseSection";

type LearnCoursePageProps = {};

const LearnCoursePage: FC<LearnCoursePageProps> = (props) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      <LectureNavBar />
      <main className="flex-grow flex flex-row justify-between">
        <div className="w-full overscroll-contain">
          <ReactPlayer
            controls={true}
            width={"100%"}
            height={"560px"}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
          <AboutCourseSection />
        </div>
        <div className="basis-1/3 h-[calc(100vh-5.75rem)] sticky top-0 overflow-y-scroll overscroll-contain">
          <WatchLectureAccordion />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default LearnCoursePage;
