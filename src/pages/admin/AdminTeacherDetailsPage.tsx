import { FC } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AdminUserDetailsHeader from "../../components/UI/AdminUserDetailsHeader";
import { courseType } from "../../model/course";
import { teacherType } from "../../model/teacher";
import {
  deleteCourseByCourseId,
  getEarningsPerCourseByTeacherId,
  getTeacherCoursesByTeacherId,
  getTotalEarningForCourseByTeacherId,
} from "../../network/api/course";
import { getTeacherByTeacherId } from "../../network/api/teacher";

import AdminTeacherDetailsCourseCard from "../../components/UI/AdminTeacherDetailsCourseCard";
import { deleteTeacherById } from "../../network/api/admin";

type AdminTeacherDetailsPageProps = {};

const AdminTeacherDetailsPage: FC<AdminTeacherDetailsPageProps> = (props) => {
  const { teacherId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: teacher } = useQuery<teacherType, Error>(["teacher-profile", Number(teacherId)], () =>
    getTeacherByTeacherId(Number(teacherId))
  );

  const { data: teacherCourses } = useQuery<courseType[], Error>(["teacher-courses", Number(teacherId)], () =>
    getTeacherCoursesByTeacherId(Number(teacherId))
  );

  const { data: teacherTotalEarning } = useQuery<number, Error>(["teacher-total-earning", Number(teacherId)], () =>
    getTotalEarningForCourseByTeacherId(Number(teacherId))
  );

  const { data: teacherEarningPerCourseList } = useQuery<
    {
      courseId: number;
      totalEarnings: number;
    }[],
    Error
  >(["teacher-earnings-per-course", Number(teacherId)], () => getEarningsPerCourseByTeacherId(Number(teacherId)));

  const deleteUserMutation = useMutation(deleteTeacherById, {
    onSuccess: () => {
      queryClient.invalidateQueries("teachers");
    },
  });

  const deleteCourseMutation = useMutation(deleteCourseByCourseId, {
    onSuccess: () => {
      queryClient.invalidateQueries(["teacher-courses", Number(teacherId)]);
    },
  });

  // Bug: this does not work now, problem from backend
  const onUserDeleteClickHandler = (userId: number) => {
    deleteUserMutation.mutate(userId, { onSuccess: () => navigate("/admin/teacher/alert", { replace: true }) });
  };

  const onDeleteTeacherCourseHandler = (courseId: number) => {
    // BUG: this does not work now, problem from backend
    deleteCourseMutation.mutate({
      teacherId: Number(teacherId),
      courseId: Number(courseId),
    });
  };

  return (
    <div className="py-6">
      <h1 className="font-serif text-4xl">Teacher Details</h1>
      <AdminUserDetailsHeader
        onUserDeleteClick={onUserDeleteClickHandler}
        userId={teacher ? teacher.teacherId : undefined}
        avatarPictureUrl={teacher?.avatarPictureUrl}
        email={teacher?.email}
        fullName={teacher?.fullName}
        username={teacher?.username}
      />
      <div className="my-12">
        <h5 className="text-2xl">Biography</h5>
        <p className="text-gray-500 mt-3">{teacher?.bioText}</p>
      </div>
      <div className="flex justify-end">
        <h3 className="text-2xl font-normal mt-2">
          <span className="text-gray-500">Total earnings:</span> ${teacherTotalEarning}.00
        </h3>
      </div>
      {teacherCourses?.map((course) => (
        <AdminTeacherDetailsCourseCard
          key={uuidv4()}
          courseId={course.courseId}
          img={course.courseInformation.coverImageUrl}
          title={course.title}
          createdAt={course.createdAt}
          rating={course.courseRating}
          courseEarnings={teacherEarningPerCourseList?.find((element) => element.courseId === course.courseId)}
          onDeleteClick={onDeleteTeacherCourseHandler}
        />
      ))}
    </div>
  );
};
export default AdminTeacherDetailsPage;
