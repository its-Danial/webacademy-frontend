import Carousel from "react-elastic-carousel";
import CourseCard from "./CourseCard";
import { FC } from "react";
import { courseType } from "../../model/course";

type HomeCarouselProps = {
  courses: courseType[] | undefined;
};

const HomeCarousel: FC<HomeCarouselProps> = (props) => {
  return (
    // @ts-ignore
    <Carousel
      // NOTE: using this to remove pagination on the bottom
      renderPagination={({ pages, activePage, onClick }) => {
        return <p></p>;
      }}
      itemsToShow={4}
      itemPadding={[0, 5]}
      breakPoints={[
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 650, itemsToShow: 3 },
        { width: 950, itemsToShow: 4 },
        { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]}
    >
      {props.courses?.map((item, index) => (
        <CourseCard
          key={index}
          courseId={item.courseId}
          img={item.courseInformation?.coverImageUrl}
          courseName={item.title}
          teacherName={item.teacher.fullName}
          price={item.courseInformation.price}
          rating={item.courseRating}
        />
      ))}
    </Carousel>
  );
};
export default HomeCarousel;
