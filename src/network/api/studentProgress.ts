import axiosClient from "../axiosClient";
import { progressType } from "../../model/studentProgress";

export const getProgressByStudentId = async (studentId: string): Promise<progressType[]> => {
  const response = await axiosClient.get(`/progress/get-all-by-student-id/${studentId}`);
  return response.data;
};
