import { FC, useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { newCourseInformation } from "../../model/course";
import { getCourseById, updateCourseInformationByCourseId } from "../../network/api/course";
import { courseType } from "../../model/course";
import TeacherCourseUpdateAlert from "../../components/UI/TeacherCourseUpdateAlert";

type TeacherManageInfoPageProps = {};

const TeacherManageInfoPage: FC<TeacherManageInfoPageProps> = (props) => {
  const { courseId } = useParams();

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [courseInfoData, setCourseInfoData] = useState<newCourseInformation>({
    price: 0,
    whatYouLearn: "",
    summary: "",
    description: "",
    coverImageUrl: "",
    previewVideoUrl: "",
    totalDuration: 0,
  });

  const { data: fetchedCourse } = useQuery<courseType, Error>(["course", Number(courseId)], () =>
    getCourseById(Number(courseId))
  );

  const { mutate: updateCourseInformationMutation, isLoading: mutationIsLoading } = useMutation(
    updateCourseInformationByCourseId
  );

  console.log(fetchedCourse);

  useEffect(() => {
    if (fetchedCourse?.courseInformation) {
      setCourseInfoData(fetchedCourse.courseInformation);
    }
  }, [fetchedCourse]);

  const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCourseInfoData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };

  const onSaveClickHandler = () => {
    updateCourseInformationMutation(
      { courseId: Number(courseId), newCourseInformation: courseInfoData },
      { onSuccess: () => setShowSuccessAlert(true) }
    );
  };

  return (
    <div
      className="h-fit rounded mb-12"
      style={{ boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 16%)" }}
    >
      <div className="border-b-2 border-0 border-solid border-gray-200">
        <h1 className="p-8 font-serif font-semibold text-2xl">Course Information</h1>
      </div>
      <form className="mx-8 mt-9 flex flex-col">
        {showSuccessAlert && (
          <TeacherCourseUpdateAlert
            variant="add"
            showSuccessAlert={showSuccessAlert}
            setShowSuccessAlert={setShowSuccessAlert}
          />
        )}
        <div>
          <label htmlFor="summary" className="text-base font-bold">
            Course summary
          </label>
          <input
            value={courseInfoData.summary}
            onChange={inputOnChangeHandler}
            id="summary"
            name="summary"
            type="text"
            placeholder="Insert your course summary"
            className="h-6 mt-2 w-[97%] p-3 text-bae text-gray-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="text-base font-bold">
            Course description
          </label>
          <textarea
            value={courseInfoData.description}
            onChange={inputOnChangeHandler}
            id="description"
            name="description"
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
            value={courseInfoData.whatYouLearn}
            onChange={inputOnChangeHandler}
            type="text"
            id="whatYouLearn"
            name="whatYouLearn"
            placeholder="What students will learn"
            className="h-6 mt-2 w-[97%] p-3 text-bae text-gray-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="coverImageUrl" className="text-base font-bold">
            Course image <span className="text-xs text-gray-400 ml-3">Input image url</span>
          </label>
          <input
            value={courseInfoData.coverImageUrl}
            onChange={inputOnChangeHandler}
            type="text"
            id="coverImageUrl"
            name="coverImageUrl"
            placeholder="Cover image url"
            className="h-6 mt-2 w-[97%] p-3 text-bae text-gray-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="previewVideoUrl" className="text-base font-bold">
            Promotional video <span className="text-xs text-gray-400 ml-3">Preview video url</span>
          </label>
          <input
            value={courseInfoData.previewVideoUrl}
            onChange={inputOnChangeHandler}
            type="text"
            id="previewVideoUrl"
            name="previewVideoUrl"
            placeholder="Preview video url"
            className="h-6 mt-2 w-[97%] p-3 text-bae text-gray-500"
          />
        </div>
        <div className="mt-4 mb-9 flex flex-row justify-between">
          <div className="basis-1/3 flex flex-row">
            <div>
              <label htmlFor="price" className="text-base font-bold">
                Course price <span className="text-xs text-gray-400 ml-2">American dollar</span>
              </label>
              <input
                value={courseInfoData.price}
                onChange={inputOnChangeHandler}
                type="number"
                id="price"
                name="price"
                placeholder="Course price in number"
                className="h-6 mt-2 w-52 p-3 text-bae text-gray-500"
              />
            </div>
            <div className="ml-10">
              <div className="w-full">
                <label htmlFor="totalDuration" className="text-base font-bold w-full">
                  Course duration <span className="text-xs text-gray-400 ml-2">Total duration hours</span>
                </label>
              </div>
              <input
                value={courseInfoData.totalDuration}
                onChange={inputOnChangeHandler}
                type="number"
                id="totalDuration"
                name="totalDuration"
                placeholder="Expected total duration"
                className="h-6 mt-2 w-52 p-3 text-bae text-gray-500"
              />
            </div>
          </div>
          <div className="basis-1/3 relative">
            <LoadingButton
              onClick={onSaveClickHandler}
              loading={mutationIsLoading}
              startIcon={<></>}
              loadingPosition="start"
              variant="contained"
              className="absolute bg-black bottom-0 right-0 text-white rounded-none px-10 py-3
               normal-case disabled:text-gray-100 disabled:bg-gray-400"
              disableElevation
            >
              Save
            </LoadingButton>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TeacherManageInfoPage;
