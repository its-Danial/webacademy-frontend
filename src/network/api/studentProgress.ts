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

export const updateStudentSingleCourseProgress = async (queryParams: {
  studentId: number | undefined;
  courseId: number | undefined;
}): Promise<progressType> => {
  const response = await axiosClient.put(`/progress/completed-one/${queryParams.studentId}/${queryParams.courseId}`);
  return response.data;
};
