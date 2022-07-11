import axiosClient from "../axiosClient";
import { shoppingCartType } from "../../model/shoppingCart";

export const getCartByStudentId = async (studentId: number | undefined): Promise<shoppingCartType> => {
  const response = await axiosClient.get(`/cart/get-by-id/${studentId}`);
  return response.data;
};
export const deleteCourseFromCart = async (queryParams: {
  studentId: number | undefined;
  courseId: number | undefined;
}): Promise<shoppingCartType> => {
  const response = await axiosClient.delete(`/cart/delete/${queryParams.studentId}/${queryParams.courseId}`);
  return response.data;
};

export const addCourseToCart = async (queryParams: {
  studentId: number | undefined;
  courseId: number | undefined;
}): Promise<shoppingCartType> => {
  const response = await axiosClient.post(`/cart/add/${queryParams.studentId}/${queryParams.courseId}`);
  return response.data;
};
