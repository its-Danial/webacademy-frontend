import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";

type TeacherManageNavBarProps = {
  courseTitle: string | undefined;
};

const TeacherManageNavBar: FC<TeacherManageNavBarProps> = (props) => {
  const navigate = useNavigate();

  const onBlackClickHandler = () => {
    navigate("/teacher/courses");
  };
  return (
    <AppBar position="static" className="bg-black">
      <Toolbar>
        <Button
          onClick={onBlackClickHandler}
          startIcon={<ArrowBackIos className="text-sm" />}
          variant="text"
          className="text-white normal-case font-light text-base hover:text-gray-300"
        >
          Back to courses
        </Button>
        <h2 className="text-white font-semibold ml-4 text-lg">{props.courseTitle}</h2>
      </Toolbar>
    </AppBar>
  );
};
export default TeacherManageNavBar;
