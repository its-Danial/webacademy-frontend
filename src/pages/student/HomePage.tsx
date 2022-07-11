import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import CourseSelection from "../../components/home/CourseSelection";
import HomeCarousel from "../../components/home/HomeCarousel";
import Billboard from "../../components/UI/Billboard";
import Testimonials from "../../components/UI/Testimonials";
import CustomerFooter from "../../components/UI/CustomerFooter";
import MainContainer from "../../components/layout/MainContainer";
import { getAllCoursesByTopic } from "../../network/api/course";
import { courseType } from "../../model/course";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = (props) => {
  // Note: This fetch is for the student courses on the buttom
  const { data: studentSectionCourses } = useQuery<courseType[], Error>(["topic-courses", "JavaScript"], () =>
    getAllCoursesByTopic("JavaScript")
  );

  return (
    <MainContainer>
      <Outlet /> {/* Note: This is the alert after purchase */}
      <Billboard />
      {/* Todo: Implement a my current courses section here and render it if student has courses */}
      <CourseSelection />
      <div className="px-8  mb-12">
        <h1 className="text-2xl text-gray-800 font-semibold dark:text-gray-100">Students are viewing</h1>
        {/* This is the second carosuel */}
        <HomeCarousel courses={studentSectionCourses} />
      </div>
      <Testimonials />
      <CustomerFooter showHeading={true} />
    </MainContainer>
  );
};
export default HomePage;
