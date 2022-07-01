import { FC } from "react";
import { useNavigate } from "react-router-dom";
import BorderCard from "../UI/BorderCard";
import emptyCartSVG from "../../assets/emptycart.svg";
import CartHeader from "./CartHeader";
import MainContainer from "../layout/MainContainer";

type EmptyCartProps = {};

const EmptyCart: FC<EmptyCartProps> = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <MainContainer>
      <div className="m-12">
        <CartHeader itemCount={0} />
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
            focus:ring-4focus:ring-gray-300 font-medium  px-5 py-2.5 
            dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700 dark:bg-gray-700"
            >
              Keep Shopping
            </button>
          </div>
        </BorderCard>
      </div>
    </MainContainer>
  );
};
export default EmptyCart;
