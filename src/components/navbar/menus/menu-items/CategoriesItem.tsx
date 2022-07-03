import { FC } from "react";
import { ListItemText, MenuItem } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type CategoriesItemProps = {
  categoryName: String;
  onCategoryMouseEnter: (categoryName: String) => void;
  onSearchSelect: (searchParam: string) => void;
};
const CategoriesItem: FC<CategoriesItemProps> = (props) => {
  //will send the category name on which the user hovers
  const onMouseEnterHandler = () => {
    props.onCategoryMouseEnter(props.categoryName);
  };

  return (
    <MenuItem
      onMouseOver={onMouseEnterHandler}
      onClick={() => props.onSearchSelect(`/courses/${props.categoryName}`)}
      sx={{
        "&:hover": {
          color: "rgba(37, 99, 235)",
        },
      }}
    >
      <ListItemText>{props.categoryName}</ListItemText>
      <ArrowForwardIosIcon sx={{ width: "5%" }} />
    </MenuItem>
  );
};
export default CategoriesItem;
