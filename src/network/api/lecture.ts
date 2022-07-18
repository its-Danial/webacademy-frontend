import { lectureType, createLectureType } from "./../../model/lecture";
import axiosClient from "../axiosClient";

export const getLecturesByCourseId = async (courseId: number | undefined): Promise<lectureType[]> => {
  const response = await axiosClient.get(`/lecture/get-by-course-id/${courseId}`);
  return response.data;
};

export const deleteLecture = async (pathVariable: {
  teacherId: number;
  courseId: number;
  lectureId: number;
}): Promise<lectureType[]> => {
  const response = await axiosClient.delete(
    `/lecture/delete/${pathVariable.teacherId}/${pathVariable.courseId}/${pathVariable.lectureId}`
  );
  return response.data;
};

export const updateAllLectures = async (data: {
  teacherId: number;
  courseId: number;
  updatedCourses: lectureType[] | createLectureType[];
}): Promise<string> => {
  const response = await axiosClient.put(`/lecture/update/${data.teacherId}/${data.courseId}`, data.updatedCourses);
  return response.data;
};
