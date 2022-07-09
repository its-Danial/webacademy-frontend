import { FC, useRef } from "react";
import { logInCredentials } from "../../model/logInCredentials";

type LogInFormProps = {
  onLoginSubmit: (credentials: logInCredentials) => void;
};

const LogInForm: FC<LogInFormProps> = (props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLogInFormSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newStudentAccountDetails = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    props.onLoginSubmit(newStudentAccountDetails);
  };

  return (
    <div
      className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12 p-5 rounded"
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <h1 className="text-lg font-bold text-center dark:text-gray-200">
        Log In to Your WebAcademy Account!
      </h1>
      <hr className="border-gray-50 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <form onSubmit={onLogInFormSubmitHandler} className="flex flex-col mt-4">
        <input
          type="email"
          name="email"
          className="dark:bg-gray-200 dark:focus:bg-gray-50 px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
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
        <button
          type="submit"
          className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent  text-slate-100
            dark:text-slate-300 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex
            w-full justify-center items-center font-medium focus:outline-none dark:bg-blue-700 dark:hover:bg-blue-600 bg-black hover:bg-slate-700"
        >
          Sign up
        </button>
        <div className="flex flex-col items-center mt-5">
          <p className="mt-1 text-sm font-light text-gray-500">
            Don't Have an account?
            <a
              href="www.google.com"
              className="ml-1 font-medium text-slate-800 dark:text-blue-400"
            >
              Sign up now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LogInForm;
