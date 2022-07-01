import { FC } from "react";
import Footer from "./Footer";
import MainNavigationBar from "./MainNavigationBar";
import { Outlet } from "react-router-dom";
import CustomerFooter from "../UI/CustomerFooter";
import Testimonials from "../UI/Testimonials";

type MainLayoutProps = {};

// TODO: add padding for body and children

const MainLayout: FC<MainLayoutProps> = (props) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      <MainNavigationBar />
      <main className="mx-auto flex-grow" style={{ width: "90%" }}>
        <Outlet />
      </main>
      <Testimonials />
      <CustomerFooter />
      <Footer />
    </div>
  );
};
export default MainLayout;
