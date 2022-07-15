import React, { FC, useState } from "react";
import { IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddLectureCard from "../../components/teacher-create-course/AddLectureCard";
import { createLectureType } from "../../model/lecture";

type TeacherManageLecturePageProps = {};

const TeacherManageLecturePage: FC<TeacherManageLecturePageProps> = (props) => {
  const [lectureFields, setLectureFields] = useState<createLectureType[]>([
    {
      title: "",
      courseLectureDescription: "",
      lectureUrl: "",
      lectureDuration: "",
    },
  ]);

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
    let data: createLectureType[] = [...lectureFields];
    data.splice(index, 1);
    setLectureFields(data);
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(lectureFields);
  };

  return (
    <div
      className="h-fit rounded mb-12"
      style={{ boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 16%)" }}
    >
      <div className="border-b-2 border-0 border-solid border-gray-200">
        <h1 className="p-8 font-serif font-semibold text-2xl">Course Lectures</h1>
      </div>
      <form onSubmit={formSubmitHandler} className="mx-8 flex flex-col">
        <div className="flex justify-end ">
          <IconButton onClick={addAnotherLecture} aria-label="add-another-lecture" className="bg-black text-white my-4">
            <AddIcon />
          </IconButton>
        </div>
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
