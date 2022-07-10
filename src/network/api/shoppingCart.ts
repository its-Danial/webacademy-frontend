import axiosClient from "../axiosClient";
import { shoppingCartType } from "../../model/shoppingCart";

export const getCartByStudentId = async (studentId: string): Promise<shoppingCartType> => {
  const response = await axiosClient.get(`/cart/get-by-id/${studentId}`);
  return response.data;
};
