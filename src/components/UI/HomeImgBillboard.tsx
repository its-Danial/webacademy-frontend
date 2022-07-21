import { FC, useRef } from "react";
import billboardImgGuy from "../../assets/billboard-guy.jpg";
import billboardImgGirl from "../../assets/billboard-girl.jpeg";
import billboardImgGirl2 from "../../assets/billboard-girl2.jpg";
import billboardImgGirl3 from "../../assets/billboard-girl3.jpg";

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
    {
      img: billboardImgGirl2,
      title: "Learning that gets you",
      subTitle: "Skills for your present (and your future). Get started with us.",
    },
    {
      img: billboardImgGirl3,
      title: "Log in for savings",
      subTitle: "We have special savings for logged-in visitors. See how much you can save.",
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
        autoPlaySpeed={3500}
        isRTL={false}
        transitionMs={900}
        itemsToShow={1}
        onNextEnd={({ index }) => {
          if (index === 3) {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
              // @ts-ignore
              carouselRef?.current?.goTo(0);
            }, 3500);
          }
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
