import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Typography, Button, Divider } from "@mui/material";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import logo from "../../assets/companyLogo.png";

type TeacherCreateNavBarProps = {
  totalSteps: number;
  currentStep: number;
};

const TeacherCreateNavBar: FC<TeacherCreateNavBarProps> = (props) => {
  const navigate = useNavigate();

  const onExitClickHandler = () => {
    navigate("/teacher/courses");
  };

  return (
    <AppBar position="static" className="bg-white h-[72px] flex flex-col">
      <div className="flex flex-row my-auto h-full justify-between">
        <div className="flex flex-row items-center">
          <img
            className="w-10 mx-3 cursor-pointer hover:bg-slate-200 rounded-full p-1 dark:hover:bg-slate-700"
            src={logo}
            alt="company logo"
          />
          <Typography variant="h6" component="div" sx={{ color: "black", mr: 3 }}>
            WebAcademy
          </Typography>
          <Divider orientation="vertical" className="bg-gray-300" />
          <h4 className="text-gray-500 font-normal text-xl ml-5">
            Step {props.currentStep} of {props.totalSteps}
          </h4>
        </div>
        <Button onClick={onExitClickHandler} color="inherit" className="text-purple normal-case mr-4 text-lg">
          Exit
        </Button>
      </div>
      <BorderLinearProgress
        variant="determinate"
        className="bg-gray-300"
        value={(props.currentStep / props.totalSteps) * 100}
        sx={{ color: "red" }}
      />
    </AppBar>
  );
};
export default TeacherCreateNavBar;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "#5624d0",
  },
}));
