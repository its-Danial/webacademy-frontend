import {FC} from 'react';
import {ListItemText, MenuItem} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type CategoriesItemProps = {
    categoryName: String,
    onCategoryClick: (categoryName:String) => void
}
const CategoriesItem: FC<CategoriesItemProps> = (props) => {

    //will send the category name on which the user hovers
    const onMouseEnterHandler = () => {
        props.onCategoryClick(props.categoryName);
    }

    return (
        <MenuItem onMouseOver={onMouseEnterHandler} sx={{'&:hover': {
                color: 'rgba(37, 99, 235)',
            }}}>
            <ListItemText >{props.categoryName}</ListItemText>
            <ArrowForwardIosIcon sx={{width: "5%"}}/>
        </MenuItem>
    );
};
export default CategoriesItem;
