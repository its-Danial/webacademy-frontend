import { FC } from "react";
import { Button, Divider } from "@mui/material";
type AboutCourseSectionProps = {};

const AboutCourseSection: FC<AboutCourseSectionProps> = (props) => {
  return (
    <div className="p-6 mt-3 mb-8">
      <div className="p-5">
        <h2 className="font-semibold text-2xl text-gray-900">
          About this course
        </h2>
        <p className="mt-4 text-base font-light">
          Learn HTML5, CSS3, JavaScript by building a modern looking responsive
          website.
        </p>
      </div>
      <Divider className="bg-gray-300" />
      <div className="p-5 flex flex-row text-base font-light">
        <div className="basis-1/3">By the numbers</div>
        <div className="basis-1/3">
          <div>Skill level: Beginner Level</div>
          <div>Students: 281347</div>
          <div>Languages: English</div>
          <div>Captions: Yes</div>
        </div>
        <div className="basis-1/3">
          <div>Lectures: 64</div>
          <div>Video: 17 total hours</div>
        </div>
      </div>
      <Divider className="bg-gray-300" />
      <div className="p-5 flex flex-row text-base font-light">
        <div className="basis-1/3">Certificates</div>
        <div className="basis-2/3">
          <p className="w-4/5 mb-5">
            Get WebAcademy certificate by completing entire course
          </p>
          <Button
            className="rounded-none normal-case disabled:text-gray-400 border-gray-400 w-[60%]"
            variant="outlined"
            disabled
          >
            WebAcademy Certificate
          </Button>
        </div>
      </div>
      <Divider className="bg-gray-300" />
      <div className="p-5 flex flex-row text-base font-light">
        <div className="basis-1/3">Features</div>
        <div className="basis-2/3">
          Available on{" "}
          <span className="underline underline-offset-2 text-purple-500 font-bold">
            iOS
          </span>{" "}
          and{" "}
          <span className="underline underline-offset-2 text-purple-500 font-bold">
            Android
          </span>
        </div>
      </div>
      <Divider className="bg-gray-300" />
      <div className="p-5 flex flex-row text-base font-light">
        <div className="basis-1/3">Description</div>
        <div className="basis-2/3">
          <p className="w-4/5">
            Want to learn Web Design & Web Development Skills? Then this is the
            RIGHT course For you! Many languages came and disappear but
            JavaScript is language that is enjoying a high run and demand in the
            programming world. The very first things you need to learn HTML5,
            CSS3, JavaScript and JQuery to become a Web Developer and off-course
            some Web Design Guidelines. This course will exactly teach you all
            these New Skills to become a good Web Developer. In this course, you
            will also learn Web Design Guidelines, which you can apply to Real
            World Websites.
          </p>
        </div>
      </div>
      <Divider className="bg-gray-300" />
      <div className="p-5 flex flex-row text-base font-light">
        <div className="basis-1/3">Instructor</div>
        <div className="basis-2/3 ">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <img
                className="rounded-full w-20 mr-6"
                src="https://s.udemycdn.com/premium-clp/instructors/colt-steele/ColtSteele-1x.jpg"
                alt=""
              />
              <div>
                <h5 className=" text-lg font-semibold text-gray-700">
                  Hemanth kumar
                </h5>
              </div>
            </div>
            <p className="w-4/5 mt-8">
              Hemanth Kumar has years of experience as a professional instructor
              and trainer for Data Science and programming. Over the course of
              his career he has developed a skill set in analyzing data and
              Design data modeling processes to create algorithms and predictive
              models and perform custom analysis and he hopes to use his
              experience in teaching data science and programming to help other
              people learn the power of programming the ability to analyze data,
              as well as present the data in clear and beautiful visualizations.
              Currently he works as the Data Scientist and provides in-person
              data science and programming training courses to employees working
              at top companies, including HCL, IBM, Deloitte and many more. Feel
              free to contact him for more infor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutCourseSection;
