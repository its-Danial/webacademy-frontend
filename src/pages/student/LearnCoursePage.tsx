import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Footer from "../../components/layout/Footer";
import LectureNavBar from "../../components/layout/LectureNavBar";
import ReactPlayer from "react-player/youtube";
import WatchLectureAccordion from "../../components/learn-course-lecture/WatchLectureAccordion";
import AboutCourseSection from "../../components/learn-course-lecture/AboutCourseSection";
import { getCourseById } from "../../network/api/course";
import { getLecturesByCourseId } from "../../network/api/lecture";
import { courseType } from "../../model/course";
import { lectureType } from "../../model/lecture";
import { progressType } from "../../model/studentProgress";
import { getSingleCourseProgress, updateStudentSingleCourseProgress } from "../../network/api/studentProgress";

type LearnCoursePageProps = {};

const LearnCoursePage: FC<LearnCoursePageProps> = (props) => {
  const { courseId } = useParams();
  const queryClient = useQueryClient();
  const authUserId: number = useSelector((state: any) => state.auth.id);

  // fetch the course
  const { data: course, isLoading } = useQuery<courseType, Error>(["course", Number(courseId)], () =>
    getCourseById(Number(courseId))
  );
  // fetch its lectures
  const { data: lectures, isLoading: lectureIsLoading } = useQuery<lectureType[], Error>(
    ["lecture", Number(courseId)],
    () => getLecturesByCourseId(Number(courseId))
  );

  // fetch student progress for the current course
  const { data: studentSingleCourseProgress } = useQuery<progressType, Error>(
    ["student-course-progress", authUserId],
    () => getSingleCourseProgress(authUserId, Number(courseId)),
    { enabled: !!authUserId }
  );

  const firstLecture = lectures?.at(0)?.lectureUrl;
  const [selectedLectureVideo, setSelectedLectureVideo] = useState(firstLecture);

  const updateStudentProgressMutation = useMutation(updateStudentSingleCourseProgress, {
    onSuccess: () => {
      queryClient.invalidateQueries(["student-course-progress", Number(authUserId)]);
      queryClient.invalidateQueries(["student-progresses", Number(authUserId)]);
    },
  });

  const onWatchLectureClickHandler = (lectureId: number) => {
    lectures?.forEach((lecture) => {
      if (lecture.courseLectureId === lectureId) {
        setSelectedLectureVideo(lecture.lectureUrl);
      }
    });
    // TODO: apply progress updating mutation here
  };

  const onCompleteLectureHandler = () => {
    updateStudentProgressMutation.mutate({
      studentId: Number(authUserId),
      courseId: Number(courseId),
    });
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      <LectureNavBar courseTitle={course?.title} courseId={Number(courseId)} progress={studentSingleCourseProgress} />
      <main className="flex-grow flex flex-row justify-between">
        <div className="w-full overscroll-contain">
          <ReactPlayer
            controls={true}
            width={"100%"}
            height={"560px"}
            url={selectedLectureVideo}
            onEnded={onCompleteLectureHandler}
          />
          <AboutCourseSection />
        </div>
        {/* h-[calc(100vh-5.75rem)] */}
        <div className="basis-1/3 h-screen sticky top-0 overflow-y-scroll overscroll-contain">
          <WatchLectureAccordion onWatchLecture={onWatchLectureClickHandler} lectures={lectures} />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default LearnCoursePage;
