import { FC } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AdminSearchHeader from "../../components/layout/AdminSearchHeader";
import AdminUserCard from "../../components/UI/AdminUserCard";
import { teacherType } from "../../model/teacher";
import { getAllTeachers } from "../../network/api/teacher";

type AdminTeacherPageProps = {};

const AdminTeacherPage: FC<AdminTeacherPageProps> = (props) => {
  const navigate = useNavigate();

  const { data: teachers, isLoading } = useQuery<teacherType[], Error>("teachers", getAllTeachers);

  const onUserCardClickHandler = (userId: number) => {
    navigate(`/admin/teacher/details/${userId}`);
  };

  return (
    <>
      <AdminSearchHeader title="All Teachers" />
      <div className="mb-12">
        <h5 className="text-base font-normal">
          Total current teachers: <span className="text-2xl font-medium">{teachers?.length}</span>
        </h5>
        <div className="flex flex-wrap mt-6">
          {teachers?.map((teacher) => (
            <AdminUserCard
              userId={teacher.teacherId}
              avatarPictureUrl={teacher.avatarPictureUrl}
              email={teacher.email}
              fullName={teacher.fullName}
              username={teacher.username}
              key={uuidv4()}
              onUserClick={onUserCardClickHandler}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default AdminTeacherPage;
