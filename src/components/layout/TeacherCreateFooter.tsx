import { FC } from "react";
import { AppBar, Button } from "@mui/material";

type TeacherCreateFooterProps = {
  onContinueClick: () => void;
  onPreviousClick: () => void;
  onCourseCreateClick: () => void;
  currentViewIndex: number;
  totalSteps: number;
};

const TeacherCreateFooter: FC<TeacherCreateFooterProps> = (props) => {
  const onContinueClickHandler = () => {
    props.onContinueClick();
  };

  const onPreviousClickHandler = () => {
    props.onPreviousClick();
  };

  return (
    <AppBar
      position="static"
      className="bg-white h-20 flex flex-col"
      sx={{ boxShadow: "0 -2px 4px rgb(0 0 0 / 8%), 0 -4px 12px rgb(0 0 0 / 8%)" }}
    >
      <div className="flex flex-row my-auto justify-between">
        {props.currentViewIndex === 1 && <div className="flex flex-row "></div>}
        {props.currentViewIndex !== 1 && (
          <Button
            onClick={onPreviousClickHandler}
            variant="outlined"
            disableElevation
            className="rounded-none text-black border-black normal-case ml-6 text-base p-3"
          >
            Previous
          </Button>
        )}
        {props.currentViewIndex !== props.totalSteps && (
          <Button
            onClick={onContinueClickHandler}
            variant="contained"
            disableElevation
            className="rounded-none text-white normal-case mr-6 text-base bg-black p-3"
          >
            Continue
          </Button>
        )}
        {props.currentViewIndex === props.totalSteps && (
          <Button
            onClick={props.onCourseCreateClick}
            variant="contained"
            disableElevation
            className="rounded-none text-white normal-case mr-6 text-base bg-black p-3"
          >
            Create course
          </Button>
        )}
      </div>
    </AppBar>
  );
};
export default TeacherCreateFooter;
