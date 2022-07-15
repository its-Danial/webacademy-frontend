import { FC } from "react";
import { createLectureType } from "../../model/lecture";
import { IconButton, Tooltip } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

type AddLectureCardProps = {
  lectureData: createLectureType;
  index: number;
  onChangeHandler: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  onLectureDeleteHandler: (index: number) => void;
};

const AddLectureCard: FC<AddLectureCardProps> = (props) => {
  return (
    <div className="flex flex-row bg-gray-100 p-6  mb-3 border border-solid border-gray-300">
      <div className="flex flex-col justify-between">
        <h3 className="mr-4 text-3xl ">{props.index + 1}.</h3>
        <Tooltip title="Delete">
          <IconButton
            onClick={() => props.onLectureDeleteHandler(props.index)}
            aria-label="delete-lecture"
            className="bg-black text-white mr-3 w-5 h-5"
          >
            <ClearIcon className="w-4 h-4" />
          </IconButton>
        </Tooltip>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row ">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-base font-bold">
                Lecture title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={props.lectureData.title}
                onChange={(event) => props.onChangeHandler(props.index, event)}
                placeholder="Insert lecture title"
                className="h-6 mt-2 w-72 p-3 text-bae text-gray-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lectureUrl" className="text-base font-bold">
                Lecture url
              </label>
              <input
                type="text"
                id="lectureUrl"
                name="lectureUrl"
                value={props.lectureData.lectureUrl}
                onChange={(event) => props.onChangeHandler(props.index, event)}
                placeholder="Insert lecture url"
                className="h-6 mt-2 w-72 p-3 text-bae text-gray-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lectureDuration" className="text-base font-bold">
                Lecture duration
              </label>
              <input
                type="text"
                id="lectureDuration"
                name="lectureDuration"
                value={props.lectureData.lectureDuration}
                onChange={(event) => props.onChangeHandler(props.index, event)}
                placeholder="Insert lecture duration"
                className="h-6 mt-2 w-36 p-3 text-bae text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="courseLectureDescription" className="text-base font-bold">
            Lecture Description
          </label>
          <input
            type="text"
            id="courseLectureDescription"
            name="courseLectureDescription"
            value={props.lectureData.courseLectureDescription}
            onChange={(event) => props.onChangeHandler(props.index, event)}
            placeholder="Insert lecture description"
            className="h-6 mt-2 w-[97%] p-3 text-bae text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};
export default AddLectureCard;
