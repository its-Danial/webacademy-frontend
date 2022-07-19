import axiosClient from "../axiosClient";
import { progressType } from "../../model/studentProgress";

export const getProgressByStudentId = async (studentId: number): Promise<progressType[]> => {
  const response = await axiosClient.get(`/progress/get-all-by-student-id/${studentId}`);
  return response.data;
};

export const getSingleCourseProgress = async (studentId: number, courseId: number): Promise<progressType> => {
  const response = await axiosClient.get(`/progress/get-one/${studentId}/${courseId}`);
  return response.data;
};

export const updateStudentSingleCourseProgress = async (pathVariable: {
  studentId: number | undefined;
  courseId: number | undefined;
}): Promise<progressType> => {
  const response = await axiosClient.put(`/progress/completed-one/${pathVariable.studentId}/${pathVariable.courseId}`);
  return response.data;
};

export const likeStudentCourse = async (pathVariable: {
  studentId: number | undefined;
  courseId: number | undefined;
}): Promise<string> => {
  const response = await axiosClient.put(`/progress/like-course/${pathVariable.studentId}/${pathVariable.courseId}`);
  return response.data;
};

export const unlikeStudentCourse = async (pathVariable: {
  studentId: number | undefined;
  courseId: number | undefined;
}): Promise<string> => {
  const response = await axiosClient.put(`/progress/unlike-course/${pathVariable.studentId}/${pathVariable.courseId}`);
  return response.data;
};
