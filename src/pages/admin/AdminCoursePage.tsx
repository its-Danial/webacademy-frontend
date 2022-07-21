import { FC, Fragment, useEffect, useState } from "react";
import { Divider, Tooltip } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { v4 as uuidv4 } from "uuid";
import AdminSearchHeader from "../../components/layout/AdminSearchHeader";
import SearchCourseList from "../../components/searching/SearchCourseList";
import { courseType } from "../../model/course";
import { deleteCourseByCourseId, getCoursesByTitleSearchKey } from "../../network/api/course";
import emptySearchSVG from "../../assets/empty-search.svg";

type AdminCoursePageProps = {};

const AdminCoursePage: FC<AdminCoursePageProps> = (props) => {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [totalCourses, setTotalCourses] = useState(0);
  const queryClient = useQueryClient();

  const onSearchFieldChangeHandler = (newKeyWord: string) => {
    setSearchKeyWord(newKeyWord);
  };

  const { data: searchedCourses } = useQuery<courseType[], Error>(["searched-courses", searchKeyWord], () =>
    getCoursesByTitleSearchKey(searchKeyWord)
  );

  const deleteCourseMutation = useMutation(deleteCourseByCourseId, {
    onSuccess: () => {
      queryClient.invalidateQueries(["searched-courses", searchKeyWord]);
      queryClient.invalidateQueries("teacher-courses");
      queryClient.invalidateQueries("teacher-total-earning");
    },
  });

  useEffect(() => {
    if (searchKeyWord === "" && searchedCourses) {
      setTotalCourses(searchedCourses?.length);
    }
  }, [searchedCourses, searchKeyWord]);

  const onDeleteCourseClickHandler = (teacherId: number, courseId: number) => {
    deleteCourseMutation.mutate({
      teacherId: Number(teacherId),
      courseId: Number(courseId),
    });
  };

  return (
    <div>
      <AdminSearchHeader
        placeholder="Search by course title"
        searchKeyWord={searchKeyWord}
        onSearchFieldChange={onSearchFieldChangeHandler}
        title="All Courses"
      />
      <div className="mb-12">
        <h5 className="text-base font-normal">
          Total current courses: <span className="text-2xl font-medium">{totalCourses}</span>
        </h5>
        <div className="flex flex-col mt-6">
          {searchedCourses?.map((course) => (
            <Fragment key={uuidv4()}>
              <div className="flex flex-row">
                <Tooltip title="Navigate to the the course details page" followCursor arrow>
                  <div className="basis-[95%] ">
                    <SearchCourseList course={course} />
                  </div>
                </Tooltip>
                <Tooltip title="Delete course" arrow>
                  <div className="basis-[6%] ">
                    <button
                      onClick={() => onDeleteCourseClickHandler(course.teacher.teacherId, course.courseId)}
                      className=" w-full h-full cursor-pointer bg-red-50 hover:bg-red-200 text-red-600 border-0 rounded-r-lg"
                    >
                      Delete
                    </button>
                  </div>
                </Tooltip>
              </div>
              <Divider className="my-3" />
            </Fragment>
          ))}
          {searchedCourses?.length === 0 && (
            <div className="flex mx-auto flex-col justify-center text-center my-12">
              <h2 className="text-gray-500">No results</h2>
              <img src={emptySearchSVG} alt="" className="w-full h-full mt-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AdminCoursePage;
