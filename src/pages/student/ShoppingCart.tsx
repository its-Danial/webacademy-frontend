import { FC } from "react";
import CartHeader from "../../components/cart/CartHeader";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CartCourseCard from "../../components/UI/CartCourseCard";
import CheckOutBox from "../../components/UI/CheckOutBox";
import MainContainer from "../../components/layout/MainContainer";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { shoppingCartType } from "../../model/shoppingCart";
import { getCartByStudentId } from "../../network/api/shoppingCart";
import EmptyCart from "../../components/cart/EmptyCart";
import { deleteCourseFromCart } from "../../network/api/shoppingCart";

type ShoppingCartProps = {};

const ShoppingCart: FC<ShoppingCartProps> = (props) => {
  const queryClient = useQueryClient();
  const { studentId } = useParams();

  const { data: cartItems } = useQuery<shoppingCartType, Error>(["cart-items", Number(studentId)], () =>
    getCartByStudentId(Number(studentId))
  );

  const deleteCourseFromCartMutation = useMutation(deleteCourseFromCart, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart-items", Number(studentId)]);
    },
  });

  const onDeleteCourseClickHandler = (courseId: number) => {
    deleteCourseFromCartMutation.mutate({
      studentId: Number(studentId),
      courseId: courseId,
    });
  };

  return (
    <>
      {cartItems?.courses.length === 0 ? (
        <EmptyCart />
      ) : (
        <MainContainer>
          <div className="m-12">
            <CartHeader itemCount={cartItems?.courses.length} />
            <div className="flex row shrink-1">
              <div className="w-8/12">
                {cartItems?.courses.map((course) => (
                  <CartCourseCard
                    key={uuidv4()}
                    title={course.title}
                    rating={course.courseRating}
                    price={course.courseInformation.price}
                    teacherName={course.teacher.fullName}
                    courseId={course.courseId}
                    imgUrl={course.courseInformation.coverImageUrl}
                    onDelete={onDeleteCourseClickHandler}
                  />
                ))}
              </div>
              <CheckOutBox />
            </div>
          </div>
        </MainContainer>
      )}
    </>
  );
};
export default ShoppingCart;
