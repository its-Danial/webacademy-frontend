import {FC} from 'react';
import {ListItemText, MenuItem} from "@mui/material";

type TopicsItemProps = {
    topic: String
}

const TopicsItem: FC<TopicsItemProps> = (props) => {
    return (
        <MenuItem sx={{'&:hover': {
                color: 'rgba(37, 99, 235)',
            }}}>
            <ListItemText>{props.topic}</ListItemText>
        </MenuItem>
    );
};
export default TopicsItem;