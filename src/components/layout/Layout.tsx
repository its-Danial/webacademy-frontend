import { FC } from "react";
import Footer from "./Footer";
import MainNavigationBar from "./MainNavigationBar";

type LayoutProps = {
  children?: React.ReactNode;
};

// TODO: add padding for body and children

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <MainNavigationBar />
      <main className="mt-12 mx-auto" style={{ width: "90%" }}>
        {props.children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;

// .main {
//     margin: 3rem auto;
//     width: 90%;
//     max-width: 40rem;
//   }
