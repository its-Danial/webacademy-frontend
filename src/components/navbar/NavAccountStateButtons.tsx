import { FC, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyCoursesDropDown from "./menus/MyCoursesDropDown";
import ShoppingCartIcon from "./ShoppingCartIcon";
import UserAvatar from "./menus/UserAvatar";

type NavAccountStateButtonsProps = {};

const NavAccountStateButtons: FC<NavAccountStateButtonsProps> = (props) => {
  const navigate = useNavigate();

  // TODO: need to maintain login state in global store
  const [isLoggedIn, setIsLogggedIn] = useState<Boolean>(false);

  const onLogInClickHandler = () => {
    navigate("/login");
  };
  const onSignUpClickHandler = () => {
    navigate("/signup");
  };

  const loggedInStateButtons = (
    <>
      <MyCoursesDropDown />
      {/* Shopping Cart */}
      <ShoppingCartIcon numberOfItems={4} />
      <UserAvatar username={"Danial"} />
    </>
  );

  const notLoggedInStateButtons = (
    <>
      {/* Shopping Cart */}
      <ShoppingCartIcon numberOfItems={0} />
      <Button
        onClick={onLogInClickHandler}
        variant="outlined"
        className="normal-case text-black border-black dark:bg-white"
        disableElevation
      >
        Log In
      </Button>
      <Button
        onClick={onSignUpClickHandler}
        variant="contained"
        className="bg-black dark:bg-blue-700 normal-case"
        disableElevation
      >
        Sign Up
      </Button>
    </>
  );

  return <>{isLoggedIn ? loggedInStateButtons : notLoggedInStateButtons}</>;
};
export default NavAccountStateButtons;
