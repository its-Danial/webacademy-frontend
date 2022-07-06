import { FC } from "react";
import { Outlet } from "react-router-dom";
import CourseSelection from "../../components/home/CourseSelection";
import HomeCarousel from "../../components/home/HomeCarousel";
import Billboard from "../../components/UI/Billboard";
import Testimonials from "../../components/UI/Testimonials";
import CustomerFooter from "../../components/UI/CustomerFooter";
import MainContainer from "../../components/layout/MainContainer";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = (props) => {
  return (
    <MainContainer>
      <Outlet /> {/* Note: This is the alert after purchase */}
      <Billboard />
      {/* Todo: Implement a my current courses section here and render it if student has courses */}
      {/* NOTE: This will carousel courses will change based on different topic selected*/}
      <CourseSelection />
      {/* NOTE: This will carousel will have fixed courses */}
      <div className="px-8  mb-12">
        <h1 className="text-2xl text-gray-800 font-semibold dark:text-gray-100">
          Students are viewing
        </h1>
        <HomeCarousel />
      </div>
      <Testimonials />
      <CustomerFooter showHeading={true} />
    </MainContainer>
  );
};
export default HomePage;
