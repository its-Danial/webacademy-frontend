import { FC } from "react";
import MainContainer from "../../components/layout/MainContainer";
import SignUpForm from "../../components/signup-and-login/SignUpForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerStudent } from "../../network/api/student";
import { authSliceActions } from "../../store/authSlice";
import { studentRegisterInfo } from "../../model/studentRegisterInfo";

type SignUpPageProps = {};

const SignUpPage: FC<SignUpPageProps> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignUpSubmitHandler = async (userDetails: studentRegisterInfo) => {
    const data = await registerStudent(userDetails);

    console.log(data);

    dispatch(authSliceActions.setUser(data));
    dispatch(authSliceActions.setUserId(data.studentId));
    dispatch(authSliceActions.setSignIn());

    navigate("/");
  };

  return (
    <MainContainer>
      <SignUpForm onSignUpSubmit={onSignUpSubmitHandler} />
    </MainContainer>
  );
};
export default SignUpPage;
