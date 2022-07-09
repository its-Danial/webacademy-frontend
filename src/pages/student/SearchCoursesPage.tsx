import { FC } from "react";
import { useParams } from "react-router-dom";
import MainContainer from "../../components/layout/MainContainer";
import SearchView from "../../components/searching/SearchView";
import { Pagination } from "@mui/material";
import { useQuery } from "react-query";
import { getAllCoursesByCategory } from "../../network/api/course";

import { courseType } from "../../model/course";

type SearchCoursesPageProps = {};

const SearchCoursesPage: FC<SearchCoursesPageProps> = (props) => {
  const { categoryName } = useParams<string>();

  console.log(categoryName);

  const { data: courses, isLoading } = useQuery<courseType[], Error>(
    ["category-courses", categoryName],
    () => getAllCoursesByCategory(categoryName)
  );

  // Todo: pass down search results
  return (
    <MainContainer>
      <div className="m-12">
        <SearchView
          isLoading={isLoading}
          searchParam={categoryName}
          courses={courses}
        />
        <div className="flex justify-center">
          <Pagination count={5} variant="outlined" color="secondary" />
        </div>
      </div>
    </MainContainer>
  );
};
export default SearchCoursesPage;
