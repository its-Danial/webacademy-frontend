import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

import { FC } from "react";
type NavDropDownButtonProps = { title: String };

const NavDropDownButton: FC<NavDropDownButtonProps> = (props) => {
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
        {props.title}
      </Button>

      {/* This should be conditionally rendered based on the type of button */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>One</MenuItem>
        <MenuItem onClick={handleClose}>Two</MenuItem>
        <MenuItem onClick={handleClose}>Three</MenuItem>
      </Menu>
    </>
  );
};

export default NavDropDownButton;
