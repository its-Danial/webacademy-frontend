import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import CourseInfoHeader from "../../components/course-details/CourseInfoHeader";
import CourseOverview from "../../components/course-details/CourseOverview";
import SkillAndTechnologiesList from "../../components/course-details/SkillAndTechnologiesList";
import TeacherInfo from "../../components/course-details/TeacherInfo";
import TopCompaniesFooter from "../../components/UI/TopCompaniesFooter";
import { getCourseById } from "../../network/api/course";
import { getLecturesByCourseId } from "../../network/api/lecture";
import { courseType } from "../../model/course";
import { lectureType } from "../../model/lecture";
import { shoppingCartType } from "../../model/shoppingCart";
import { getStudentCoursesByStudentId } from "../../network/api/course";
import { getCartByStudentId, addCourseToCart } from "../../network/api/shoppingCart";

type CourseDetailsPageProps = {};

const CourseDetailsPage: FC<CourseDetailsPageProps> = (props) => {
  const { courseId } = useParams();
  const [headerDisplayButton, setHeaderDisplayButton] = useState<string>("add-to-cart");
  const [showLoginAlter, setShowLoginAlter] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const authUserId: number = useSelector((state: any) => state.auth.id);

  const { data: course, isLoading } = useQuery<courseType, Error>(["course", Number(courseId)], () =>
    getCourseById(Number(courseId))
  );
  const { data: lectures, isLoading: lectureIsLoading } = useQuery<lectureType[], Error>(
    ["lecture", Number(courseId)],
    () => getLecturesByCourseId(Number(courseId))
  );

  // Note: This query will only run if a student is logged in, to check if the student has already bought the course
  const { data: studentCourses } = useQuery<courseType[], Error>(
    ["student-courses", authUserId],
    () => getStudentCoursesByStudentId(authUserId),
    { enabled: !!authUserId }
  );

  // Note: This will check if the course is already in students cart, it will only run if student is logged in.
  const { data: cartItems } = useQuery<shoppingCartType, Error>(
    ["cart-items", authUserId],
    () => getCartByStudentId(authUserId),
    { enabled: !!authUserId }
  );

  useEffect(() => {
    // too see if student already owns the course
    studentCourses?.forEach((course) => {
      if (course.courseId === Number(courseId)) {
        setHeaderDisplayButton("go-to-course");
      }
    });
    // to see if student has the course in cart
    cartItems?.courses?.forEach((course) => {
      if (course.courseId === Number(courseId)) {
        setHeaderDisplayButton("go-to-cart");
      }
    });
  }, [studentCourses, cartItems, courseId]);

  // Note: send mutation request to add course to students shoppingcart
  const addCourseToCartMutation = useMutation(addCourseToCart, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart-items", authUserId]);
    },
  });
  const onAddToCartClickHandler = () => {
    if (!!authUserId) {
      setShowLoginAlter(false);
      addCourseToCartMutation.mutate({
        studentId: authUserId,
        courseId: Number(courseId),
      });
    } else {
      setShowLoginAlter(true);
    }
  };

  return (
    <>
      <CourseInfoHeader
        authUserId={authUserId}
        firstLectureId={lectures?.at(0)?.courseLectureId}
        showLoginAlter={showLoginAlter}
        mutationIsLoading={addCourseToCartMutation.isLoading}
        onAddToCartClick={onAddToCartClickHandler}
        headerButtonType={headerDisplayButton}
        isLoading={isLoading}
        course={course}
      />
      <CourseOverview isLoading={isLoading} course={course} lectures={lectures} lectureIsLoading={lectureIsLoading} />
      <SkillAndTechnologiesList technologies={course?.categories} />
      <TeacherInfo teacher={course?.teacher} />
      <TopCompaniesFooter />
    </>
  );
};
export default CourseDetailsPage;
