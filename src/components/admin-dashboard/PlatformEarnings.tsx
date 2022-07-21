import { FC, Fragment } from "react";
import Title from "./Title";

type PlatformEarningsProps = {
  totalEarnings: number | undefined;
};

const PlatformEarnings: FC<PlatformEarningsProps> = (props) => {
  let today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  return (
    <Fragment>
      <Title>Recent Deposits</Title>
      <h4 className="text-5xl font-medium mt-6">${props.totalEarnings}.00</h4>
      <p className="flex justify-start mt-3">on {mm + "/" + dd + "/" + yyyy}</p>
    </Fragment>
  );
};
export default PlatformEarnings;
