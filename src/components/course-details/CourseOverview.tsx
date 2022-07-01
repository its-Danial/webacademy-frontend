import { FC } from "react";
import { OndemandVideo } from "@mui/icons-material";

import LoadingButton from "@mui/lab/LoadingButton";
import BorderCard from "../UI/BorderCard";
import certificateIcon from "../../assets/certificateIcon.png";
import CourseOverViewItem from "./list-tems/CourseOverviewItem";

type CourseOverviewProps = {};

const CourseOverview: FC<CourseOverviewProps> = (props) => {
  return (
    <div className="mx-auto w-2/3 p-9">
      <h2 className="text-gray-800">Course overview</h2>
      <div className="flex flex-row justify-between my-5">
        <div className="flex flex-col basis-1/2">
          <div className="flex flex-col">
            {/* TODO: This will need to be mapped out */}
            <CourseOverViewItem
              title="The ins and outs of HTML5, CSS3, and Modern JavaScript for
                  2021"
            />
            <CourseOverViewItem title="Make REAL web applications using cutting-edge technologies" />
          </div>
          <LoadingButton
            loading={true}
            loadingPosition="start"
            className="rounded-none normal-case py-2 bg-black text-gray-100"
            variant="contained"
          >
            Show details and course curriculum
          </LoadingButton>
        </div>
        <div className="basis-1/3">
          <BorderCard>
            <div className="flex flex-col">
              <div className="flex flex-row mb-3">
                <OndemandVideo className="w-12 h-10" fontSize="large" />
                <div className="flex items-center ml-4">
                  <h4 className="text-base">63.5 hours of video</h4>
                </div>
              </div>
              <div className="flex flex-row">
                <img src={certificateIcon} className="w-12 h-10 ml-1" alt="" />
                <div className="flex items-center ml-3">
                  <h4 className="text-base">Certificate of completion</h4>
                </div>
              </div>
            </div>
          </BorderCard>
        </div>
      </div>
    </div>
  );
};
export default CourseOverview;
