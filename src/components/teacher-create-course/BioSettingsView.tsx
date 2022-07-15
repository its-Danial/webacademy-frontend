import { FC } from "react";
import { Button } from "@mui/material";

type BioSettingsViewProps = {
  onBioTextEnter: (bioText: string) => void;
  onAvatarUrlEnter: (avatarUrl: string) => void;
  bioText: string;
  avatarUrl: string;
};

const BioSettingsView: FC<BioSettingsViewProps> = (props) => {
  const onBioTextEnter = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onBioTextEnter(event.target.value);
  };

  const onAvatarUrlEnter = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onAvatarUrlEnter(event.target.value);
  };

  return (
    <div className="mt-[66px] text-center">
      <h1 className="font-serif text-3xl font-semibold mb-12 text-gray-800">
        First, let's set up your account details
      </h1>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col mr-24">
          <label htmlFor="bioText" className="font-bold text-sm mb-2">
            Biography:
          </label>
          <textarea
            onChange={onBioTextEnter}
            value={props.bioText}
            placeholder="Your account biography"
            rows={10}
            className="h-[150px] w-[300px] p-4 bg-gray-50 border-2 border-solid border-gray-400"
          />
        </div>
        {/* img */}
        <div className="flex flex-col">
          <label className="font-bold text-sm mb-2" htmlFor="avatarImg">
            Account Avatar:
          </label>
          <div className="border-2 border-solid border-gray-400 p-4">
            <div className="flex justify-center bg-gray-50 h-[150px] w-[300px]">
              <img id="avatarImg" src="https://img-b.udemycdn.com/user/200_H/anonymous_3.png" alt="" />
            </div>
          </div>

          <div className="flex mt-3 h-9 flex-row">
            <input
              type="text"
              onChange={onAvatarUrlEnter}
              value={props.avatarUrl}
              className="basis-[85%] outline-none border border-gray-400 p-3 bg-gray-50"
              placeholder="Image url"
            />
            <Button
              variant="outlined"
              className="basis-[15%] rounded-none border-gray-400 text-gray-500 normal-case border-l-0"
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BioSettingsView;
