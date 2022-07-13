import { FC, useState } from "react";
import { Avatar, IconButton, Tooltip, Menu, MenuItem, ListItemIcon, Divider, Badge, ListItemText } from "@mui/material";
import { Logout, ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSliceActions } from "../../../store/authSlice";
import { shoppingCartType } from "../../../model/shoppingCart";
import { useQuery } from "react-query";
import { getCartByStudentId } from "../../../network/api/shoppingCart";

type UserAvatarProps = {
  username: string;
  userId: string;
  onCartClick: () => void;
};

const UserAvatar: FC<UserAvatarProps> = (props) => {
  const authUserId = useSelector((state: any) => state.auth.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: cartItems } = useQuery<shoppingCartType, Error>(["cart-items", Number(authUserId)], () =>
    getCartByStudentId(authUserId)
  );

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogOutClickHandler = () => {
    dispatch(authSliceActions.setLogOut());
    navigate("/");
  };

  const onCartClickHandler = () => {
    props.onCartClick();
  };

  const usernameFirstLetter = props.username.charAt(0);

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            className="bg-black hover:bg-slate-600 dark:bg-blue-900 dark:hover:bg-blue-800"
            sx={{ width: 35, height: 35 }}
          >
            {usernameFirstLetter}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            minWidth: 170,
            px: 1,
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 3.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar sx={{ width: 35, height: 35, backgroundColor: "black", color: "white" }}>
            {usernameFirstLetter}
          </Avatar>
          {props.username}
        </MenuItem>

        <Divider />

        <MenuItem onClick={onCartClickHandler}>
          <ListItemIcon>
            <ShoppingCart fontSize="small" />
          </ListItemIcon>
          <ListItemText>My Cart</ListItemText>
          <Badge
            badgeContent={cartItems?.courses.length}
            showZero
            componentsProps={{
              badge: { style: { backgroundColor: "black", color: "white" } },
            }}
          />
        </MenuItem>
        <MenuItem onClick={onLogOutClickHandler}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
export default UserAvatar;
