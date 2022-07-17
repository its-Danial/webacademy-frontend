import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import CourseSelection from "../../components/home/CourseSelection";
import HomeCarousel from "../../components/home/HomeCarousel";
import Billboard from "../../components/UI/Billboard";
import Testimonials from "../../components/UI/Testimonials";
import CustomerFooter from "../../components/UI/CustomerFooter";
import MainContainer from "../../components/layout/MainContainer";
import MyCurrentCourses from "../../components/home/MyCurrentCourses";
import { getAllCoursesByTopic } from "../../network/api/course";
import { courseType } from "../../model/course";
import { progressType } from "../../model/studentProgress";
import { getProgressByStudentId } from "../../network/api/studentProgress";
import { getStudentCoursesByStudentId } from "../../network/api/course";
import { calculateProgress } from "../../helper/progressCalculator";
import HomeImgBillboard from "../../components/UI/HomeImgBillboard";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = (props) => {
  const authUserId: number = useSelector((state: any) => state.auth.id);
  const authUserName: string = useSelector((state: any) => state.auth.user.fullName);
  // Note: This fetch is for the student courses on the buttom
  const { data: studentSectionCourses } = useQuery<courseType[], Error>(["topic-courses", "JavaScript"], () =>
    getAllCoursesByTopic("JavaScript")
  );

  const { data: studentCourses } = useQuery<courseType[], Error>(
    ["student-courses", Number(authUserId)],
    () => getStudentCoursesByStudentId(authUserId),
    { enabled: !!authUserId }
  );

  const { data: studentProgresses } = useQuery<progressType[], Error>(
    ["student-progresses", Number(authUserId)],
    () => getProgressByStudentId(authUserId),
    { enabled: !!authUserId }
  );

  const progressPerCourseList = calculateProgress(studentProgresses);

  return (
    <MainContainer>
      <Outlet /> {/* Note: This is the alert after purchase */}
      {/* <Billboard /> */}
      <HomeImgBillboard />
      {!!authUserId && studentCourses && studentCourses.length > 0 && (
        <MyCurrentCourses
          studentCourses={studentCourses}
          studentProgresses={progressPerCourseList}
          authUserName={authUserName}
        />
      )}
      <CourseSelection />
      <div className="px-8  mb-12">
        <h1 className="text-2xl text-gray-800 font-semibold dark:text-gray-100 mb-3">Students are viewing</h1>
        {/* This is the second carosuel */}
        <HomeCarousel courses={studentSectionCourses} />
      </div>
      <Testimonials />
      <CustomerFooter showHeading={true} />
    </MainContainer>
  );
};
export default HomePage;
