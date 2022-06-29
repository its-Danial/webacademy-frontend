import { FC } from "react";
import CourseSelection from "../components/home/CourseSelection";
import HomeCarousel from "../components/home/HomeCarousel";
import Billboard from "../components/UI/Billboard";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = (props) => {
  return (
    <>
      <Billboard />
      {/* NOTE: This will carousel courses will change based on different topic selected*/}
      <CourseSelection />
      {/* NOTE: This will carousel will have fixed courses */}
      <div className="px-8  mb-12">
        <h1 className="text-2xl text-gray-800 font-semibold dark:text-gray-100">
          Students are viewing
        </h1>
        <HomeCarousel />
      </div>
    </>
  );
};
export default HomePage;
