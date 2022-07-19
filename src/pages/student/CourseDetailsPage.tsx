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
import { progressType } from "../../model/studentProgress";
import { getSingleCourseProgress, likeStudentCourse, unlikeStudentCourse } from "../../network/api/studentProgress";

type CourseDetailsPageProps = {};

const CourseDetailsPage: FC<CourseDetailsPageProps> = (props) => {
  const { courseId } = useParams();
  const [headerDisplayButton, setHeaderDisplayButton] = useState<string>("add-to-cart");
  const [showLoginAlter, setShowLoginAlter] = useState<boolean>(false);
  const [showPurchaseAlter, setShowPurchaseAlter] = useState<boolean>(false);

  const [studentHasLikedCourse, setStudentHasLikedCourse] = useState(false);
  const queryClient = useQueryClient();
  const authUserId: number = useSelector((state: any) => state.auth.id);

  const { data: course, isLoading } = useQuery<courseType, Error>(["course", Number(courseId)], () =>
    getCourseById(Number(courseId))
  );

  const { data: lectures, isLoading: lectureIsLoading } = useQuery<lectureType[], Error>(
    ["lectures", Number(courseId)],
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

  // fetch student progress for the current course
  const { data: studentSingleCourseProgress } = useQuery<progressType, Error>(
    ["student-course-progress", authUserId],
    () => getSingleCourseProgress(authUserId, Number(courseId)),
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

  //to check if the student has liked the course or not
  useEffect(() => {
    if (!!authUserId && studentSingleCourseProgress) {
      setStudentHasLikedCourse(studentSingleCourseProgress.liked);
    } else {
      setStudentHasLikedCourse(false);
    }
  }, [studentSingleCourseProgress, authUserId]);

  const likeCourseMutation = useMutation(likeStudentCourse, {
    onSuccess: () => {
      queryClient.invalidateQueries(["student-course-progress", authUserId]);
    },
  });
  const unlikeCourseMutation = useMutation(unlikeStudentCourse, {
    onSuccess: () => {
      queryClient.invalidateQueries(["student-course-progress", authUserId]);
    },
  });

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

  const onLikedClickHandler = () => {
    if (!!authUserId) {
      if (studentSingleCourseProgress && headerDisplayButton === "go-to-course") {
        if (studentSingleCourseProgress.liked) {
          unlikeCourseMutation.mutate(
            { studentId: authUserId, courseId: Number(courseId) },
            { onSuccess: () => setStudentHasLikedCourse(false) }
          );
        } else {
          likeCourseMutation.mutate(
            { studentId: authUserId, courseId: Number(courseId) },
            { onSuccess: () => setStudentHasLikedCourse(true) }
          );
        }
      } else {
        setShowPurchaseAlter(true);
      }
    } else {
      setShowLoginAlter(true);
    }
  };

  return (
    <>
      <CourseInfoHeader
        authUserId={authUserId}
        studentHasLikedCourse={studentHasLikedCourse}
        firstLectureId={lectures?.at(0)?.courseLectureId}
        showLoginAlter={showLoginAlter}
        showPurchaseAlter={showPurchaseAlter}
        mutationIsLoading={addCourseToCartMutation.isLoading}
        onAddToCartClick={onAddToCartClickHandler}
        onLikeClick={onLikedClickHandler}
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
