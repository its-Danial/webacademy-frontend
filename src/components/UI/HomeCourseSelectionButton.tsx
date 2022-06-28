import { FC } from "react";

type HomeCourseSelectionButtonProps = {
  topicText: String;
  index: number;
  onClick: (courseIndex: number) => void;
};

const HomeCourseSelectionButton: FC<HomeCourseSelectionButtonProps> = (
  props
) => {
  const onClickHandler = () => {
    props.onClick(props.index);
  };

  return (
    <button
      value={props.index}
      onClick={onClickHandler}
      className="py-2.5 px-0 text-base font-bold bg-transparent text-gray-500 hover:text-black
      focus:text-black focus:underline
      border-0 focus:outline-none dark:text-gray-300 dark:hover:text-white dark:focus:text-white
      dark:focus:underline"
    >
      {props.topicText}
    </button>
  );
};
export default HomeCourseSelectionButton;
