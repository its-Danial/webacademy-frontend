import { FC, Fragment } from "react";
import TeacherInfoHeaderBillboard from "../../components/home/teacher-info/TeacherInfoHeaderBillboard";
import TeacherInfoFooter from "../../components/home/teacher-info/TeacherInfoFooter";
import TeacherInfoPurpleSection from "../../components/UI/TeacherInfoPurpleSection";
import TeacherInfoReasons from "../../components/UI/TeacherInfoReasons";
import TeacherInfoSupportSection from "../../components/UI/TeacherInfoSupportSection";
import TeacherInfoHowToBeginSection from "../../components/UI/TeacherInfoHowToBeginSection";

type TeacherInfoPageProps = {};

const TeacherInfoPage: FC<TeacherInfoPageProps> = (props) => {
  return (
    <Fragment>
      <TeacherInfoHeaderBillboard />
      <TeacherInfoReasons />
      <TeacherInfoPurpleSection />
      <TeacherInfoHowToBeginSection />
      <TeacherInfoSupportSection />
      <TeacherInfoFooter />
    </Fragment>
  );
};
export default TeacherInfoPage;
