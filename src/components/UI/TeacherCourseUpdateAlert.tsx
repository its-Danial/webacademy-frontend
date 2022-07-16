import { FC } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

type TeacherCourseUpdateAlertProps = { showSuccessAlert: boolean; setShowSuccessAlert: (newState: boolean) => void };

const TeacherCourseUpdateAlert: FC<TeacherCourseUpdateAlertProps> = (props) => {
  return (
    <Collapse in={props.showSuccessAlert}>
      <Alert
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
        Course updated successfully
      </Alert>
    </Collapse>
  );
};
export default TeacherCourseUpdateAlert;
