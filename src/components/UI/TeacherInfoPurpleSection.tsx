import { FC } from "react";

type TeacherInfoPurpleSectionProps = {};

const TeacherInfoPurpleSection: FC<TeacherInfoPurpleSectionProps> = (props) => {
  return (
    <div className="w-full bg-[#5624d0] text-white py-12 mb-12">
      <div className="flex flex-row justify-evenly  mx-auto w-[90%]">
        <div className="flex flex-col justify-center text-center p-3">
          <h4 className="text-4xl">49M</h4>
          <p className="mt-2 font-light">Students</p>
        </div>
        <div className="flex flex-col justify-center text-center p-3">
          <h4 className="text-4xl">75+</h4>
          <p className="mt-2 font-light">Languages</p>
        </div>
        <div className="flex flex-col justify-center text-center p-3">
          <h4 className="text-4xl">680M</h4>
          <p className="mt-2 font-light">Enrollments</p>
        </div>
        <div className="flex flex-col justify-center text-center p-3">
          <h4 className="text-4xl">180+</h4>
          <p className="mt-2 font-light">Countries</p>
        </div>
        <div className="flex flex-col justify-center text-center p-3">
          <h4 className="text-4xl">11,600+</h4>
          <p className="mt-2 font-light">Enterprise customers</p>
        </div>
      </div>
    </div>
  );
};
export default TeacherInfoPurpleSection;
