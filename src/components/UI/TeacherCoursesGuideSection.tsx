import { FC } from "react";
import { Chat, OndemandVideoOutlined, CastForEducation, AutoGraph, HelpCenter } from "@mui/icons-material";

type TeacherCoursesGuideSectionProps = {};

const TeacherCoursesGuideSection: FC<TeacherCoursesGuideSectionProps> = (props) => {
  return (
    <>
      <div className="mt-12">
        <div className="flex justify-center">
          <p className="text-gray-500">Based on your experience, we think these resources will be helpful.</p>
        </div>

        <div className="flex border-1 border-solid border-gray-200 shadow-3xl p-3 mt-12 mb-6">
          <div className="basis-[45%] flex justify-center">
            <img className="w-56" src="https://s.udemycdn.com/instructor/dashboard/engaging-course-2x.jpg" alt="" />
          </div>
          <div className="basis-[55%] flex flex-col justify-between items-start">
            <h4 className="text-2xl font-light text-gray-800 mt-6">Create an Engaging Course</h4>
            <p className="w-4/5 text-base font-light">
              Whether you've been teaching for years or are teaching for the first time, you can make an engaging
              course. We've compiled resources and best practices to help you get to the next level, no matter where
              you're starting.
            </p>
            <button className="cursor-pointer bg-transparent text-purple-700 border-none p-2 pl-0 text-base underline underline-offset-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* Note: Two Box middle */}

      <div className="flex flex-row justify-between mb-16">
        <div className="basis-[49%] flex border-1 border-solid border-gray-200 shadow-3xl">
          <img
            className="w-52 m-3 ml-12"
            src="https://s.udemycdn.com/instructor/dashboard/video-creation-2x.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between items-start m-5">
            <h4 className="font-normal text-lg mt-5">Get Started with Video</h4>
            <p className="w-[90%] text-base font-light">
              Quality video lectures can set your course apart. Use our resources to learn the basics.
            </p>
            <button className="cursor-pointer bg-transparent text-purple-700 border-none p-2 pl-0 text-base underline underline-offset-4">
              Get Started
            </button>
          </div>
        </div>
        <div className="basis-[49%] flex border-1 border-solid border-gray-200 shadow-3xl">
          <img
            className="w-52 m-3  ml-12"
            src="https://s.udemycdn.com/instructor/dashboard/build-audience-2x.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between items-start m-5">
            <h4 className="font-normal text-lg mt-5">Build Your Audience</h4>
            <p className="w-[90%] text-base font-light">Set your course up for success by building your audience.</p>
            <button className="cursor-pointer bg-transparent text-purple-700 border-none p-2 pl-0 text-base underline underline-offset-4">
              Get Started
            </button>
          </div>
        </div>
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
export default TeacherCoursesGuideSection;
