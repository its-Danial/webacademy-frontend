import { FC } from "react";
import SkillIPillItem from "./list-items/SkillIPillItem";
import { categoryType } from "../../model/course";

type SkillAndTechnologiesListProps = {
  technologies: categoryType[] | undefined;
};

const SkillAndTechnologiesList: FC<SkillAndTechnologiesListProps> = (props) => {
  let skillsAndTechnologies: string[] = [];

  props.technologies?.forEach((item) => {
    skillsAndTechnologies.push(...item.topics);
    skillsAndTechnologies.push(item.categoryName);
  });

  console.log(skillsAndTechnologies);

  return (
    <div className="mx-auto w-2/3 p-9">
      <h2 className="text-gray-800">Skills and technologies</h2>
      <div className="my-3">
        <ul className="list-none p-0 flex flex-wrap">
          {skillsAndTechnologies.map((title, index) => (
            <SkillIPillItem key={index} title={title} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SkillAndTechnologiesList;
