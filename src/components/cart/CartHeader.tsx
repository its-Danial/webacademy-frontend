import { FC } from "react";

type CartHeaderProps = {
  itemCount: number;
};

const CartHeader: FC<CartHeaderProps> = (props) => {
  return (
    <>
      <h1 className="mb-8 font-serif text-4xl font-semibold text-gray-800 dark:text-gray-200">
        Shopping Cart
      </h1>
      <p className="mb-5 text-base text-gray-600 dark:text-gray-300">
        {props.itemCount} Courses in Cart
      </p>
    </>
  );
};
export default CartHeader;
