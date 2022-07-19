import { FC } from "react";
import { useSearchParams, useParams } from "react-router-dom";

type SearchKeywordPageProps = {};

const SearchKeywordPage: FC<SearchKeywordPageProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useParams();
  console.log("param", params);

  console.log(searchParams.get("title"));

  return <div>SearchKeywordPage</div>;
};
export default SearchKeywordPage;
