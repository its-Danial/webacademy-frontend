import { FC } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import AdminUserDetailsHeader from "../../components/UI/AdminUserDetailsHeader";
import { teacherType } from "../../model/teacher";
import { getTeacherByTeacherId } from "../../network/api/teacher";

type AdminTeacherDetailsPageProps = {};

const AdminTeacherDetailsPage: FC<AdminTeacherDetailsPageProps> = (props) => {
  const { teacherId } = useParams();

  const { data: teacher } = useQuery<teacherType, Error>(["teacher-profile", Number(teacherId)], () =>
    getTeacherByTeacherId(Number(teacherId))
  );

  return (
    <div className="py-6">
      <h1 className="font-serif text-4xl">Teacher Details</h1>
      <AdminUserDetailsHeader
        userId={teacher ? teacher.teacherId : undefined}
        avatarPictureUrl={teacher?.avatarPictureUrl}
        email={teacher?.email}
        fullName={teacher?.fullName}
        username={teacher?.username}
      />
    </div>
  );
};
export default AdminTeacherDetailsPage;
