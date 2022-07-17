import { FC } from "react";
import { Button, Divider } from "@mui/material";
import { courseType } from "../../model/course";

type AboutCourseSectionProps = {
  course: courseType | undefined;
  totalLecture: number | undefined;
};

const AboutCourseSection: FC<AboutCourseSectionProps> = (props) => {
  return (
    <div className="p-6 mt-3 mb-8">
      <div className="p-5">
        <h2 className="font-semibold text-2xl text-gray-900">About this course</h2>
        <p className="mt-4 text-base font-light">{props.course?.title}</p>
      </div>
      <Divider className="bg-gray-300" />
      <div className="p-5 flex flex-row text-base font-light">
        <div className="basis-1/3">By the numbers</div>
        <div className="basis-1/3">
          <div>Skill level: Beginner Level</div>
          <div>Students: 281347</div>
          <div>Languages: English</div>
          <div>Captions: Yes</div>
        </div>
        <div className="basis-1/3">
          <div>Lectures: {props.totalLecture}</div>
          <div>Video: {props.course?.courseInformation.totalDuration} total hours</div>
        </div>
      </div>
      <Divider className="bg-gray-300" />
      <div className="p-5 flex flex-row text-base font-light">
        <div className="basis-1/3">Certificates</div>
        <div className="basis-2/3">
          <p className="w-4/5 mb-5">Get WebAcademy certificate by completing entire course</p>
          <Button
            className="rounded-none normal-case disabled:text-gray-400 border-gray-400 w-[60%]"
            variant="outlined"
            disabled
          >
            WebAcademy Certificate
          </Button>
        </div>
      </div>
      <Divider className="bg-gray-300" />
      <div className="p-5 flex flex-row text-base font-light">
        <div className="basis-1/3">Features</div>
        <div className="basis-2/3">
          Available on <span className="underline underline-offset-2 text-purple-500 font-bold">iOS</span> and{" "}
          <span className="underline underline-offset-2 text-purple-500 font-bold">Android</span>
        </div>
      </div>
      <Divider className="bg-gray-300" />
      <div className="p-5 flex flex-row text-base font-light">
        <div className="basis-1/3">Description</div>
        <div className="basis-2/3">
          <p className="w-4/5">{props.course?.courseInformation.description}</p>
        </div>
      </div>
      <Divider className="bg-gray-300" />
      <div className="p-5 flex flex-row text-base font-light">
        <div className="basis-1/3">Instructor</div>
        <div className="basis-2/3 ">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <img className="rounded-full w-20 mr-6" src={props.course?.teacher.avatarPictureUrl} alt="" />
              <div>
                <h5 className=" text-lg font-semibold text-gray-700">{props.course?.teacher.fullName}</h5>
              </div>
            </div>
            <p className="w-4/5 mt-8">{props.course?.teacher.bioText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutCourseSection;
