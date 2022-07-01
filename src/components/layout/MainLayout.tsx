import { FC } from "react";
import Footer from "./Footer";
import MainNavigationBar from "./MainNavigationBar";
import { Outlet } from "react-router-dom";

type MainLayoutProps = {};

// TODO: add padding for body and children

const MainLayout: FC<MainLayoutProps> = (props) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      <MainNavigationBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
