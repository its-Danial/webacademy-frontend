import { FC } from "react";
import { IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

type ShoppingCartIconProps = {
  numberOfItems: number;
  onCartClick: () => void;
};

const ShoppingCartIcon: FC<ShoppingCartIconProps> = (props) => {
  const onClickHandler = () => {
    props.onCartClick();
  };

  return (
    <IconButton aria-label="Shopping Cart" onClick={onClickHandler}>
      <Badge
        badgeContent={props.numberOfItems}
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
