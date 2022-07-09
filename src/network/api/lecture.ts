import axiosClient from "../axiosClient";
import { lectureType } from "../../model/lecture";

export const getLecturesByCourseId = async (courseId: string | undefined): Promise<lectureType[]> => {
  const response = await axiosClient.get(`/lecture/get-by-course-id/${courseId}`);
  return response.data;
};
