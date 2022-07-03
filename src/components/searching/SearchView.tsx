import { FC, useState } from "react";
import { Button, Collapse, Divider } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterAccordion from "./FilterAccordion";
import SearchCourseList from "./SearchCourseList";

type SearchViewProps = {
  searchParam: string | undefined;
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
          <SearchCourseList imgUrl="https://i3.ytimg.com/vi/VPBsE4ul_uw/maxresdefault.jpg" />
          <Divider className="my-3" />
          <SearchCourseList imgUrl="https://i3.ytimg.com/vi/VPBsE4ul_uw/maxresdefault.jpg" />
          <Divider className="my-3" />
          <SearchCourseList imgUrl="https://i3.ytimg.com/vi/VPBsE4ul_uw/maxresdefault.jpg" />
          <Divider className="my-3" />
          <SearchCourseList imgUrl="https://i3.ytimg.com/vi/VPBsE4ul_uw/maxresdefault.jpg" />
          <Divider className="my-3" />
          <SearchCourseList imgUrl="https://i3.ytimg.com/vi/VPBsE4ul_uw/maxresdefault.jpg" />
          <Divider className="my-3" />
          <SearchCourseList imgUrl="https://i3.ytimg.com/vi/VPBsE4ul_uw/maxresdefault.jpg" />
          <Divider className="my-3" />
        </div>
      </div>
    </>
  );
};
export default SearchView;
