import { FC } from "react";
import { FiberManualRecord } from "@mui/icons-material";

type CourseOverViewItemProps = {
  title: string;
};

const CourseOverViewItem: FC<CourseOverViewItemProps> = (props) => {
  return (
    <div className="mb-3 flex flex-row">
      <div className="mt-1">
        <FiberManualRecord className="text-sm" />
      </div>
      <div>
        <h4 className="text-lg ml-3 font-normal text-gray-700">
          {props.title}
        </h4>
      </div>
    </div>
  );
};
export default CourseOverViewItem;
