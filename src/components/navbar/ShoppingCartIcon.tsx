import { FC } from "react";
import { IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { shoppingCartType } from "../../model/shoppingCart";
import { getCartByStudentId } from "../../network/api/shoppingCart";

type ShoppingCartIconProps = {
  onCartClick: () => void;
};

const ShoppingCartIcon: FC<ShoppingCartIconProps> = (props) => {
  const authUserId = useSelector((state: any) => state.auth.id);

  const { data: cartItems } = useQuery<shoppingCartType, Error>(["cart-items", Number(authUserId)], () =>
    getCartByStudentId(authUserId)
  );

  const onClickHandler = () => {
    props.onCartClick();
  };

  return (
    <IconButton aria-label="Shopping Cart" onClick={onClickHandler}>
      <Badge
        badgeContent={cartItems?.courses.length}
        showZero
        componentsProps={{
          badge: { className: "bg-black text-white dark:bg-blue-600" },
        }}
      >
        <ShoppingCart className="dark:text-gray-300 hover:text-gray-400" />
      </Badge>
    </IconButton>
  );
};
export default ShoppingCartIcon;
