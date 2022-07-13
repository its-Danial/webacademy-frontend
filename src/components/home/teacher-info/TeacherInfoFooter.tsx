import { FC } from "react";
import { Button } from "@mui/material";

type TeacherInfoFooterProps = {
  onGetStartedClick: () => void;
};

const TeacherInfoFooter: FC<TeacherInfoFooterProps> = (props) => {
  const onGetStartedClickHandler = () => {
    props.onGetStartedClick();
  };

  return (
    <div className="bg-gray-100">
      <div className="py-28 px-24 flex flex-col w-2/5 mx-auto text-center">
        <h4 className="font-serif text-[2.5rem]">Become an instructor today</h4>
        <p className="text-2xl text-gray-700 my-6">Join one of the world’s largest online learning marketplaces.</p>
        <Button
          onClick={onGetStartedClickHandler}
          variant="contained"
          disableElevation
          className="rounded-none bg-black normal-case w-1/2 mx-auto py-3"
        >
          Get started
        </Button>
      </div>
    </div>
  );
};
export default TeacherInfoFooter;
