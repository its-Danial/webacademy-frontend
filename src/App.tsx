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
        </Route>
        {/* Learning Page for watching videos */}
        <Route path="/course/:courseId/learn/lecture" element={<LearnCoursePage />} />
        {/* Note: Teacher */}
        <Route path="/teacher" element={<h1>Teacher</h1>}></Route>
        <Route path="/teacher/courses" element={<TeacherLayout />} />
        <Route path="/teacher/performance" element={<TeacherLayout />} />
      </Routes>
    </ScrollRestoration>
  );
}
