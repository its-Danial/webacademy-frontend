import { shoppingCartType } from "../model/shoppingCart";

export const shoppingCartTotalCalculator = (cartItems: shoppingCartType | undefined) => {
  let totalCost: number = 0;
  if (cartItems?.courses.length === 0) {
    return 0;
  } else {
    cartItems?.courses.forEach((course) => {
      totalCost += course.courseInformation.price;
    });
    return totalCost;
  }
};
