import { FC } from "react";
import { useNavigate } from "react-router-dom";
import BorderCard from "../UI/BorderCard";
import emptyCartSVG from "../../assets/emptycart.svg";

type EmptyCartProps = {};

const EmptyCart: FC<EmptyCartProps> = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <div className="m-12 ">
      <h1 className="mb-8 font-serif text-5xl font-semibold text-gray-800 dark:text-gray-200">
        Shopping Cart
      </h1>
      <div>
        <p className="mb-5 text-gray-600 dark:text-gray-300">
          0 Courses in Cart
        </p>
        <BorderCard>
          <div className="text-center">
            <img src={emptyCartSVG} alt="emptycartsvg" />
            <p className="mb-4 text-gray-500 text-base dark:text-gray-400">
              Your cart is empty. Keep shopping to find a course!
            </p>
            <button
              onClick={onClickHandler}
              type="button"
              className="text-white text-base bg-gray-800 hover:bg-gray-600 focus:outline-none 
              focus:ring-4
            focus:ring-gray-300 font-medium  px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
            dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Keep Shopping
            </button>
          </div>
        </BorderCard>
      </div>
    </div>
  );
};
export default EmptyCart;
