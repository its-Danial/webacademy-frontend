import { FC } from "react";
import { Avatar } from "@mui/material";

type UserAvatarProps = {
  username: String;
};

const UserAvatar: FC<UserAvatarProps> = (props) => {
  const usernameFirstLetter = props.username.charAt(0);

  return (
    <Avatar
      className="bg-black hover:bg-slate-600 dark:bg-blue-900 dark:hover:bg-blue-800"
      sx={{ width: 35, height: 35 }}
    >
      {usernameFirstLetter}
    </Avatar>
  );
};
export default UserAvatar;
