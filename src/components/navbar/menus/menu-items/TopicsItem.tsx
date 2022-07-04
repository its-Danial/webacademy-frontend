import { FC } from "react";
import { ListItemText, MenuItem } from "@mui/material";

type TopicsItemProps = {
  topic: String;
  onSearchSelect: (searchParam: string) => void;
};

const TopicsItem: FC<TopicsItemProps> = (props) => {
  return (
    <MenuItem
      onClick={() => props.onSearchSelect(`/topic/${props.topic}`)}
      sx={{
        "&:hover": {
          color: "rgba(37, 99, 235)",
        },
      }}
    >
      <ListItemText>{props.topic}</ListItemText>
    </MenuItem>
  );
};
export default TopicsItem;
