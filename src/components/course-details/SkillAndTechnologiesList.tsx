import { FC } from "react";
import SkillIPillItem from "./list-items/SkillIPillItem";

type SkillAndTechnologiesListProps = {};

const SkillAndTechnologiesList: FC<SkillAndTechnologiesListProps> = (props) => {
  return (
    <div className="mx-auto w-2/3 p-9">
      <h2 className="text-gray-800">Skills and technologies</h2>
      <div className="my-3">
        <ul className="list-none p-0 flex flex-wrap">
          <SkillIPillItem title="CSS Grid" />
          <SkillIPillItem title="CSS Grid" />
          <SkillIPillItem title="CSS Grid" />
          <SkillIPillItem title="CSS Grid" />
          <SkillIPillItem title="CSS Grid" />
        </ul>
      </div>
    </div>
  );
};
export default SkillAndTechnologiesList;
