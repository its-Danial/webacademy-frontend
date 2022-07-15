import { FC } from "react";

type WorkingTitleProps = {
  workingTitle: string;
  onWorkingTitleEnter: (workingTitle: string) => void;
};

const WorkingTitle: FC<WorkingTitleProps> = (props) => {
  const onWorkingTitleEnter = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onWorkingTitleEnter(event.target.value);
  };

  return (
    <div className="mt-[66px] text-center">
      <h1 className="font-serif text-3xl font-semibold mb-8 text-gray-800">How about a working title?</h1>
      <p className="text-base text-gray-500">
        It's ok if you can't think of a good title now. You can change it later.
      </p>
      <input
        type="text"
        value={props.workingTitle}
        onChange={onWorkingTitleEnter}
        placeholder="e.g Learn NextJS as a total beginner 2022"
        className="h-6 w-[550px] mt-16 p-3 text-bae text-gray-500"
      />
    </div>
  );
};
export default WorkingTitle;
