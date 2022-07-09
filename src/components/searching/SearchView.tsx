import { FC, Fragment, useState } from "react";
import { Button, Collapse, Divider } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterAccordion from "./FilterAccordion";
import SearchCourseList from "./SearchCourseList";
import { courseType } from "../../model/course";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from "react-loader-spinner";

type SearchViewProps = {
  searchParam: string | undefined;
  courses: courseType[] | undefined;
  isLoading: boolean;
};

const SearchView: FC<SearchViewProps> = (props) => {
  const [showFilter, setShowFilter] = useState<boolean>(true);

  return (
    <>
      <h1 className="mb-8 font-serif text-4xl font-semibold text-gray-800 dark:text-gray-200">
        All {props.searchParam} courses
      </h1>
      <Button
        onClick={() => setShowFilter((prevState) => !prevState)}
        className="border border-gray-900 text-black font-bold text-lg normal-case rounded-none hover:bg-gray-200"
        startIcon={<FilterListIcon />}
        variant="outlined"
        size="large"
      >
        Filter
      </Button>
      <div className="flex flex-row my-6">
        <div>
          <Collapse orientation="horizontal" in={showFilter}>
            <FilterAccordion />
          </Collapse>
        </div>
        <div className="flex flex-col w-full">
          {props.isLoading && (
            <div className="flex justify-center">
              <ThreeDots color="#1c1d1f" height={150} width={150} />
            </div>
          )}
          {props.courses?.map((course) => (
            <Fragment key={course.courseId}>
              <SearchCourseList course={course} />

              <Divider className="my-3" />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
export default SearchView;
