import axiosClient from "../axiosClient";
import { accountRegisterInfo } from "../../model/accountRegisterInfo";
import { logInCredentials } from "../../model/logInCredentials";
import { student } from "../../model/student";

export const registerStudent = async (studentInfo: accountRegisterInfo): Promise<student> => {
  const response = await axiosClient.post("/student/register", studentInfo);
  return response.data;
};

export const loginStudent = async (credentials: logInCredentials): Promise<student> => {
  const response = await axiosClient.post("/student/login", credentials);
  return response.data;
};

export const getAllStudents = async (): Promise<student[]> => {
  const response = await axiosClient.get("/student/get-all");
  return response.data;
};

export const getStudentsByTeacherId = async (teacherId: number): Promise<student[]> => {
  const response = await axiosClient.get(`/student/get-all-by-teacher-id/${teacherId}`);
  return response.data;
};

export const getStudentsByStudentId = async (studentId: number): Promise<student> => {
  const response = await axiosClient.get(`/student/get-by-id/${studentId}`);
  return response.data;
};
