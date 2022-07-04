import { FC } from "react";
import BorderCard from "./BorderCard";
import CustomerFooter from "./CustomerFooter";
import Testimonials from "./Testimonials";

type TopCompaniesFooterProps = {};

const TopCompaniesFooter: FC<TopCompaniesFooterProps> = (props) => {
  return (
    <div className="mx-auto w-2/3 p-9">
      <BorderCard>
        <h4 className="text-2xl">
          Top companies offer this course to employees with WebAcademy
        </h4>
        <CustomerFooter showHeading={false} />
      </BorderCard>
    </div>
  );
};
export default TopCompaniesFooter;
