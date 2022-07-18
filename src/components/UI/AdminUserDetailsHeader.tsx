import { Avatar, Button } from "@mui/material";
import { FC } from "react";

type AdminUserDetailsHeaderProps = {
  userId: number | undefined;
  fullName: string | undefined;
  email: string | undefined;
  username: string | undefined;
  avatarPictureUrl: string | undefined;
};

const AdminUserDetailsHeader: FC<AdminUserDetailsHeaderProps> = (props) => {
  return (
    <div className="flex flex-row justify-between mt-12 items-center">
      <div className="flex flex-row">
        <Avatar
          src={props.avatarPictureUrl === "none" ? "" : props.avatarPictureUrl}
          className="bg-black"
          alt="Name"
          sx={{ width: 106, height: 106 }}
        />
        <div className="ml-6 pl-6 border-solid flex flex-row border-0 border-l-2 border-gray-300">
          <div>
            <p className="text-lg text-gray-500">Full name:</p>
            <p className="mt-2 text-lg text-gray-500">Username:</p>
            <p className="mt-2 text-lg text-gray-500">Email:</p>
          </div>
          <div className="ml-6">
            <p className="text-lg text-black font-semibold">{props.fullName}</p>
            <p className="mt-2 text-lg text-gray-500">{props.username}</p>
            <p className="mt-2 text-lg text-gray-600 font-semibold">{props.email}</p>
          </div>
        </div>
      </div>
      <Button className="px-5 py-3 bg-red-700 rounded-none hover:bg-red-500" disableElevation variant="contained">
        Delete user
      </Button>
    </div>
  );
};
export default AdminUserDetailsHeader;
