import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "react-query";
import CheckoutForm from "../../components/cart/CheckoutForm";
import MainContainer from "../../components/layout/MainContainer";
import { shoppingCartType } from "../../model/shoppingCart";
import { getCartByStudentId, buyCoursesInCart } from "../../network/api/shoppingCart";
import { shoppingCartTotalCalculator } from "../../helper/cartTotalCalculator";

type CheckOutPageProps = {};

const CheckOutPage: FC<CheckOutPageProps> = (props) => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const authUserId: number = useSelector((state: any) => state.auth.id);

  // Note: will only run if user is logged in
  const { data: cartItems } = useQuery<shoppingCartType, Error>(
    ["cart-items", Number(authUserId)],
    () => getCartByStudentId(Number(authUserId)),
    { enabled: !!authUserId }
  );

  const buyCoursesInCartMutation = useMutation(buyCoursesInCart, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart-items", Number(authUserId)]);
      queryClient.invalidateQueries(["student-courses", Number(authUserId)]);
      queryClient.invalidateQueries(["student-progresses", Number(authUserId)]);
    },
  });

  const onCompleteCheckoutClickHandler = () => {
    buyCoursesInCartMutation.mutate({ studentId: Number(authUserId) }, { onSuccess: () => navigate("/purchased") });
  };

  const cartTotal = shoppingCartTotalCalculator(cartItems);

  return (
    <MainContainer>
      <CheckoutForm
        mutationIsLoading={buyCoursesInCartMutation.isLoading}
        onCompleteCheckout={onCompleteCheckoutClickHandler}
        cartTotal={cartTotal}
      />
    </MainContainer>
  );
};
export default CheckOutPage;
