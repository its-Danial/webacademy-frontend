import { FC } from "react";

type SkillItemPillProps = {
  title: string;
};

const SkillItemPill: FC<SkillItemPillProps> = (props) => {
  return (
    <li
      className="px-3 py-1 mr-2 mt-2 text-base font-semibold rounded-full border border-solid
 border-gray-400 text-gray-700"
    >
      {props.title}
    </li>
  );
};
export default SkillItemPill;
