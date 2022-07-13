import { FC, Fragment, useState } from "react";
import TeacherInfoHeaderBillboard from "../../components/home/teacher-info/TeacherInfoHeaderBillboard";
import TeacherInfoFooter from "../../components/home/teacher-info/TeacherInfoFooter";
import TeacherInfoPurpleSection from "../../components/UI/TeacherInfoPurpleSection";
import TeacherInfoReasons from "../../components/UI/TeacherInfoReasons";
import TeacherInfoSupportSection from "../../components/UI/TeacherInfoSupportSection";
import TeacherInfoHowToBeginSection from "../../components/UI/TeacherInfoHowToBeginSection";
import TeacherAuthModal from "../../components/signup-and-login/TeacherAuthModal";

type TeacherInfoPageProps = {};

const TeacherInfoPage: FC<TeacherInfoPageProps> = (props) => {
  const [authModalOpenState, setAuthModalOpenState] = useState(false);

  const authModalHandleOpen = () => setAuthModalOpenState(true);
  const authModalHandleClose = () => setAuthModalOpenState(false);

  return (
    <Fragment>
      <TeacherInfoHeaderBillboard onGetStartedClick={authModalHandleOpen} />
      <TeacherInfoReasons />
      <TeacherInfoPurpleSection />
      <TeacherInfoHowToBeginSection />
      <TeacherInfoSupportSection />
      <TeacherInfoFooter onGetStartedClick={authModalHandleOpen} />
      <TeacherAuthModal authModalHandleClose={authModalHandleClose} authModalOpenState={authModalOpenState} />
    </Fragment>
  );
};
export default TeacherInfoPage;
