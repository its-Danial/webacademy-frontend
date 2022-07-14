import { FC, Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TeacherInfoHeaderBillboard from "../../components/home/teacher-info/TeacherInfoHeaderBillboard";
import TeacherInfoFooter from "../../components/home/teacher-info/TeacherInfoFooter";
import TeacherInfoPurpleSection from "../../components/UI/TeacherInfoPurpleSection";
import TeacherInfoReasons from "../../components/UI/TeacherInfoReasons";
import TeacherInfoSupportSection from "../../components/UI/TeacherInfoSupportSection";
import TeacherInfoHowToBeginSection from "../../components/UI/TeacherInfoHowToBeginSection";
import TeacherAuthModal from "../../components/signup-and-login/TeacherAuthModal";
import { accountRegisterInfo } from "../../model/accountRegisterInfo";
import { logInCredentials } from "../../model/logInCredentials";
import { teacherAuthSliceActions } from "../../store/teacherAuthSlice";
import { authSliceActions } from "../../store/authSlice";
import { registerTeacher, loginTeacher } from "../../network/api/teacher";

type TeacherInfoPageProps = {};

const TeacherInfoPage: FC<TeacherInfoPageProps> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authModalOpenState, setAuthModalOpenState] = useState(false);
  const [isError, setIsError] = useState(false);

  const authModalHandleOpen = () => setAuthModalOpenState(true);
  const authModalHandleClose = () => setAuthModalOpenState(false);

  const onSignUpSubmitHandler = async (userDetails: accountRegisterInfo) => {
    try {
      const data = await registerTeacher(userDetails);
      dispatch(authSliceActions.setLogOut());
      dispatch(teacherAuthSliceActions.setUser(data));
      dispatch(teacherAuthSliceActions.setUserId(data.teacherId));
      dispatch(teacherAuthSliceActions.setSignIn());
      setIsError(false);
      navigate("/teacher/courses");
    } catch (error) {
      setIsError(true);
    }
  };

  const onLoginSubmitHandler = async (credentials: logInCredentials) => {
    try {
      const data = await loginTeacher(credentials);
      dispatch(authSliceActions.setLogOut());
      dispatch(teacherAuthSliceActions.setUser(data));
      dispatch(teacherAuthSliceActions.setUserId(data.teacherId));
      dispatch(teacherAuthSliceActions.setSignIn());
      setIsError(false);
      navigate("/teacher/courses");
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <Fragment>
      <TeacherInfoHeaderBillboard onGetStartedClick={authModalHandleOpen} />
      <TeacherInfoReasons />
      <TeacherInfoPurpleSection />
      <TeacherInfoHowToBeginSection />
      <TeacherInfoSupportSection />
      <TeacherInfoFooter onGetStartedClick={authModalHandleOpen} />
      <TeacherAuthModal
        isError={isError}
        onLoginSubmit={onLoginSubmitHandler}
        onSignUpSubmit={onSignUpSubmitHandler}
        authModalHandleClose={authModalHandleClose}
        authModalOpenState={authModalOpenState}
      />
    </Fragment>
  );
};
export default TeacherInfoPage;
