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
  };
  categories: categoryType[];
  teacher: teacherType;
};
