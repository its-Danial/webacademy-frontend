import { FC } from "react";
import { styled, Button } from "@mui/material";
type BlackButtonProps = {
  title: String;
  onClick: () => void;
};

const BlackButton: FC<BlackButtonProps> = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };
  const NavBlackButton = styled(Button)({
    color: "white",
    width: "100%",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "black",
    borderColor: "black",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe navbar"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe navbar Emoji"',
      '"Segoe navbar Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#393534",
      borderColor: "#393534",
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  return <NavBlackButton onClick={onClickHandler}>{props.title}</NavBlackButton>;
};
export default BlackButton;
