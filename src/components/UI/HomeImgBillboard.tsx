import { FC, useRef } from "react";
import billboardImgGuy from "../../assets/billboard-guy.jpg";
import billboardImgGirl from "../../assets/billboard-girl.jpeg";
import Carousel from "react-elastic-carousel";
import { v4 as uuidv4 } from "uuid";

type HomeImgBillboardProps = {};

const HomeImgBillboard: FC<HomeImgBillboardProps> = (props) => {
  const billboardItems = [
    {
      img: billboardImgGuy,
      title: "Get there. From here.",
      subTitle: "Chart your path to success. Log in for limited-time savings on the latest topics.",
    },
    {
      img: billboardImgGirl,
      title: "Explore your future",
      subTitle: "Where can learning take you? Discover the possibilities with a course.",
    },
  ];

  const carouselRef = useRef(null);
  let resetTimeout: any;

  return (
    <div className="mb-20">
      {/* @ts-ignore */}
      <Carousel
        ref={carouselRef}
        pagination={false}
        enableAutoPlay={true}
        showArrows={false}
        autoPlaySpeed={5000}
        isRTL={false}
        itemsToShow={1}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          resetTimeout = setTimeout(() => {
            // @ts-ignore
            carouselRef?.current?.goTo(0);
          }, 5000);
        }}
      >
        {billboardItems.map((item) => (
          <div className="relative" key={uuidv4()}>
            <div
              style={{ boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)" }}
              className="absolute top-20 left-14 hidden sm:block p-10 max-w-sm bg-white border border-gray-200 
          
          dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-4xl font-serif tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{item.subTitle}</p>
            </div>
            <img src={item.img} alt="banner" className="h-full w-full" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default HomeImgBillboard;
