import { FC } from "react";
import MainContainer from "../../components/layout/MainContainer";
import LogInForm from "../../components/signup-and-login/LogInForm";

type LogInPageProps = {};

const LogInPage: FC<LogInPageProps> = (props) => {
  return (
    <MainContainer>
      <LogInForm />
    </MainContainer>
  );
};
export default LogInPage;
