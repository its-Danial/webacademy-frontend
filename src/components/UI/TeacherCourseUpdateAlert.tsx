import { FC } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

type TeacherCourseUpdateAlertProps = {
  variant: string;
  showSuccessAlert: boolean;
  setShowSuccessAlert: (newState: boolean) => void;
};

const TeacherCourseUpdateAlert: FC<TeacherCourseUpdateAlertProps> = (props) => {
  return (
    <Collapse in={true}>
      <Alert
        severity={props.variant === "add" ? "success" : "info"}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              props.setShowSuccessAlert(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {props.variant === "add" ? "Successfully updated" : "Successfully deleted"}
      </Alert>
    </Collapse>
  );
};
export default TeacherCourseUpdateAlert;
