import { FC } from "react";
import { Button } from "@mui/material";
import teacherImg from "../../../assets/teacher-billboard.jpeg";

type TeacherInfoHeaderBillboardProps = {
  onGetStartedClick: () => void;
};

const TeacherInfoHeaderBillboard: FC<TeacherInfoHeaderBillboardProps> = (props) => {
  const onGetStartedClickHandler = () => {
    props.onGetStartedClick();
  };
  return (
    <div className="relative">
      <img className="w-full h-[38rem] object-cover " src={teacherImg} alt="" />
      <div className="absolute top-1/3 left-[10%]  w-3/4">
        <div className="flex flex-col w-80">
          <h1 className="text-5xl font-serif font-semibold">Come teach with us</h1>
          <p className="text-xl mt-4 text-gray-800 font-light">
            Become an instructor and change lives — including your own
          </p>
          <Button
            onClick={onGetStartedClickHandler}
            variant="contained"
            disableElevation
            className="normal-case bg-black mt-4 h-12 rounded-none"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};
export default TeacherInfoHeaderBillboard;
