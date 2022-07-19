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
