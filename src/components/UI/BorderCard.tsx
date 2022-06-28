import { FC } from "react";

type BorderCardProps = {
  children?: React.ReactNode;
};

const BorderCard: FC<BorderCardProps> = (props) => {
  return (
    <div className="p-8 mb-12 border-solid border-1 border-gray-300">
      {props.children}
    </div>
  );
};
export default BorderCard;
