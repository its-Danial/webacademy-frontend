import React, { FC, useEffect, useState } from "react";
import { IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddLectureCard from "../../components/teacher-create-course/AddLectureCard";
import { createLectureType, lectureType } from "../../model/lecture";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { deleteLecture, getLecturesByCourseId, updateAllLectures } from "../../network/api/lecture";
import { useSelector } from "react-redux";
import TeacherCourseUpdateAlert from "../../components/UI/TeacherCourseUpdateAlert";

type TeacherManageLecturePageProps = {};

const TeacherManageLecturePage: FC<TeacherManageLecturePageProps> = (props) => {
  const { courseId } = useParams();
  const queryClient = useQueryClient();
  const teacherAuthUserId = useSelector((state: any) => state.teacherAuth.id);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const { data: fetchedLectures, isLoading: lectureIsLoading } = useQuery<lectureType[], Error>(
    ["lectures", Number(courseId)],
    () => getLecturesByCourseId(Number(courseId))
  );

  const deleteLectureMutation = useMutation(deleteLecture);
  const updateAndAddLectureMutation = useMutation(updateAllLectures, {
    onSuccess: () => queryClient.invalidateQueries(["lectures", Number(courseId)]),
  });

  const [lectureFields, setLectureFields] = useState<createLectureType[] | lectureType[]>([
    {
      title: "",
      courseLectureDescription: "",
      lectureUrl: "",
      lectureDuration: "",
    },
  ]);

  useEffect(() => {
    if (fetchedLectures && fetchedLectures?.length > 0) {
      setLectureFields(fetchedLectures);
    }
  }, [fetchedLectures]);

  const lectureInputFormHandler = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    let data: createLectureType[] = [...lectureFields];
    //@ts-ignore
    data[index][event.target.name] = event.target.value;
    setLectureFields(data);
  };

  const addAnotherLecture = () => {
    let newLecture: createLectureType = {
      title: "",
      courseLectureDescription: "",
      lectureUrl: "",
      lectureDuration: "",
    };
    setLectureFields((prevLectures) => [...prevLectures, newLecture]);
  };

  const lectureDeleteHandler = (index: number) => {
    // @ts-ignore
    if (lectureFields.at(index)?.courseLectureId && !!teacherAuthUserId) {
      deleteLectureMutation.mutate(
        {
          teacherId: Number(teacherAuthUserId),
          courseId: Number(courseId),
          // @ts-ignore
          lectureId: Number(lectureFields.at(index)?.courseLectureId),
        },
        { onSuccess: () => setShowDeleteAlert(true) }
      );
    }
    let data: createLectureType[] = [...lectureFields];
    data.splice(index, 1);
    setLectureFields(data);
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    updateAndAddLectureMutation.mutate(
      {
        teacherId: Number(teacherAuthUserId),
        courseId: Number(courseId),
        updatedCourses: lectureFields,
      },
      { onSuccess: () => setShowSuccessAlert(true) }
    );
  };

  return (
    <div
      className="h-fit rounded mb-12"
      style={{ boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 16%)" }}
    >
      <div className="border-b-2 border-0 border-solid border-gray-200">
        <div className="flex justify-between p-8">
          <h1 className="font-serif font-semibold text-2xl">Course Lectures</h1>
          <IconButton onClick={addAnotherLecture} aria-label="add-another-lecture" className="bg-black text-white mr-3">
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <form onSubmit={formSubmitHandler} className="mx-8 mt-8 flex flex-col">
        {showSuccessAlert && (
          <TeacherCourseUpdateAlert
            variant="add"
            showSuccessAlert={showSuccessAlert}
            setShowSuccessAlert={setShowSuccessAlert}
          />
        )}
        {showDeleteAlert && (
          <TeacherCourseUpdateAlert
            variant="delete"
            showSuccessAlert={showDeleteAlert}
            setShowSuccessAlert={setShowDeleteAlert}
          />
        )}

        {/* Note: Lectures here */}
        {lectureFields.map((lectureField, index) => (
          <AddLectureCard
            key={index}
            onChangeHandler={lectureInputFormHandler}
            onLectureDeleteHandler={lectureDeleteHandler}
            lectureData={lectureField}
            index={index}
          />
        ))}
        <div className="flex justify-end mb-4">
          <Button
            type="submit"
            variant="contained"
            className=" right-0 bg-black text-white rounded-none px-10 py-3 normal-case"
            disableElevation
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
export default TeacherManageLecturePage;
