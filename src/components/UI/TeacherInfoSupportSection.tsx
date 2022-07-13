import { FC } from "react";

type TeacherInfoSupportSectionProps = {};

const TeacherInfoSupportSection: FC<TeacherInfoSupportSectionProps> = (props) => {
  return (
    <div className="flex flex-row mt-16 mb-16">
      <img className="w-[430px] " src="https://s.udemycdn.com/teaching/support-1-2x-v3.jpg" alt="" />
      <div className="flex flex-col text-center my-auto w-1/2 mx-4">
        <h4 className="text-[2.5rem] font-serif mb-4">You won’t have to do it alone</h4>
        <p className="text-lg text-gray-700">
          Our <span className="font-bold">Instructor Support Team</span> is here to answer your questions and review
          your test video, while our <span className="font-bold">Teaching Center</span> gives you plenty of resources to
          help you through the process. Plus, get the support of experienced instructors in our{" "}
          <span className="font-bold">online community.</span>
        </p>
        <p className="text-[#5624d0] font-bold text-sm mt-5 underline cursor-pointer">
          Need more details before you start? Learn more.
        </p>
      </div>
      <img className="w-[430px]" src="https://s.udemycdn.com/teaching/support-2-2x-v3.jpg" alt="" />
    </div>
  );
};
export default TeacherInfoSupportSection;
