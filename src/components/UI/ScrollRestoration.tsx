import { FC, useEffect } from "react";
import { useLocation } from "react-router";

type ScrollRestorationProps = {
  children: React.ReactNode;
};

const ScrollRestoration: FC<ScrollRestorationProps> = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};
export default ScrollRestoration;
