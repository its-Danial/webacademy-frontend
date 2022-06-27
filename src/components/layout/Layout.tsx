import { FC } from "react";
import Footer from "./Footer";
import MainNavigationBar from "./MainNavigationBar";

type LayoutProps = {
  children?: React.ReactNode;
};

// TODO: add padding for body and children

const Layout: FC<LayoutProps> = (props) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      <MainNavigationBar />
      <main className="mx-auto flex-grow" style={{ width: "90%" }}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;

// .main {
//     margin: 3rem auto;
//     width: 90%;
//     max-width: 40rem;
//   }
