import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../components/layout/MainContainer";
import LogInForm from "../../components/signup-and-login/LogInForm";
import { logInCredentials } from "../../model/logInCredentials";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../store/authSlice";
import { loginStudent } from "../../network/api/student";

type LogInPageProps = {};

const LogInPage: FC<LogInPageProps> = (props) => {
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onLoginSubmitHandler = async (credentials: logInCredentials) => {
    try {
      const userData = await loginStudent(credentials);
      setIsError(false);
      dispatch(authSliceActions.setUserId(userData.studentId));
      dispatch(authSliceActions.setUser(userData));
      dispatch(authSliceActions.setSignIn());
      navigate("/");
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <MainContainer>
      <LogInForm isError={isError} onLoginSubmit={onLoginSubmitHandler} />
    </MainContainer>
  );
};
export default LogInPage;
