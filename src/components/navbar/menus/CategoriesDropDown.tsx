import { FC, useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Divider,
  Stack,
  MenuList,
  ListItemText,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type CategoriesDropDownProps = {};

const CategoriesDropDown: FC<CategoriesDropDownProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    // What happens when the drop down button is clicked
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="hidden sm:block normal-case text-gray-900 hover:text-blue-600 dark:text-gray-300
      dark:hover:text-blue-500"
      >
        Categories
      </Button>
      {/* on click menu open */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        componentsProps={{ root: { className: "bg-black" } }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 3.5,
            // for the arrow
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0.5,
              left: 14,
              width: 15,
              height: 15,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        // placement
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        {/* TODO: Change this into its own list Item Component */}
        <Stack direction={"row"}>
          <MenuList>
            <MenuItem>
              <ListItemText>On</ListItemText>
              <ArrowForwardIosIcon sx={{ width: "8%" }} />
            </MenuItem>
            <MenuItem>
              <ListItemText>On</ListItemText>
              <ArrowForwardIosIcon sx={{ width: "8%" }} />
            </MenuItem>
            <MenuItem>
              <ListItemText>Onsadasdasdsasd</ListItemText>
              <ArrowForwardIosIcon sx={{ width: "8%" }} />
            </MenuItem>
            <MenuItem>
              <ListItemText>On</ListItemText>
              <ArrowForwardIosIcon sx={{ width: "8%" }} />
            </MenuItem>
          </MenuList>
          <Divider orientation="vertical" flexItem />
          <MenuList>
            <MenuItem>one</MenuItem>
            <MenuItem>two</MenuItem>

            <MenuItem>Add another account</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Stack>
      </Menu>
    </>
  );
};
export default CategoriesDropDown;
