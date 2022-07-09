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

export const getCourseById = async (courseId: string | undefined): Promise<courseType> => {
  const response = await axiosClient.get(`/course/get-by-id/${courseId}`);
  return response.data;
};
