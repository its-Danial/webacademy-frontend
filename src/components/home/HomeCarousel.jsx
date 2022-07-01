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
    link: "http://i3.ytimg.com/vi/7sDY4m8KNLc/hqdefault.jpg",
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
      // NOTE: using this to remove pagination on the bottom
      renderPagination={({ pages, activePage, onClick }) => {
        return <p></p>;
      }}
      itemsToShow={4}
      itemPadding={[0, 5]}
      breakPoints={[
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 650, itemsToShow: 3 },
        { width: 950, itemsToShow: 4 },
        { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]}
    >
      {items.map((item, index) => (
        <CourseCard key={index} img={item.link} />
      ))}
    </Carousel>
  );
}
export default HomeCarousel;
