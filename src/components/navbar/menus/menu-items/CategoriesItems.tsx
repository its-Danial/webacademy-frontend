import { FC, useState } from "react";
import { Divider, MenuList, Stack } from "@mui/material";
import {
  categoryItemInterface,
  categoryItemsInterface,
  categories,
} from "../../../../helper/categoriesList";
import CategoriesItem from "./CategoriesItem";
import TopicsItem from "./TopicsItem";

type CategoriesItemsProps = {};

const CategoriesItems: FC<CategoriesItemsProps> = (props) => {
  const [topicsList, setTopicsList] = useState<string[] | null>(null);

  const onCategoryClickHandler = (categoryName: String) => {
    // Finding the topics in a category and set it to state
    categories.forEach((category) => {
      if (Object.keys(category)[0] === categoryName) {
        setTopicsList(Object.values(category)[0]);
      }
    });
  };
  const topicMenu = (
    <>
      <Divider orientation="vertical" flexItem />
      <MenuList>
        {topicsList?.map((topic) => (
          <TopicsItem key={topic} topic={topic} />
        ))}
      </MenuList>
    </>
  );

  return (
    <Stack direction={"row"}>
      <MenuList>
        {categories.map((category): any => (
          <CategoriesItem
            onCategoryClick={onCategoryClickHandler}
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
