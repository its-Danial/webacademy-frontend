import { FC, useState } from "react";
import { useQuery } from "react-query";
import { Outlet, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ThreeDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AdminSearchHeader from "../../components/layout/AdminSearchHeader";
import AdminUserCard from "../../components/UI/AdminUserCard";
import { student } from "../../model/student";
import { getAllStudents } from "../../network/api/student";
import { searchStudentByEmailKeyWord } from "../../network/api/admin";
import emptySearchSVG from "../../assets/empty-search.svg";

type AdminStudentsPageProps = {};

const AdminStudentsPage: FC<AdminStudentsPageProps> = (props) => {
  const navigate = useNavigate();

  const [searchKeyWord, setSearchKeyWord] = useState("");

  const { data: totalStudents } = useQuery<student[], Error>("students", getAllStudents);

  const { data: searchedStudent, isLoading } = useQuery<student[], Error>(["searched-student", searchKeyWord], () =>
    searchStudentByEmailKeyWord(searchKeyWord)
  );

  const onUserCardClickHandler = (userId: number) => {
    navigate(`/admin/student/details/${userId}`);
  };

  const onSearchFieldChangeHandler = (newKeyWord: string) => {
    setSearchKeyWord(newKeyWord);
  };

  return (
    <>
      <Outlet />
      <AdminSearchHeader
        searchKeyWord={searchKeyWord}
        onSearchFieldChange={onSearchFieldChangeHandler}
        title="All Students"
      />
      <div className="mb-12">
        <h5 className="text-base font-normal">
          Total current students: <span className="text-2xl font-medium">{totalStudents?.length}</span>
        </h5>
        <div className="flex flex-wrap mt-6">
          {isLoading && (
            <div className="flex mx-auto justify-center my-12">
              <ThreeDots color="#1c1d1f" height={150} width={150} />
            </div>
          )}
          {searchedStudent?.map((student) => (
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
          {searchedStudent?.length === 0 && (
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
export default AdminStudentsPage;
