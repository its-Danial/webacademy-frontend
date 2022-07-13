import { FC } from "react";

type TeacherInfoReasonsProps = {};

const TeacherInfoReasons: FC<TeacherInfoReasonsProps> = (props) => {
  return (
    <div className="mx-auto w-[90%] mb-12 py-12">
      <div className="flex justify-center my-12">
        <h2 className="text-[2.5rem] font-serif font-semibold">So many reasons to start</h2>
      </div>

      <div className="flex flex-row justify-between mx-6 h-52">
        <div className="flex flex-col items-center text-center w-80 h-52">
          <img
            className="h-[100px] w-[100px]"
            src="https://s.udemycdn.com/teaching/value-prop-teach-2x-v3.jpg"
            alt=""
          />
          <h5 className="text-lg mt-3">Teach your way</h5>
          <p className="text-base text-gray-600">
            Publish the course you want, in the way you want, and always have of control your own content.
          </p>
        </div>
        <div className="flex flex-col items-center text-center w-80 h-52">
          <img
            className="h-[100px] w-[100px]"
            src="https://s.udemycdn.com/teaching/value-prop-inspire-2x-v3.jpg"
            alt=""
          />
          <h5 className="text-lg mt-3">Inspire learners</h5>
          <p className="text-base text-gray-600">
            Teach what you know and help learners explore their interests, gain new skills, and advance their careers.
          </p>
        </div>
        <div className="flex flex-col items-center text-center w-80 h-52">
          <img
            className="h-[100px] w-[100px]"
            src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg"
            alt=""
          />
          <h5 className="text-lg mt-3">Get rewarded</h5>
          <p className="text-base text-gray-600">
            Expand your professional network, build your expertise, and earn money on each paid enrollment.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TeacherInfoReasons;
