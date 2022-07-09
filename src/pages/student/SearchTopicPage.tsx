import { FC } from "react";
import { useParams } from "react-router-dom";
import MainContainer from "../../components/layout/MainContainer";
import SearchView from "../../components/searching/SearchView";
import { Pagination } from "@mui/material";
import { useQuery } from "react-query";
import { getAllCoursesByTopic } from "../../network/api/course";
import { courseType } from "../../model/course";

type SearchTopicPageProps = {};

const SearchTopicPage: FC<SearchTopicPageProps> = (props) => {
  const { topicName } = useParams<string>();

  const { data: courses, isLoading } = useQuery<courseType[], Error>(
    ["topic-courses", topicName],
    () => getAllCoursesByTopic(topicName)
  );
  // Todo: pass down search results
  return (
    <MainContainer>
      <div className="m-12">
        <SearchView
          isLoading={isLoading}
          searchParam={topicName}
          courses={courses}
        />
        <div className="flex justify-center">
          <Pagination count={5} variant="outlined" color="secondary" />
        </div>
      </div>
    </MainContainer>
  );
};
export default SearchTopicPage;
