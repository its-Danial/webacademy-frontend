import { FC, useState } from "react";
import { Stack } from "@mui/material";
import HomeCourseSelectionButton from "../UI/HomeCourseSelectionButton";
import BorderCard from "../UI/BorderCard";
import { courses } from "../../helper/homeCourseSelectionList";

import HomeCarousel from "./HomeCarousel";

type CourseSelectionProps = {};

const CourseSelection: FC<CourseSelectionProps> = (props) => {
  const [topicDesc, setTopicDesc] = useState(courses[0]);

  const onSelectTopicClickHandler = (courseIndex: number) => {
    setTopicDesc((prevState) => courses[courseIndex]);
  };

  return (
    <div className="px-8">
      <h1 className="mb-2 text-4xl font-serif tracking-tight text-gray-900 dark:text-white">
        A broad selection of courses
      </h1>
      <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
        Choose from 185,000 online video courses with new additions published
        every month
      </p>

      {/* NOTE : Topic Buttons */}

      <Stack direction="row" spacing={4}>
        {courses.map((course, index) => (
          <HomeCourseSelectionButton
            key={index}
            index={index}
            topicText={course.topic}
            onClick={onSelectTopicClickHandler}
          />
        ))}
      </Stack>

      {/* NOTE: The box area with border */}
      <BorderCard>
        <div className="md:w-2/3 w-full">
          <h1 className="text-2xl text-gray-800 font-semibold dark:text-gray-100">
            {topicDesc.heading}
          </h1>
          <p className="mt-2 mb-4 text-gray-500 dark:text-gray-400">
            {topicDesc.paragraph}
          </p>
          <button
            type="button"
            className="bg-gray-50 text-gray-900 hover:text-white border border-gray-800 
            hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 
            font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2dark:bg-gray-300 
             dark:border-gray-600 dark:text-gray-700 dark:hover:text-white 
             dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Explore {topicDesc.topic}
          </button>
        </div>

        {/* NOTE: car selection for courses */}
        {/* TODO: pass down courses to display when onSelectTopicClickHandler is called */}
        <HomeCarousel />
      </BorderCard>
    </div>
  );
};
export default CourseSelection;
