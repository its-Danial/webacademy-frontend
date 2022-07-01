import { FC } from "react";
import CartHeader from "../components/cart/CartHeader";
import { useParams } from "react-router-dom";
import CartCourseCard from "../components/UI/CartCourseCard";
import CheckOutBox from "../components/UI/CheckOutBox";

type ShoppingCartProps = {};

const ShoppingCart: FC<ShoppingCartProps> = (props) => {
  // Note: this will be the student id which will be used to get car items
  const { studentId } = useParams();

  return (
    <div className=" m-12">
      <CartHeader itemCount={2} />
      <div className="flex row shrink-1">
        <div className="w-8/12">
          <CartCourseCard imgUrl="https://i3.ytimg.com/vi/VPBsE4ul_uw/maxresdefault.jpg" />
          <CartCourseCard imgUrl="https://i3.ytimg.com/vi/GizMdIF_hfc/maxresdefault.jpg" />
        </div>
        <CheckOutBox />
      </div>
    </div>
  );
};
export default ShoppingCart;
