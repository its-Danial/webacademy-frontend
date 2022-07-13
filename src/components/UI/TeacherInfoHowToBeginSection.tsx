import { FC, useState } from "react";

type TeacherInfoHowToBeginSectionProps = {};

const TeacherInfoHowToBeginSection: FC<TeacherInfoHowToBeginSectionProps> = (props) => {
  const [contentView, setContentView] = useState("curriculumView");

  const curriculumView = (
    <div className="mt-4 flex flex-row justify-evenly">
      <div className="flex flex-col w-96 my-auto">
        <p className="text-lg text-gray-600">
          You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace
          Insights tool.
        </p>
        <p className="mt-2 text-lg text-gray-600">The way that you teach — what you bring to it — is up to you.</p>
        <p className="font-bold my-4 text-lg">How we help you</p>
        <p className="text-lg text-gray-600">
          We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum
          pages help keep you organized.
        </p>
      </div>
      <img className="w-[480px]" src="https://s.udemycdn.com/teaching/plan-your-curriculum-2x-v3.jpg" alt="" />
    </div>
  );

  const videoView = (
    <div className="mt-4 flex flex-row justify-evenly">
      <div className="flex flex-col w-96 my-auto">
        <p className="text-lg text-gray-600">
          Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.
        </p>
        <p className="mt-2 text-lg text-gray-600">
          If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of
          video for a paid course.
        </p>
        <p className="font-bold my-4 text-lg">How we help you</p>
        <p className="text-lg text-gray-600">
          Our support team is available to help you throughout the process and provide feedback on test videos.
        </p>
      </div>
      <img className="w-[480px]" src="https://s.udemycdn.com/teaching/record-your-video-2x-v3.jpg" alt="" />
    </div>
  );

  const courseView = (
    <div className="mt-4 flex flex-row justify-evenly">
      <div className="flex flex-col w-96 my-auto">
        <p className="text-lg text-gray-600">
          Gather your first ratings and reviews by promoting your course through social media and your professional
          networks.
        </p>
        <p className="mt-2 text-lg text-gray-600">
          Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.
        </p>
        <p className="font-bold my-4 text-lg">How we help you</p>
        <p className="text-lg text-gray-600">
          Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to
          courses. There’s even more opportunity for courses chosen for WebAcademy.
        </p>
      </div>
      <img className="w-[480px]" src="https://s.udemycdn.com/teaching/launch-your-course-2x-v3.jpg" alt="" />
    </div>
  );

  return (
    <div className="mx-auto w-[90%]">
      <h2 className="mx-auto w-72 text-center text-[2.5rem] font-serif my-[4.8rem]">How to begin</h2>
      <div className="mx-6">
        <div className="flex justify-center">
          <div className="flex flex-row justify-center border-0 border-b-2 border-solid border-gray-300">
            <button
              value={contentView}
              onClick={() => setContentView("curriculumView")}
              className="py-1 pl-0 px-4 text-2xl font-semibold bg-transparent border-0 cursor-pointer text-gray-500 focus:text-black hover:text-black focus:underline underline-offset-[10px]"
            >
              Plan your curriculum
            </button>
            <button
              value={contentView}
              onClick={() => setContentView("videoView")}
              className="mx-10 py-1 px-4 text-2xl font-semibold bg-transparent border-0 cursor-pointer text-gray-500 focus:text-black hover:text-black focus:underline underline-offset-[10px]"
            >
              Record your video
            </button>
            <button
              value={contentView}
              onClick={() => setContentView("courseView")}
              className="py-1 pr-0 px-4 text-2xl font-semibold bg-transparent border-0 cursor-pointer text-gray-500 focus:text-black hover:text-black focus:underline underline-offset-[10px]"
            >
              Launch your course
            </button>
          </div>
        </div>
      </div>
      {contentView === "curriculumView" && curriculumView}
      {contentView === "videoView" && videoView}
      {contentView === "courseView" && courseView}
    </div>
  );
};
export default TeacherInfoHowToBeginSection;
