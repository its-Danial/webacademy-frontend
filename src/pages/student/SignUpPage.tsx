import { FC, useState } from "react";
import MainContainer from "../../components/layout/MainContainer";
import SignUpForm from "../../components/signup-and-login/SignUpForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerStudent } from "../../network/api/student";
import { authSliceActions } from "../../store/authSlice";
import { accountRegisterInfo } from "../../model/accountRegisterInfo";

type SignUpPageProps = {};

const SignUpPage: FC<SignUpPageProps> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);

  const onSignUpSubmitHandler = async (userDetails: accountRegisterInfo) => {
    try {
      const data = await registerStudent(userDetails);
      navigate("/");
      dispatch(authSliceActions.setUser(data));
      dispatch(authSliceActions.setUserId(data.studentId));
      dispatch(authSliceActions.setSignIn());
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <MainContainer>
      <SignUpForm isError={isError} onSignUpSubmit={onSignUpSubmitHandler} />
    </MainContainer>
  );
};
export default SignUpPage;
