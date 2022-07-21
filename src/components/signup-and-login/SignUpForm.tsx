import { FC, useRef } from "react";
import { Link } from "react-router-dom";
import { accountRegisterInfo } from "../../model/accountRegisterInfo";

type SignUpFormProps = {
  onSignUpSubmit: (userDetails: accountRegisterInfo) => void;
  isError: boolean;
};

const SignUpForm: FC<SignUpFormProps> = (props) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSignUpFormSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const newStudentAccountDetails = {
      username: usernameRef.current?.value,
      fullName: fullNameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    props.onSignUpSubmit(newStudentAccountDetails);
  };

  return (
    <div
      className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12 p-5 rounded"
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <h1 className="text-lg font-bold text-center dark:text-gray-200">Sign up and start learning</h1>
      <p className="my-2 text-center text-sm dark:text-gray-300">Begin Your Journey Today</p>
      <form onSubmit={onSignUpFormSubmitHandler} className="flex flex-col mt-4">
        <input
          type="text"
          name="username"
          className="dark:bg-gray-200 dark:focus:bg-gray-50  px-4 py-3 rounded-md bg-gray-100 
          border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          placeholder="Username"
          ref={usernameRef}
          required
        />
        <input
          type="text"
          name="full-name"
          className="dark:bg-gray-200 dark:focus:bg-gray-50  px-4 py-3  mt-4 rounded-md bg-gray-100 
          border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          placeholder="Full Name"
          required
          ref={fullNameRef}
        />
        <input
          type="email"
          name="email"
          className="dark:bg-gray-200 dark:focus:bg-gray-50 px-4 py-3 mt-4 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          placeholder="Email address"
          ref={emailRef}
          required
        />
        <input
          type="password"
          name="password"
          className="dark:bg-gray-200 dark:focus:bg-gray-50 px-4 py-3 mt-4  rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        {props.isError && (
          <div className="flex justify-center">
            <p className="text-red-500 mt-4 text-sm">Username or email already taken, please try again</p>
          </div>
        )}
        <button
          type="submit"
          className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent  text-slate-100
          dark:text-slate-300 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex
          w-full justify-center items-center font-medium focus:outline-none dark:bg-blue-700 dark:hover:bg-blue-600 bg-black hover:bg-slate-700"
        >
          Register
        </button>
        <div className="flex flex-col items-center mt-5">
          <p className="mt-1 text-sm font-light text-gray-500">
            Register already?
            <Link to="/login" className="ml-1 font-medium text-slate-800 dark:text-blue-400">
              Log In now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
