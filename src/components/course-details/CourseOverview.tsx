import { FC, useState } from "react";
import { OndemandVideo } from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import BorderCard from "../UI/BorderCard";
import certificateIcon from "../../assets/certificateIcon.png";
import CourseOverViewItem from "./list-items/CourseOverviewItem";
import LectureAccordion from "./LectureAccordion";
import DescriptionAccordion from "./DescriptionAccordion";

type CourseOverviewProps = {};

const CourseOverview: FC<CourseOverviewProps> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
              onClick={handleOpen}
              loading={false}
              startIcon={<></>}
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
                  <img
                    src={certificateIcon}
                    className="w-12 h-10 ml-1"
                    alt=""
                  />
                  <div className="flex items-center ml-3">
                    <h4 className="text-base">Certificate of completion</h4>
                  </div>
                </div>
              </div>
            </BorderCard>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* TODO: will need to pass course information to them */}
        <Box sx={style}>
          <DescriptionAccordion />
          <h2 style={{ marginBottom: "1rem", marginTop: "2rem" }}>
            Course content
          </h2>
          <LectureAccordion />
        </Box>
      </Modal>
    </>
  );
};
export default CourseOverview;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};