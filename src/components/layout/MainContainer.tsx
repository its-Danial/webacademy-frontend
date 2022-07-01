import { FC } from "react";

type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer: FC<MainContainerProps> = (props) => {
  return (
    <div className="mx-auto flex-grow" style={{ width: "90%" }}>
      {props.children}
    </div>
  );
};
export default MainContainer;
