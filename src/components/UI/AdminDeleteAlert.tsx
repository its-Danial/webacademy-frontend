import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

type AdminDeleteAlertProps = {};

const AdminDeleteAlert: FC<AdminDeleteAlertProps> = (props) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/admin/student", { replace: true });
  };

  return (
    <Alert onClose={onClickHandler} severity="info">
      User deleted successful
    </Alert>
  );
};
export default AdminDeleteAlert;
