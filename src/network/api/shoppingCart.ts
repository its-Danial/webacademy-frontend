import axiosClient from "../axiosClient";
import { shoppingCartType } from "../../model/shoppingCart";

export const getCartByStudentId = async (studentId: number | undefined): Promise<shoppingCartType> => {
  const response = await axiosClient.get(`/cart/get-by-id/${studentId}`);
  return response.data;
};
export const deleteCourseFromCart = async (pathVariable: {
  studentId: number | undefined;
  courseId: number | undefined;
}): Promise<shoppingCartType> => {
  const response = await axiosClient.delete(`/cart/delete/${pathVariable.studentId}/${pathVariable.courseId}`);
  return response.data;
};

export const addCourseToCart = async (pathVariable: {
  studentId: number | undefined;
  courseId: number | undefined;
}): Promise<shoppingCartType> => {
  const response = await axiosClient.post(`/cart/add/${pathVariable.studentId}/${pathVariable.courseId}`);
  return response.data;
};

export const buyCoursesInCart = async (pathVariable: { studentId: number | undefined }): Promise<shoppingCartType> => {
  const response = await axiosClient.post(`/cart/buy-all/${pathVariable.studentId}`);
  return response.data;
};
