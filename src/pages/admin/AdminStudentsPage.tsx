import { FC } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AdminSearchHeader from "../../components/layout/AdminSearchHeader";
import AdminUserCard from "../../components/UI/AdminUserCard";
import { student } from "../../model/student";
import { getAllStudents } from "../../network/api/student";

type AdminStudentsPageProps = {};

const AdminStudentsPage: FC<AdminStudentsPageProps> = (props) => {
  const navigate = useNavigate();

  const { data: students, isLoading } = useQuery<student[], Error>("students", getAllStudents);

  const onUserCardClickHandler = (userId: number) => {
    navigate(`/admin/student/details/${userId}`);
  };

  return (
    <>
      <AdminSearchHeader title="All Students" />
      <div className="mb-12">
        <h5 className="text-base font-normal">
          Total current students: <span className="text-2xl font-medium">{students?.length}</span>
        </h5>
        <div className="flex flex-wrap mt-6">
          {students?.map((student) => (
            <AdminUserCard
              userId={student.studentId}
              avatarPictureUrl="none"
              email={student.email}
              fullName={student.fullName}
              username={student.username}
              key={uuidv4()}
              onUserClick={onUserCardClickHandler}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default AdminStudentsPage;
