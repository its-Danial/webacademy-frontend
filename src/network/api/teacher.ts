import axiosClient from "../axiosClient";
import { accountRegisterInfo } from "../../model/accountRegisterInfo";
import { logInCredentials } from "../../model/logInCredentials";

export const registerTeacher = async (teacherInfo: accountRegisterInfo) => {
  const response = await axiosClient.post("/teacher/register", teacherInfo);
  return response.data;
};

export const loginTeacher = async (credentials: logInCredentials) => {
  const response = await axiosClient.post("/teacher/login", credentials);
  return response.data;
};
