import { FC } from "react";

type TeacherInfoProps = {};

const TeacherInfo: FC<TeacherInfoProps> = (props) => {
  return (
    <div className="mx-auto w-2/3 p-9">
      <h4 className="text-xl underline underline-offset-4 text-gray-700">
        Colt Steele
      </h4>
      <div className="flex flex-row mt-6">
        <div className="basis-4/5">
          <p className="text-base text-gray-800">
            Hi! I'm Colt. I'm a developer with a serious love for teaching. I've
            spent the last few years teaching people to program at 2 different
            immersive bootcamps where I've helped hundreds of people become web
            developers and change their lives. My graduates work at companies
            like Google, Salesforce, and Square. Most recently, I led
            Galvanize's SF's 6 month immersive program as Lead Instructor and
            Curriculum Director. After graduating from my class, 94% of my
            students went on to receive full-time developer roles. I also worked
            at Udacity as a Senior Course Developer on the web development team
            where I got to reach thousands of students daily. I’ve since focused
            my time on bringing my classroom teaching experience to an online
            environment. In 2016 I launched my Web Developer Bootcamp course,
            which has since gone on to become one of the best selling and top
            rated courses on Udemy. I was also voted Udemy’s Best New Instructor
            of 2016. I've spent years figuring out the "formula" to teaching
            technical skills in a classroom environment, and I'm really excited
            to finally share my expertise with you. I can confidently say that
            my online courses are without a doubt the most comprehensive ones on
            the market. Join me on this crazy adventure!
          </p>
        </div>
        <div className="basis-1/5">
          <div className="flex justify-center">
            <img
              className="rounded-full w-32 my-2"
              src="https://s.udemycdn.com/premium-clp/instructors/colt-steele/ColtSteele-1x.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeacherInfo;
