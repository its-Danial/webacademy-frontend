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

export const deleteCourseByCourseId = async (pathVariable: {
  teacherId: number;
  courseId: number;
}): Promise<string> => {
  const response = await axiosClient.delete(`/course/delete/${pathVariable.teacherId}/${pathVariable.courseId}`);
  return response.data;
};

export const getPaginatedCoursesByCategorySearch = async (queryParams: {
  categoryName: string;
  pageNumber: number;
}): Promise<courseType[]> => {
  const response = await axiosClient.get(
    `/course/filter?categoryName=${queryParams.categoryName}&page=${queryParams.pageNumber}`
  );
  return response.data;
};
export const getPaginatedCoursesByCategorySearchAndFilters = async (queryParams: {
  categoryName: string;
  pageNumber: number;
  minRating: number;
}): Promise<courseType[]> => {
  const response = await axiosClient.get(
    `/course/filter?categoryName=${queryParams.categoryName}&minRating=${queryParams.minRating}&maxRating=5.0&page=${queryParams.pageNumber}`
  );
  return response.data;
};
export const getPaginatedCoursesByTopicSearchAndFilters = async (queryParams: {
  topicName: string;
  pageNumber: number;
  minRating: number;
}): Promise<courseType[]> => {
  const response = await axiosClient.get(
    `/course/filter?topic=${queryParams.topicName}&minRating=${queryParams.minRating}&maxRating=5.0&page=${queryParams.pageNumber}`
  );
  return response.data;
};
