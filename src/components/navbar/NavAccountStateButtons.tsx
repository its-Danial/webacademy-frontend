import { FC } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyCoursesDropDown from "./menus/MyCoursesDropDown";
import ShoppingCartIcon from "./ShoppingCartIcon";
import UserAvatar from "./menus/UserAvatar";
import { useSelector } from "react-redux";

type NavAccountStateButtonsProps = {};

const NavAccountStateButtons: FC<NavAccountStateButtonsProps> = (props) => {
  const navigate = useNavigate();
  const authUserInfo = useSelector((state: any) => state.auth);

  const onLogInClickHandler = () => {
    navigate("/login");
  };
  const onSignUpClickHandler = () => {
    navigate("/signup");
  };

  const onEmptyCartClickHandler = () => {
    navigate("/cart");
  };

  const onLoggedInCartClickHandler = () => {
    if (authUserInfo.id) {
      navigate(`/cart/${authUserInfo.id}`);
    }
  };

  const loggedInStateButtons = (
    <>
      <MyCoursesDropDown />
      <ShoppingCartIcon onCartClick={onLoggedInCartClickHandler} numberOfItems={4} />
      <UserAvatar
        onCartClick={onLoggedInCartClickHandler}
        username={authUserInfo.user.fullName}
        userId={authUserInfo.id}
      />
    </>
  );

  const notLoggedInStateButtons = (
    <>
      <ShoppingCartIcon onCartClick={onEmptyCartClickHandler} numberOfItems={0} />
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

  return <>{authUserInfo.isLoggedIn ? loggedInStateButtons : notLoggedInStateButtons}</>;
};
export default NavAccountStateButtons;
