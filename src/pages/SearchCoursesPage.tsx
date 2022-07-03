import { FC } from "react";
import { useParams } from "react-router-dom";
import MainContainer from "../components/layout/MainContainer";
import SearchView from "../components/searching/SearchView";
import { Pagination } from "@mui/material";

type SearchCoursesPageProps = {};

const SearchCoursesPage: FC<SearchCoursesPageProps> = (props) => {
  const { categoryName } = useParams<string>();
  // Todo: pass down search results
  return (
    <MainContainer>
      <div className="m-12">
        <SearchView searchParam={categoryName} />
        <div className="flex justify-center">
          <Pagination count={5} variant="outlined" color="secondary" />
        </div>
      </div>
    </MainContainer>
  );
};
export default SearchCoursesPage;