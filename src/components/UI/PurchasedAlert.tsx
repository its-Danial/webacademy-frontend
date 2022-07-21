import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

type PurchasedAlertProps = {};

const PurchasedAlert: FC<PurchasedAlertProps> = (props) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <Alert
      onClose={onClickHandler}
      variant="filled"
      severity="success"
      className="bg-emerald-500 dark:bg-blue-500 my-5"
    >
      Purchase successful — begin your journey now!
    </Alert>
  );
};
export default PurchasedAlert;
