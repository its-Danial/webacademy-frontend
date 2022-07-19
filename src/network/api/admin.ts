import axiosClient from "../axiosClient";

import { teacherType } from "../../model/teacher";
import { student } from "../../model/student";

export const searchStudentByEmailKeyWord = async (keyWord: string): Promise<student[]> => {
  const response = await axiosClient.get(`/student/search?email=${keyWord}`);
  return response.data;
};

export const searchTeacherByEmailKeyWord = async (keyWord: string): Promise<teacherType[]> => {
  const response = await axiosClient.get(`/teacher/search?email=${keyWord}`);
  return response.data;
};

export const deleteStudentById = async (studentId: number): Promise<string> => {
  const response = await axiosClient.delete(`/student/delete/${studentId}`);
  return response.data;
};

export const deleteTeacherById = async (teacherId: number): Promise<string> => {
  const response = await axiosClient.delete(`/teacher/delete/${teacherId}`);
  return response.data;
};

export const deleteStudentsCourse = async (pathVariable: { studentId: number; courseId: number }): Promise<string> => {
  const response = await axiosClient.delete(
    `/course/delete-student-course/${pathVariable.studentId}/${pathVariable.courseId}`
  );
  return response.data;
};
