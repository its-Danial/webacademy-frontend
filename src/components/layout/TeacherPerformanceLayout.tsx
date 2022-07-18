import { FC } from "react";
import { Chat, OndemandVideoOutlined, CastForEducation, AutoGraph, HelpCenter } from "@mui/icons-material";
import { NavLink, Outlet } from "react-router-dom";

type TeacherPerformancePageProps = {};

const TeacherPerformancePage: FC<TeacherPerformancePageProps> = (props) => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col mr-16">
          <NavLink
            to={"/teacher/performance/overview"}
            className={({ isActive }) => (isActive ? "text-black no-underline" : "no-underline text-gray-400")}
          >
            <h3 className="text-lg">Overview</h3>
          </NavLink>
          <NavLink
            to={"/teacher/performance/students"}
            className={({ isActive }) => (isActive ? "text-black no-underline" : "no-underline text-gray-400")}
          >
            <h3 className="text-lg mt-6">Students</h3>
          </NavLink>
        </div>
        <Outlet />
      </div>
      {/* Note: Bottom Icon part */}
      <div>
        <div className="flex justify-center">
          <p className="text-gray-500">Have questions? Here are our most popular instructor resources.</p>
        </div>
        <div className="flex flex-row justify-evenly mt-16">
          <div className="flex flex-col w-52 items-center">
            <OndemandVideoOutlined className="w-12 h-12" />
            <h6 className="w-full text-center text-base underline underline-offset-4 text-[#5624d0] mt-4">
              Test Video
            </h6>
            <p className="w-full text-center my-4 text-sm font-normal text-gray-600">
              Send us a sample video and get expert feedback.
            </p>
          </div>
          <div className="flex flex-col w-52 items-center">
            <Chat className="w-12 h-12" />
            <h6 className="w-full text-center text-base underline underline-offset-4 text-[#5624d0] mt-4">
              Instructor Community
            </h6>
            <p className="w-full text-center my-4 text-sm font-normal text-gray-600">
              Connect with experienced instructors. Ask questions, browse discussions, and more.
            </p>
          </div>
          <div className="flex flex-col w-52 items-center">
            <CastForEducation className="w-12 h-12" />
            <h6 className="w-full text-center text-base underline underline-offset-4 text-[#5624d0] mt-4">
              Teaching Center
            </h6>
            <p className="w-full text-center my-4 text-sm font-normal text-gray-600">
              Learn about best practices for teaching on WebAcademy.
            </p>
          </div>
          <div className="flex flex-col w-52 items-center">
            <AutoGraph className="w-12 h-12" />
            <h6 className="w-full text-center text-base underline underline-offset-4 text-[#5624d0] mt-4">
              Marketplace Insights
            </h6>
            <p className="w-full text-center my-4 text-sm font-normal text-gray-600">
              Validate your course topic by exploring our marketplace supply and demand.
            </p>
          </div>
          <div className="flex flex-col w-52 items-center">
            <HelpCenter className="w-12 h-12" />
            <h6 className="w-full text-center text-base underline underline-offset-4 text-[#5624d0] mt-4">
              Help and Support
            </h6>
            <p className="w-full text-center my-4 text-sm font-normal text-gray-600">
              Browse our Help Center or contact our support team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeacherPerformancePage;
