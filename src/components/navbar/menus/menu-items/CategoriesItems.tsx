import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, MenuList, Stack } from "@mui/material";
import { categories } from "../../../../helper/categoriesList";
import CategoriesItem from "./CategoriesItem";
import TopicsItem from "./TopicsItem";

type CategoriesItemsProps = {
  onItemClick: () => void;
};

const CategoriesItems: FC<CategoriesItemsProps> = (props) => {
  const navigate = useNavigate();

  const [topicsList, setTopicsList] = useState<string[] | null>(null);

  const onCategoryMouseEnterHandler = (categoryName: String) => {
    // Finding the topics in a category and set it to state
    categories.forEach((category) => {
      if (Object.keys(category)[0] === categoryName) {
        setTopicsList(Object.values(category)[0]);
      }
    });
  };

  const onSearchSelectClickHandler = (searchParam: string) => {
    navigate(searchParam);
    props.onItemClick();
  };

  const topicMenu = (
    <>
      <Divider orientation="vertical" flexItem />
      <MenuList>
        {topicsList?.map((topic) => (
          <TopicsItem onSearchSelect={onSearchSelectClickHandler} key={topic} topic={topic} />
        ))}
      </MenuList>
    </>
  );

  return (
    <Stack direction={"row"}>
      <MenuList>
        {categories.map((category): any => (
          <CategoriesItem
            onSearchSelect={onSearchSelectClickHandler}
            onCategoryMouseEnter={onCategoryMouseEnterHandler}
            key={Object.keys(category)[0]}
            categoryName={Object.keys(category)[0]}
          />
        ))}
      </MenuList>
      {topicsList && topicMenu}
    </Stack>
  );
};
export default CategoriesItems;
