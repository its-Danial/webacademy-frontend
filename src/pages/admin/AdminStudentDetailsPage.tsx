import { Button } from "@mui/material";
import { FC } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { student } from "../../model/student";
import { v4 as uuidv4 } from "uuid";
import { getStudentsByStudentId } from "../../network/api/student";
import AdminUserDetailsHeader from "../../components/UI/AdminUserDetailsHeader";
import { courseType } from "../../model/course";
import { getStudentCoursesByStudentId } from "../../network/api/course";
import { getProgressByStudentId } from "../../network/api/studentProgress";
import { progressType } from "../../model/studentProgress";

type AdminStudentDetailsPageProps = {};

const AdminStudentDetailsPage: FC<AdminStudentDetailsPageProps> = (props) => {
  const { studentId } = useParams();

  const { data: student, isLoading } = useQuery<student, Error>(["student", Number(studentId)], () =>
    getStudentsByStudentId(Number(studentId))
  );

  const { data: studentCourses } = useQuery<courseType[], Error>(["student-courses", Number(studentId)], () =>
    getStudentCoursesByStudentId(Number(studentId))
  );

  const { data: studentProgresses } = useQuery<progressType[], Error>(["student-progresses", Number(studentId)], () =>
    getProgressByStudentId(Number(studentId))
  );

  return (
    <div className="py-6">
      <h1 className="font-serif text-4xl">Student Details</h1>
      <AdminUserDetailsHeader
        userId={student ? student.studentId : undefined}
        avatarPictureUrl="none"
        email={student ? student.email : ""}
        fullName={student ? student.fullName : ""}
        username={student ? student.username : ""}
      />
      <h4 className="mt-12 text-2xl">Student courses</h4>
      {studentCourses?.map((course) => (
        <div key={uuidv4()} className="flex flex-col">
          <div className="hover:bg-gray-100 flex group flex-row justify-between border-1 border-solid shadow-3xl border-gray-200 h-fit mt-3">
            <div className="flex flex-row">
              <img
                className="h-24 w-36"
                src={course.courseInformation.coverImageUrl}
                alt="{props.course?.title}"
                //   onError={(e) => (e.currentTarget.src = notfoundSVG)}
              />
              <div className="flex flex-col justify-between p-4">
                <h5 className="text-gray-800 text-sm">{course.title}</h5>
                <p className="text-xs text-gray-900">{course.teacher.fullName}</p>
                <p className="text-xs text-gray-600">Public</p>
              </div>
            </div>
            <div className="basis-2/5 flex justify-between text-center">
              <div className="p-4 mr-6">
                <p>Progress</p>
                <p className="font-semibold text-gray-600">4/6</p>
              </div>
              <Button
                disableElevation
                variant="text"
                className="invisible group-hover:visible hover:bg-red-100 text-red-500 cursor-pointer normal-case px-4 "
              >
                Delete students course
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AdminStudentDetailsPage;
