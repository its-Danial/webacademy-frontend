import axiosClient from "../axiosClient";
import { accountRegisterInfo } from "../../model/accountRegisterInfo";
import { logInCredentials } from "../../model/logInCredentials";

export const registerStudent = async (studentInfo: accountRegisterInfo) => {
  const response = await axiosClient.post("/student/register", studentInfo);
  return response.data;
};

export const loginStudent = async (credentials: logInCredentials) => {
  const response = await axiosClient.post("/student/login", credentials);
  return response.data;
};

export const getAll = async () => {
  const response = await axiosClient.get("/student/get-all");
  return response.data;
};
