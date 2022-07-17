import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import MainContainer from "../../components/layout/MainContainer";
import SearchView from "../../components/searching/SearchView";
import { Pagination } from "@mui/material";
import { useQuery } from "react-query";
import { getPaginatedCoursesByTopicSearchAndFilters } from "../../network/api/course";
import { courseType } from "../../model/course";

type SearchTopicPageProps = {};

const SearchTopicPage: FC<SearchTopicPageProps> = (props) => {
  const { topicName } = useParams<string>();
  const [searchPageNumber, setSearchPageNumber] = useState(1);
  const [minRating, setMinRating] = useState(3.0);

  const { data: paginatedFilteredCourses, isLoading } = useQuery<courseType[], Error>(
    ["topic-courses", topicName, searchPageNumber, minRating],
    () =>
      getPaginatedCoursesByTopicSearchAndFilters({
        topicName: String(topicName),
        pageNumber: searchPageNumber - 1,
        minRating: minRating,
      }),
    { keepPreviousData: true }
  );

  const onPageChangeHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchPageNumber(value);
    console.log(searchPageNumber);
  };

  return (
    <MainContainer>
      <div className="m-12">
        <SearchView
          isLoading={isLoading}
          searchParam={topicName}
          courses={paginatedFilteredCourses}
          minRating={minRating}
          setMinRating={setMinRating}
        />
        <div className="flex justify-center">
          <Pagination
            count={5}
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
export default SearchTopicPage;
