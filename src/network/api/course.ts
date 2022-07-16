import { newCourseInformation } from "./../../model/course";
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

export const getTeacherCoursesByTeacherId = async (teacherId: number): Promise<courseType[]> => {
  const response = await axiosClient.get(`/course/get-by-teacher-id/${teacherId}`);
  return response.data;
};

type createCourseByTeacherIdType = {
  teacherId: number;
  courseData: {
    title: string;
    categories: { categoryId: number }[];
  };
};

export const addCourseByTeacherId = async (data: createCourseByTeacherIdType): Promise<courseType> => {
  const response = await axiosClient.post(`/course/create/${data.teacherId}`, data.courseData);
  return response.data;
};

export const updateCourseInformationByCourseId = async (data: {
  courseId: number;
  newCourseInformation: newCourseInformation;
}): Promise<courseType> => {
  const response = await axiosClient.put(`/course/manage/${data.courseId}`, data.newCourseInformation);
  return response.data;
};
