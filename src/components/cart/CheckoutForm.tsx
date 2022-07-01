import { FC } from "react";

type CheckoutFormProps = {};

const CheckoutForm: FC<CheckoutFormProps> = (props) => {
  return (
    <>
      <div className="absolute ml-32 mt-10 ">
        <h1 className="font-serif text-4xl font-semibold text-gray-800 dark:text-gray-200">
          Checkout
        </h1>
        <p className="mt-2">Payment Method and Information</p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="md:w-1/2 lg:w-1/3 p-5 my-28 sm:ml-32 rounded">
          <form className="flex flex-col mt-4">
            {/* Note: Credit card Selects */}
            <div className="mb-3 flex -mx-2">
              <div className="px-2">
                <label
                  htmlFor="type1"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="type"
                    id="type1"
                    checked
                  />
                  <img
                    src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                    className="h-8 ml-3"
                    alt=""
                  />
                </label>
              </div>
              <div className="px-2">
                <label
                  htmlFor="type2"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="type"
                    id="type2"
                  />
                  <img
                    src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                    className="h-8 ml-3"
                    alt=""
                  />
                </label>
              </div>
            </div>
            <label htmlFor="cardName" className="my-2 font-bold text-gray-600">
              Name on card
            </label>
            <input
              id="cardName"
              name="cardName"
              className="dark:bg-gray-200 dark:focus:bg-gray-50 px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Name on card"
              required
            />
            <label htmlFor="cardName" className="my-2 font-bold text-gray-600">
              Card number
            </label>
            <input
              id="cardName"
              name="cardName"
              className="dark:bg-gray-200 dark:focus:bg-gray-50 px-4 py-3
             rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Card number"
              required
            />
            <div className="flex flex-row justify-between">
              <div className="flex flex-col my-2">
                <label
                  htmlFor="securityCode"
                  className="font-bold text-gray-600"
                >
                  Security Code
                </label>
                <input
                  id="securityCode"
                  name="securityCode"
                  className="dark:bg-gray-200 dark:focus:bg-gray-50 px-4 py-3 mt-2 rounded-md bg-gray-100 border-transparent
                   focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  placeholder="Security Code"
                  required
                />
              </div>
              <div className="flex flex-col my-2">
                <label
                  htmlFor="expirationDate"
                  className="font-bold text-gray-600"
                >
                  Expiration Date
                </label>
                <input
                  id="expirationDate"
                  name="
                  expirationDate"
                  className="dark:bg-gray-200 dark:focus:bg-gray-50 px-4 py-3 mt-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  placeholder="MM/YY"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        {/* Note: gray column on the right */}
        <div className="bg-gray-100 pr-52 pb-48 flex flex-col items-center ">
          <div className="p-5 m-10 pt-14">
            <div className="w-60">
              <h3 className="font-semibold text-2xl">Summary</h3>
              <hr className="border-gray-50 dark:border-gray-700 lg:my-8" />
              <p className="flex justify-between">
                Total: <span>$11.99</span>
              </p>
              <p className="text-xs mt-5">
                By completing your purchase you agree to these Terms of Service.
              </p>
              <button
                type="submit"
                className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent  text-slate-100
              dark:text-slate-300 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex
              w-full justify-center items-center font-medium focus:outline-none dark:bg-blue-700 dark:hover:bg-blue-600 bg-black hover:bg-slate-700"
              >
                Complete Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckoutForm;
