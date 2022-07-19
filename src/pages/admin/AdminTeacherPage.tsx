import { FC, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ThreeDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AdminSearchHeader from "../../components/layout/AdminSearchHeader";
import AdminUserCard from "../../components/UI/AdminUserCard";
import { teacherType } from "../../model/teacher";
import { getAllTeachers } from "../../network/api/teacher";
import { searchTeacherByEmailKeyWord } from "../../network/api/admin";
import emptySearchSVG from "../../assets/empty-search.svg";

type AdminTeacherPageProps = {};

const AdminTeacherPage: FC<AdminTeacherPageProps> = (props) => {
  const navigate = useNavigate();
  const [searchKeyWord, setSearchKeyWord] = useState("");

  const { data: totalTeachers } = useQuery<teacherType[], Error>("teachers", getAllTeachers);

  const { data: searchedTeacher, isLoading } = useQuery<teacherType[], Error>(["searched-teacher", searchKeyWord], () =>
    searchTeacherByEmailKeyWord(searchKeyWord)
  );

  const onUserCardClickHandler = (userId: number) => {
    navigate(`/admin/teacher/details/${userId}`);
  };

  const onSearchFieldChangeHandler = (newKeyWord: string) => {
    setSearchKeyWord(newKeyWord);
  };

  return (
    <>
      <AdminSearchHeader
        placeholder="Search by email"
        onSearchFieldChange={onSearchFieldChangeHandler}
        searchKeyWord={searchKeyWord}
        title="All Teachers"
      />
      <div className="mb-12">
        <h5 className="text-base font-normal">
          Total current teachers: <span className="text-2xl font-medium">{totalTeachers?.length}</span>
        </h5>
        <div className="flex flex-wrap mt-6">
          {isLoading && (
            <div className="flex mx-auto justify-center my-12">
              <ThreeDots color="#1c1d1f" height={150} width={150} />
            </div>
          )}
          {searchedTeacher?.map((teacher) => (
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
          {searchedTeacher?.length === 0 && (
            <div className="flex mx-auto flex-col justify-center text-center my-12">
              <h2 className="text-gray-500">No results found by that email</h2>
              <img src={emptySearchSVG} alt="" className="w-full h-full mt-2" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default AdminTeacherPage;
