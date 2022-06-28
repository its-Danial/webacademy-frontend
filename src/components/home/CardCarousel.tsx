import { FC } from "react";
import { Stack } from "@mui/material";
import CourseCard from "./CourseCard";

type CardCarouselProps = {};

const CardCarousel: FC<CardCarouselProps> = (props) => {
  return (
    <Stack className="my-7" direction="row" spacing={2}>
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </Stack>
  );
};
export default CardCarousel;
