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
  const [isLoggedIn, setIsLogggedIn] = useState<Boolean>(true);

  const onLogInClickHandler = () => {
    navigate("/login");
  };
  const onSignUpClickHandler = () => {
    navigate("/signup");
  };

  // TODO: This should check if the user is logged in if so then navigate to "/cart:studentId"
  // FIX: Need to change where to redirect and what to display on account state
  const onEmptyCartClickHandler = () => {
    navigate("/cart");
  };

  const onLoggedInCartClickHandler = () => {
    // Todo: student Id will be passed down to here
    navigate("/cart/123");
  };

  const loggedInStateButtons = (
    <>
      <MyCoursesDropDown />
      <ShoppingCartIcon
        onCartClick={onLoggedInCartClickHandler}
        numberOfItems={4}
      />
      <UserAvatar username={"Danial"} />
    </>
  );

  const notLoggedInStateButtons = (
    <>
      <ShoppingCartIcon
        onCartClick={onEmptyCartClickHandler}
        numberOfItems={0}
      />
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
