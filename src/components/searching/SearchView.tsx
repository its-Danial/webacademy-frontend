import { FC, Fragment, useState } from "react";
import { Button, Collapse, Divider } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterAccordion from "./FilterAccordion";
import SearchCourseList from "./SearchCourseList";
import { courseType } from "../../model/course";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from "react-loader-spinner";
import { v4 as uuidv4 } from "uuid";

type SearchViewProps = {
  searchParam: string | undefined;
  courses: courseType[] | undefined;
  minRating: number;
  setMinRating: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
};

const SearchView: FC<SearchViewProps> = (props) => {
  const [showFilter, setShowFilter] = useState<boolean>(true);

  const onShowFiltersHandler = () => {
    setShowFilter((prevState) => !prevState);
    props.setMinRating(0);
  };

  return (
    <>
      <h1 className="mb-8 font-serif text-4xl font-semibold text-gray-800 dark:text-gray-200">
        All {props.searchParam} courses
      </h1>
      <Button
        onClick={onShowFiltersHandler}
        className="border border-gray-900 dark:bg-blue-600 dark:text-white text-black font-bold text-lg normal-case rounded-none hover:bg-gray-200"
        startIcon={<FilterListIcon />}
        variant="outlined"
        size="large"
      >
        Filter
      </Button>
      <div className="flex flex-row my-6">
        <div>
          <Collapse orientation="horizontal" in={showFilter}>
            <FilterAccordion minRating={props.minRating} setMinRating={props.setMinRating} />
          </Collapse>
        </div>
        <div className="flex flex-col w-full">
          {props.isLoading && (
            <div className="flex justify-center">
              <ThreeDots color="#1c1d1f" height={150} width={150} />
            </div>
          )}
          {props.courses?.map((course) => (
            <Fragment key={uuidv4()}>
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
