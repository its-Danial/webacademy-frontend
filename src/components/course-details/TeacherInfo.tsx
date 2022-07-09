import { FC } from "react";
import { teacherType } from "../../model/teacher";

type TeacherInfoProps = {
  teacher: teacherType | undefined;
};

const TeacherInfo: FC<TeacherInfoProps> = (props) => {
  return (
    <div className="mx-auto w-2/3 p-9">
      <h4 className="text-xl underline underline-offset-4 text-gray-700">
        {props.teacher?.fullName}
      </h4>
      <div className="flex flex-row mt-6">
        <div className="basis-4/5">
          <p className="text-base text-gray-800">{props.teacher?.bioText}</p>
        </div>
        <div className="basis-1/5">
          <div className="flex justify-center">
            <img className="rounded-full w-32 my-2" src={props.teacher?.avatarPictureUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeacherInfo;
