import { FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import { InfoOutlined, QueuePlayNext } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TeacherManageNavBar from "./TeacherManageNavBar";

type TeacherCourseManageLayoutProps = {};

const TeacherCourseManageLayout: FC<TeacherCourseManageLayoutProps> = (props) => {
  const { courseId, courseTitle } = useParams();

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      {/* NavBar */}
      <TeacherManageNavBar courseTitle={courseTitle} />
      <main className="flex-grow w-[90%] mx-auto">
        <div className="flex flex-row w-[95%] mt-11 mx-auto">
          <div className="flex flex-col w-80">
            <div className="flex flex-col mt-3 w-[90%]">
              <h4 className="mb-4 pl-12">Plan your course</h4>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-l-[5px] border-0 border-solid border-black no-underline py-2 text-gray-600"
                    : "border-l-[5px] border-0 border-solid border-transparent no-underline py-2 text-gray-600"
                }
                to={`/teacher/course/manage/${encodeURI(String(courseTitle))}/${courseId}/information`}
              >
                <div className="flex flex-row items-center justify-start ml-7">
                  <InfoOutlined />
                  <p className="pl-2 text-gray-500">Course information</p>
                </div>
              </NavLink>

              <h4 className="mb-4 mt-16 pl-12">Create your content</h4>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-l-[5px] border-0 border-solid border-black no-underline py-2 text-gray-600"
                    : "border-l-[5px] border-0 border-solid border-transparent no-underline py-2 text-gray-600"
                }
                to={`/teacher/course/manage/${encodeURI(String(courseTitle))}/${courseId}/content`}
              >
                <div className="flex flex-row items-center justify-start ml-7">
                  <QueuePlayNext />
                  <p className="pl-2 text-gray-500">Course lectures</p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default TeacherCourseManageLayout;
