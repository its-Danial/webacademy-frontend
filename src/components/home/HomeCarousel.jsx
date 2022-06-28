import Carousel from "react-elastic-carousel";
import CourseCard from "./CourseCard";

var items = [
  {
    link: "https://image.shutterstock.com/z/stock-vector--d-isometric-digital-design-programing-software-and-website-coding-man-on-the-computer-working-at-1307706505.jpg",
  },
  {
    link: "https://www.singaporecodingclub.com/wp-content/uploads/2022/05/Unofficial_JavaScript_logo_2.svg_.png",
  },

  {
    link: "https://miro.medium.com/max/762/1*L5QyrMNalM3yhtgdgBcvkQ.png",
  },

  {
    link: "https://www.netsolutions.com/insights/wp-content/uploads/2021/12/11-most-popular-programming-languages.webp",
  },
  {
    link: "https://www.netsolutions.com/insights/wp-content/uploads/2021/12/11-most-popular-programming-languages.webp",
  },
  {
    link: "https://www.netsolutions.com/insights/wp-content/uploads/2021/12/11-most-popular-programming-languages.webp",
  },
  {
    link: "https://www.netsolutions.com/insights/wp-content/uploads/2021/12/11-most-popular-programming-languages.webp",
  },
];

// NOTE: This should take in the courses object selected in CourseSection.tsx and then pass them to CourseCard.tsx

function HomeCarousel() {
  return (
    <Carousel
      renderPagination={false}
      itemsToShow={4}
      className="mt-6"
      enableAutoPlay
      autoPlaySpeed={3000}
    >
      {items.map((item) => (
        <CourseCard img={item.link} />
      ))}
    </Carousel>
  );
}
export default HomeCarousel;
