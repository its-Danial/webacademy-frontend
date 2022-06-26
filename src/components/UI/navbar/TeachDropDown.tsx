import { FC, useState } from "react";
import { Button, Menu, MenuItem, Divider } from "@mui/material";
type TeachDropDownProps = {};

const TeachDropDown: FC<TeachDropDownProps> = (props) => {
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
        Teach on WebAcademy
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <MenuItem>one</MenuItem>
        <MenuItem>two</MenuItem>
        <Divider />
        <MenuItem>Add another account</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};
export default TeachDropDown;
