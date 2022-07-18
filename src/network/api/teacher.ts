import axiosClient from "../axiosClient";
import { accountRegisterInfo } from "../../model/accountRegisterInfo";
import { logInCredentials } from "../../model/logInCredentials";
import { teacherType } from "../../model/teacher";

export const registerTeacher = async (teacherInfo: accountRegisterInfo) => {
  const response = await axiosClient.post("/teacher/register", teacherInfo);
  return response.data;
};

export const loginTeacher = async (credentials: logInCredentials) => {
  const response = await axiosClient.post("/teacher/login", credentials);
  return response.data;
};

export const getTeacherByTeacherId = async (teacherId: number): Promise<teacherType> => {
  const response = await axiosClient.get(`/teacher/get-by-id/${teacherId}`);
  return response.data;
};

export const updateTeacherBioAndAvatar = async (newTeacherInfo: {
  teacherId: number;
  newInfo: { bioText: string; avatarPictureUrl: string };
}) => {
  const response = await axiosClient.put(`/teacher/edit/${newTeacherInfo.teacherId}`, newTeacherInfo.newInfo);
  return response.data;
};

export const getAllTeachers = async (): Promise<teacherType[]> => {
  const response = await axiosClient.get("/teacher/get-all");
  return response.data;
};
