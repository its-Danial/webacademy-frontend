import { FC, useState } from "react";
import TeacherCreateFooter from "../../components/layout/TeacherCreateFooter";
import TeacherCreateNavBar from "../../components/layout/TeacherCreateNavBar";
import BioSettingsView from "../../components/teacher-create-course/BioSettingsView";
import PickCategoryView from "../../components/teacher-create-course/PickCategoryView";
import WorkingTitle from "../../components/teacher-create-course/WorkingTitle";

type TeacherCreateCoursePageProps = {};

const TeacherCreateCoursePage: FC<TeacherCreateCoursePageProps> = (props) => {
  const [bioText, setBioText] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [workingTitle, setWorkingTitle] = useState("");
  const [category, setCategory] = useState("");

  const views = [
    <BioSettingsView
      bioText={bioText}
      avatarUrl={avatarUrl}
      onBioTextEnter={setBioText}
      onAvatarUrlEnter={setAvatarUrl}
    />,
    <WorkingTitle workingTitle={workingTitle} onWorkingTitleEnter={setWorkingTitle} />,
    <PickCategoryView category={category} onCategorySelect={setCategory} />,
  ];

  const [currentViewIndex, setCurrentViewIndex] = useState(1);

  const onContinueClickHandler = () => {
    setCurrentViewIndex((prevIndex) => {
      if (prevIndex + 1 <= views.length) {
        return prevIndex + 1;
      } else {
        return prevIndex;
      }
    });
  };

  const onPreviousClickHandler = () => {
    setCurrentViewIndex((prevIndex) => prevIndex - 1);
  };

  const onCourseCreateClickHandler = () => {
    console.log(bioText);
    console.log(avatarUrl);
    console.log(workingTitle);
    console.log(category);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TeacherCreateNavBar totalSteps={views.length} currentStep={currentViewIndex} />
      {/* content */}
      <main className="flex-grow">{views.at(currentViewIndex - 1)}</main>
      <TeacherCreateFooter
        currentViewIndex={currentViewIndex}
        onPreviousClick={onPreviousClickHandler}
        onContinueClick={onContinueClickHandler}
        onCourseCreateClick={onCourseCreateClickHandler}
        totalSteps={views.length}
      />
    </div>
  );
};
export default TeacherCreateCoursePage;
