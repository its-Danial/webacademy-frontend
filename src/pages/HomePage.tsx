import { FC } from "react";
import CourseSelection from "../components/home/CourseSelection";
import Billboard from "../components/UI/Billboard";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = (props) => {
  return (
    <>
      <Billboard />
      <CourseSelection />
    </>
  );
};
export default HomePage;
