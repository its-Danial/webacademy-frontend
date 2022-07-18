import { teacherType } from "./teacher";

export type categoryType = {
  categoryId: number;
  categoryName: string;
  topics: string[];
};

export type courseType = {
  courseId: number;
  title: string;
  courseRating: number;
  createdAt: string;
  courseInformation: {
    price: number;
    whatYouLearn: string;
    summary: string;
    description: string;
    coverImageUrl: string;
    previewVideoUrl: string;
    totalDuration: number;
  };
  categories: categoryType[];
  teacher: teacherType;
};

export type newCourseInformation = {
  price: number;
  whatYouLearn: string;
  summary: string;
  description: string;
  coverImageUrl: string;
  previewVideoUrl: string;
  totalDuration: number;
};
