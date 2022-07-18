import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/student/HomePage";
import LogInPage from "./pages/student/LogInPage";
import SignUpPage from "./pages/student/SignUpPage";
import ShoppingCartPage from "./pages/student/ShoppingCartPage";
import EmptyCart from "./components/cart/EmptyCart";
import CheckOutPage from "./pages/student/CheckOutPage";
import PurchasedAlert from "./components/UI/PurchasedAlert";
import CourseDetailsPage from "./pages/student/CourseDetailsPage";
import SearchCoursesPage from "./pages/student/SearchCoursesPage";
import SearchTopicPage from "./pages/student/SearchTopicPage";
import LearnCoursePage from "./pages/student/LearnCoursePage";
import TeacherLayout from "./components/layout/TeacherLayout";
import ScrollRestoration from "./components/UI/ScrollRestoration";
import TeacherInfoPage from "./pages/teacher/TeacherInfoPage";
import TeacherCoursesHomePage from "./pages/teacher/TeacherCoursesHomePage";
import TeacherCreateCoursePage from "./pages/teacher/TeacherCreateCoursePage";
import TeacherCourseManageLayout from "./components/layout/TeacherCourseManageLayout";
import TeacherManageInfoPage from "./pages/teacher/TeacherManageInfoPage";
import TeacherManageLecturePage from "./pages/teacher/TeacherManageLecturePage";
import TeacherPerformanceLayout from "./components/layout/TeacherPerformanceLayout";
import TeacherPerformanceOverviewPage from "./pages/teacher/TeacherPerformanceOverviewPage";

export default function App() {
  return (
    <ScrollRestoration>
      <Routes>
        {/* Note: Main Student */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}>
            <Route path="purchased" element={<PurchasedAlert />} />
          </Route>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/cart" element={<EmptyCart />} />
          <Route path="/cart/:studentId" element={<ShoppingCartPage />} />
          <Route path="/checkout/:studentId" element={<CheckOutPage />} />
          {/* Details page */}
          <Route path="/course/:courseId" element={<CourseDetailsPage />} />
          {/* Searching */}
          <Route path="/courses/:categoryName" element={<SearchCoursesPage />} />
          <Route path="/topic/:topicName" element={<SearchTopicPage />} />
          {/* Lear about being a teacher page */}
          <Route path="/teacher-info" element={<TeacherInfoPage />} />
        </Route>
        {/* Learning Page for watching videos */}
        <Route path="/course/:courseId/learn/lecture" element={<LearnCoursePage />} />
        {/* Note: Teacher */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route path="/teacher/courses" element={<TeacherCoursesHomePage />} />
          <Route path="/teacher/performance" element={<TeacherPerformanceLayout />}>
            <Route path="/teacher/performance/overview" element={<TeacherPerformanceOverviewPage />} />
            <Route path="/teacher/performance/students" element={<h1></h1>} />
          </Route>
        </Route>
        <Route path="/teacher/course/create" element={<TeacherCreateCoursePage />} />
        {/* Note: Manage */}
        <Route path="/teacher/course/manage/" element={<TeacherCourseManageLayout />}>
          <Route path="/teacher/course/manage/:courseTitle/:courseId/information" element={<TeacherManageInfoPage />} />
          <Route path="/teacher/course/manage/:courseTitle/:courseId/content" element={<TeacherManageLecturePage />} />
        </Route>
      </Routes>
    </ScrollRestoration>
  );
}
