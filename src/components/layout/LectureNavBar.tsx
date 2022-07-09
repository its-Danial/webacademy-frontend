import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Divider, Toolbar } from "@mui/material";
import logo from "../../assets/companyLogo.png";

import ProgressMenu from "../learn-course-lecture/ProgressMenu";

type LectureNavBarProps = {};

const LectureNavBar: FC<LectureNavBarProps> = (props) => {
  const navigate = useNavigate();
  return (
    <AppBar className="bg-black shadow-none" position="static">
      <Toolbar>
        <img
          onClick={() => navigate("/")}
          className="w-10 cursor-pointer hover:bg-gray-700 rounded-full p-1 mr-6"
          src={logo}
          alt="company logo"
        />
        <Divider
          orientation="vertical"
          className="bg-gray-500"
          variant="middle"
          flexItem
        />
        <div className="flex-grow">
          <Link
            to="/course/12"
            className="text-gray-100 no-underline font-light hover:text-gray-300 ml-6"
          >
            Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2022
          </Link>
        </div>
        {/* TODO: sending progress to it */}
        <ProgressMenu />
      </Toolbar>
    </AppBar>
  );
};
export default LectureNavBar;
