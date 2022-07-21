import { Avatar } from "@mui/material";
import { FC } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { student } from "../../model/student";
import { getStudentsByTeacherId } from "../../network/api/student";

type TeacherPerformanceStudentPageProps = {};

const TeacherPerformanceStudentPage: FC<TeacherPerformanceStudentPageProps> = (props) => {
  const teacherAuthUserId: number = useSelector((state: any) => state.teacherAuth.id);

  const { data: teachersStudents } = useQuery<student[], Error>(
    ["teacher-students", Number(teacherAuthUserId)],
    () => getStudentsByTeacherId(Number(teacherAuthUserId)),
    { enabled: !!teacherAuthUserId }
  );

  return (
    <div className=" w-full mb-9">
      <h1 className="font-serif text-4xl text-gray-700">Students</h1>
      <p className="my-6 text-gray-500">
        <span className="text-3xl">{teachersStudents?.length === 0 ? 0 : teachersStudents?.length}</span> students
      </p>

      <div className="flex flex-wrap min-h-[400px]">
        {teachersStudents?.length === 0 ? (
          <div className="flex flex-col w-full text-center mt-12">
            <h4 className="text-gray-500 text-2xl">No students yet...</h4>
            <h6 className="text-gray-500 text-sm mt-4">
              Once you publish your course, come here to learn about your students.
            </h6>
          </div>
        ) : (
          teachersStudents?.map((student, index) => (
            <div key={index} className="flex flex-col p-10 shadow-3xl items-center h-48 w-44 mr-4 mb-4">
              <Avatar className="bg-black" alt="Name" sx={{ width: 76, height: 76 }}>
                {student.fullName.slice(0, 2).toUpperCase()}
              </Avatar>
              <h3 className="mb-2 mt-5">{student.username}</h3>
              <p className="mb-2 text-gray-500">{student.fullName}</p>
              <p className="text-gray-500">{student.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default TeacherPerformanceStudentPage;
