import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { teacherType } from "../../model/teacher";
import { getTeacherByTeacherId, updateTeacherBioAndAvatar } from "../../network/api/teacher";
import { addCourseByTeacherId } from "../../network/api/course";
import TeacherCreateFooter from "../../components/layout/TeacherCreateFooter";
import TeacherCreateNavBar from "../../components/layout/TeacherCreateNavBar";
import BioSettingsView from "../../components/teacher-create-course/BioSettingsView";
import PickCategoryView from "../../components/teacher-create-course/PickCategoryView";
import WorkingTitle from "../../components/teacher-create-course/WorkingTitle";

type TeacherCreateCoursePageProps = {};

const TeacherCreateCoursePage: FC<TeacherCreateCoursePageProps> = (props) => {
  const teacherAuthUser = useSelector((state: any) => state.teacherAuth);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: teacherProfile } = useQuery<teacherType, Error>(
    ["teacher-profile", Number(teacherAuthUser.id)],
    () => getTeacherByTeacherId(Number(teacherAuthUser.id)),
    { enabled: !!teacherAuthUser.id, retry: 1 }
  );

  const createCourseMutation = useMutation(addCourseByTeacherId, {
    onSuccess: () => {
      queryClient.invalidateQueries(["teacher-courses", Number(teacherAuthUser.id)]);
    },
  });
  const updateTeacherInfoMutation = useMutation(updateTeacherBioAndAvatar, {
    onSuccess: () => {
      queryClient.invalidateQueries(["teacher-profile", Number(teacherAuthUser.id)]);
    },
  });

  const [bioText, setBioText] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [workingTitle, setWorkingTitle] = useState("");
  const [category, setCategory] = useState<number | null>(null);

  const views = [
    <WorkingTitle workingTitle={workingTitle} onWorkingTitleEnter={setWorkingTitle} />,
    <PickCategoryView category={category} onCategorySelect={setCategory} />,
  ];

  if (!teacherProfile?.avatarPictureUrl || !teacherProfile?.bioText) {
    views.unshift(
      <BioSettingsView
        bioText={bioText}
        avatarUrl={avatarUrl}
        onBioTextEnter={setBioText}
        onAvatarUrlEnter={setAvatarUrl}
      />
    );
  }

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
    if (bioText.trim().length !== 0 && avatarUrl.trim().length !== 0) {
      updateTeacherInfoMutation.mutate({
        teacherId: Number(teacherAuthUser.id),
        newInfo: {
          bioText: bioText,
          avatarPictureUrl: avatarUrl,
        },
      });
      console.log("teacher got updated");
    }
    if (workingTitle.trim().length !== 0 && category) {
      console.log(category);
      createCourseMutation.mutate(
        {
          teacherId: Number(teacherAuthUser.id),
          courseData: {
            title: workingTitle,
            categories: [
              {
                categoryId: category,
              },
            ],
          },
        },
        { onSuccess: (data) => navigate(`/teacher/course/manage/${data.title}/${data.courseId}/information`) }
      );
    }
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
