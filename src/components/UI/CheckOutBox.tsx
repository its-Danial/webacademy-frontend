import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

type CheckOutBoxProps = {
  cartTotal: number;
};

const CheckOutBox: FC<CheckOutBoxProps> = (props) => {
  const navigate = useNavigate();
  const authUserId: number = useSelector((state: any) => state.auth.id);

  const onCheckoutButtonClickHandler = () => {
    navigate(`/checkout/${authUserId}`);
  };

  return (
    <div className="ml-14 w-1/6">
      <p className="text-lg text-gray-600 mb-2 dark:text-gray-400">Total:</p>
      {/* Note: this should be calculated based on the times in the cart */}
      <h2 className="text-4xl font-extrabold mb-3 dark:text-gray-200">${props.cartTotal}</h2>
      <button
        onClick={onCheckoutButtonClickHandler}
        type="button"
        className="text-white text-base bg-gray-800 hover:bg-gray-600 focus:outline-none 
              focus:ring-4 focus:ring-gray-300 font-medium  px-5 py-2.5 w-full 
            dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700 dark:bg-gray-700"
      >
        Checkout
      </button>
    </div>
  );
};
export default CheckOutBox;
