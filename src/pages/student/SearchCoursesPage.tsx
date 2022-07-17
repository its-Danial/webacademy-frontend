import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import MainContainer from "../../components/layout/MainContainer";
import SearchView from "../../components/searching/SearchView";
import { Pagination } from "@mui/material";
import { useQuery } from "react-query";
import { getPaginatedCoursesByCategorySearchAndFilters } from "../../network/api/course";
import { courseType } from "../../model/course";

type SearchCoursesPageProps = {};

const SearchCoursesPage: FC<SearchCoursesPageProps> = (props) => {
  const { categoryName } = useParams<string>();
  const [searchPageNumber, setSearchPageNumber] = useState(1);
  const [minRating, setMinRating] = useState(3.0);

  const { data: paginatedFilteredCourses, isLoading } = useQuery<courseType[], Error>(
    ["category-courses", categoryName, searchPageNumber, minRating],
    () =>
      getPaginatedCoursesByCategorySearchAndFilters({
        categoryName: String(categoryName),
        pageNumber: searchPageNumber - 1,
        minRating: minRating,
      }),
    { keepPreviousData: true }
  );

  const onPageChangeHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchPageNumber(value);
    console.log(searchPageNumber);
  };

  // Todo: pass down search results
  return (
    <MainContainer>
      <div className="m-12">
        <SearchView
          isLoading={isLoading}
          searchParam={categoryName}
          courses={paginatedFilteredCourses}
          minRating={minRating}
          setMinRating={setMinRating}
        />
        <div className="flex justify-center">
          <Pagination
            count={4}
            variant="outlined"
            color="secondary"
            page={searchPageNumber}
            onChange={onPageChangeHandler}
          />
        </div>
      </div>
    </MainContainer>
  );
};
export default SearchCoursesPage;
