import { Avatar } from "@mui/material";
import { FC } from "react";

type AdminUserCardProps = {
  userId: number;
  fullName: string;
  email: string;
  username: string;
  avatarPictureUrl: string;
  onUserClick: (userId: number) => void;
};

const AdminUserCard: FC<AdminUserCardProps> = (props) => {
  const onUserCardClickHandler = () => {
    props.onUserClick(props.userId);
  };

  return (
    <div
      onClick={onUserCardClickHandler}
      className="cursor-pointer hover:bg-gray-200 group flex flex-col justify-center shadow-3xl items-center h-60 w-72 mb-5 mr-9"
    >
      <Avatar
        className="bg-black"
        alt="Name"
        src={props.avatarPictureUrl === "none" ? "" : props.avatarPictureUrl}
        sx={{ width: 76, height: 76 }}
      >
        {props.fullName.slice(0, 2).toUpperCase()}
      </Avatar>
      <h3 className="mb-2 mt-5">{props.username}</h3>
      <p className="mb-2 text-gray-500">{props.fullName}</p>
      <p className="text-gray-800 font-medium">{props.email}</p>
    </div>
  );
};
export default AdminUserCard;
