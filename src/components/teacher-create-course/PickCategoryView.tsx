import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../../helper/categoriesList";

type PickCategoryViewProps = {
  category: number | null;
  onCategorySelect: (category: number) => void;
};

const PickCategoryView: FC<PickCategoryViewProps> = (props) => {
  const onCategorySelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onCategorySelect(Number(event.target.value));
  };

  return (
    <div className="mt-[66px] text-center">
      <h1 className="font-serif text-3xl font-semibold mb-8 text-gray-800">
        What category best fits the knowledge you'll share?
      </h1>
      <p className="text-base text-gray-500">If you're not sure about the right category, you can change it later.</p>

      <select
        onChange={onCategorySelectHandler}
        className="h-12 w-[550px] mt-16 p-3  border border-gray-500 text-gray-500 focus:outline-none hover:bg-gray-100 text-base "
      >
        <option defaultChecked>Choose a category</option>
        {categories.map((category, index) => (
          <option key={uuidv4()} value={index + 1}>
            {Object.keys(category)[0]}
          </option>
        ))}
      </select>
    </div>
  );
};
export default PickCategoryView;
