import { FC } from "react";
import CheckoutForm from "../components/cart/CheckoutForm";
import MainContainer from "../components/layout/MainContainer";

type CheckOutPageProps = {};

const CheckOutPage: FC<CheckOutPageProps> = (props) => {
  return (
    <MainContainer>
      <CheckoutForm />
    </MainContainer>
  );
};
export default CheckOutPage;
