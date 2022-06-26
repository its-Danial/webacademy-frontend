import { FC } from "react";
import MainNavigationBar from "./MainNavigationBar";

type LayoutProps = {};

// TODO: add padding for body and children

const Layout: FC<LayoutProps> = (props) => {
  return <MainNavigationBar />;
};
export default Layout;
