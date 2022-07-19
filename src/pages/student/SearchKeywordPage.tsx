import { Button, Divider, Pagination } from "@mui/material";
import { FC, Fragment, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import MainContainer from "../../components/layout/MainContainer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from "react-loader-spinner";
import SearchCourseList from "../../components/searching/SearchCourseList";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "react-query";
import { courseType } from "../../model/course";
import HomeIcon from "@mui/icons-material/Home";
import { getCoursesByTitleSearchKeyAndPage } from "../../network/api/course";
import emptySearchSVG from "../../assets/empty-search.svg";
type SearchKeywordPageProps = {};

const SearchKeywordPage: FC<SearchKeywordPageProps> = (props) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchPageNumber, setSearchPageNumber] = useState(1);

  const [key, setKey] = useState<string>("");

  useEffect(() => {
    if (searchParams.get("title")) {
      setKey(String(searchParams.get("title")));
    }
  }, [searchParams]);

  const onPageChangeHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchPageNumber(value);
  };

  const { data: paginatedCourses, isLoading } = useQuery<courseType[], Error>(
    ["keyword-paginated-search-course", key, searchPageNumber],
    () =>
      getCoursesByTitleSearchKeyAndPage({
        page: searchPageNumber - 1,
        title: key,
      }),
    { keepPreviousData: true }
  );

  return (
    <MainContainer>
      <div className="m-12">
        <div className="flex flex-row justify-between mb-5">
          <h1 className="mb-8 font-serif text-4xl font-semibold text-gray-800 dark:text-gray-200">Search results</h1>
          <Button
            onClick={() => navigate("/")}
            className="border border-gray-900 dark:bg-blue-600 dark:text-white text-black font-bold text-lg normal-case rounded-none hover:bg-gray-200 h-3/4"
            endIcon={<HomeIcon />}
            variant="outlined"
            size="large"
          >
            Back
          </Button>
        </div>
        <div className="flex flex-col w-full">
          {isLoading && (
            <div className="flex justify-center">
              <ThreeDots color="#1c1d1f" height={150} width={150} />
            </div>
          )}
          {paginatedCourses?.map((course) => (
            <Fragment key={uuidv4()}>
              <SearchCourseList course={course} />
              <Divider className="my-3" />
            </Fragment>
          ))}
          {paginatedCourses?.length === 0 && (
            <div className="flex mx-auto flex-col justify-center text-center my-12">
              <h2 className="text-gray-500">No courses found</h2>
              <img src={emptySearchSVG} alt="" className="w-full h-full mx-auto" />
            </div>
          )}
        </div>
        {paginatedCourses && paginatedCourses?.length > 0 && (
          <div className="flex justify-center mt-8">
            <Pagination
              count={4}
              variant="outlined"
              color="secondary"
              page={searchPageNumber}
              onChange={onPageChangeHandler}
            />
          </div>
        )}
      </div>
    </MainContainer>
  );
};
export default SearchKeywordPage;
