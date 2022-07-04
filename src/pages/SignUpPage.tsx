import { FC } from "react";
import MainContainer from "../components/layout/MainContainer";
import SignUpForm from "../components/signup-and-login/SignUpForm";

type SignUpPageProps = {};

const SignUpPage: FC<SignUpPageProps> = (props) => {
  return (
    <MainContainer>
      <SignUpForm />
    </MainContainer>
  );
};
export default SignUpPage;
