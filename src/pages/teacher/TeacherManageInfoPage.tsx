import { Button } from "@mui/material";
import { FC } from "react";

type TeacherManageInfoPageProps = {};

const TeacherManageInfoPage: FC<TeacherManageInfoPageProps> = (props) => {
  return (
    <div
      className="h-fit rounded mb-12"
      style={{ boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 16%)" }}
    >
      <div className="border-b-2 border-0 border-solid border-gray-200">
        <h1 className="p-8 font-serif font-semibold text-2xl">Course Information</h1>
      </div>
      <form className="mx-8 mt-9 flex flex-col">
        <div>
          <label htmlFor="CourseSummary" className="text-base font-bold">
            Course summary
          </label>
          <input
            type="text"
            id="CourseSummary"
            placeholder="Insert your course summary"
            className="h-6 mt-2 w-[97%] p-3 text-bae text-gray-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="CourseDescription" className="text-base font-bold">
            Course description
          </label>
          <textarea
            id="CourseDescription"
            rows={10}
            placeholder="Insert your course description"
            className="h-16 mt-2 w-[97%] p-3 text-bae text-gray-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="whatYouLearn" className="text-base font-bold">
            What is primarily taught in your course?{" "}
            <span className="text-xs text-gray-400 ml-3">For multiple items, separate by comma</span>
          </label>
          <input
            type="text"
            id="whatYouLearn"
            placeholder="What students will learn"
            className="h-6 mt-2 w-[97%] p-3 text-bae text-gray-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="coverImageUrl" className="text-base font-bold">
            Course image <span className="text-xs text-gray-400 ml-3">Input image url</span>
          </label>
          <input
            type="text"
            id="coverImageUrl"
            placeholder="Cover image url"
            className="h-6 mt-2 w-[97%] p-3 text-bae text-gray-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="previewVideoUrl" className="text-base font-bold">
            Promotional video <span className="text-xs text-gray-400 ml-3">Preview video url</span>
          </label>
          <input
            type="text"
            id="previewVideoUrl"
            placeholder="Preview video url"
            className="h-6 mt-2 w-[97%] p-3 text-bae text-gray-500"
          />
        </div>
        <div className="mt-4 mb-9 flex flex-row justify-between">
          <div className="basis-1/3">
            <label htmlFor="price" className="text-base font-bold">
              Course price <span className="text-xs text-gray-400 ml-3">American dollar</span>
            </label>
            <input
              type="number"
              id="price"
              placeholder="course price in number"
              className="h-6 mt-2 w-52 p-3 text-bae text-gray-500"
            />
          </div>
          <div className="basis-1/3 relative">
            <Button
              variant="contained"
              className="absolute bottom-0 right-0 bg-black text-white rounded-none px-10 py-3 normal-case"
              disableElevation
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TeacherManageInfoPage;
