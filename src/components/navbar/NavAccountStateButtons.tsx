import { FC, useState } from "react";
import { IconButton, Badge, Avatar, Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import MyCoursesDropDown from "./menus/MyCoursesDropDown";
type NavAccountStateButtonsProps = {};

const NavAccountStateButtons: FC<NavAccountStateButtonsProps> = (props) => {
  // TODO: need to maintain login state in global store
  const [isLoggedIn, setIsLogggedIn] = useState<Boolean>(false);

  const loggedInStateButtons = (
    <>
      <MyCoursesDropDown />
      {/* Shopping Cart */}
      <IconButton aria-label="Shopping Cart">
        <Badge
          badgeContent={4}
          componentsProps={{
            badge: { className: "bg-black text-white dark:bg-blue-600" },
          }}
        >
          <ShoppingCart className="dark:text-gray-300 hover:text-gray-400" />
        </Badge>
      </IconButton>
      <Avatar
        className="bg-black hover:bg-slate-600 dark:bg-blue-900 dark:hover:bg-blue-800"
        sx={{ width: 35, height: 35 }}
      >
        D
      </Avatar>
    </>
  );

  const notLoggedInStateButtons = (
    <>
      {/* Shopping Cart */}
      <IconButton aria-label="Shopping Cart">
        <Badge
          badgeContent={0}
          componentsProps={{
            badge: { className: "bg-black text-white dark:bg-blue-600" },
          }}
        >
          <ShoppingCart className="dark:text-gray-300 hover:text-gray-400" />
        </Badge>
      </IconButton>
      <Button
        variant="outlined"
        className="normal-case text-black border-black dark:bg-white"
        disableElevation
      >
        Log In
      </Button>
      <Button
        variant="contained"
        className="bg-black dark:bg-blue-600 normal-case"
        disableElevation
      >
        Sign Up
      </Button>
    </>
  );

  return <>{isLoggedIn ? loggedInStateButtons : notLoggedInStateButtons}</>;
};
export default NavAccountStateButtons;
