import { progressType } from "../model/studentProgress";

export type progressPerCourseType = {
  courseId: number;
  progress: number;
};

export const calculateProgress = (studentProgress: progressType[] | undefined) => {
  const progressPerCourseList: progressPerCourseType[] = [];

  studentProgress?.forEach((progress) => {
    const progressForCourse = {
      courseId: progress.courseId,
      progress: (progress.completedLectures / progress.totalLectures) * 100,
    };
    progressPerCourseList.push(progressForCourse);
  });

  return progressPerCourseList;
};
