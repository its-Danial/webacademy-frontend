import { FC } from "react";
import { Dropdown } from "flowbite-react";

type CategoriesDropDownProps = {
  label: String;
};

const CategoriesDropDown: FC<CategoriesDropDownProps> = (props) => {
  return (
    <div className="ml-6">
      <Dropdown label={props.label} inline={true} arrowIcon={false}>
        <Dropdown.Item>Category two</Dropdown.Item>
        <Dropdown.Item>Category three</Dropdown.Item>
        <Dropdown.Item>Category four</Dropdown.Item>
      </Dropdown>
    </div>
  );
};
export default CategoriesDropDown;
