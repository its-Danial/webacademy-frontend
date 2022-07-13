import axiosClient from "../axiosClient";
import { courseType } from "../../model/course";

export const getAllCoursesByCategory = async (category: string | undefined): Promise<courseType[]> => {
  const response = await axiosClient.get(`/course/get-by-category/${category}`);
  return response.data;
};

export const getAllCoursesByTopic = async (topic: string | undefined): Promise<courseType[]> => {
  const response = await axiosClient.get(`/course/get-by-topic/${topic}`);
  return response.data;
};

export const getCourseById = async (courseId: number | undefined): Promise<courseType> => {
  const response = await axiosClient.get(`/course/get-by-id/${courseId}`);
  return response.data;
};

export const getStudentCoursesByStudentId = async (studentId: number): Promise<courseType[]> => {
  const response = await axiosClient.get(`/course/get-by-student-id/${studentId}`);
  return response.data;
};
