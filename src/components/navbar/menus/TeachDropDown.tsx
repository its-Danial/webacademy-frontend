import { FC, useState } from "react";
import { Button, Menu, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BlackButton from "../../UI/BlackButton";

type TeachDropDownProps = {};

const TeachDropDown: FC<TeachDropDownProps> = (props) => {
  const navigate = useNavigate();

  const onLearnMoreClickHandler = () => {
    navigate("/teacher-info");
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    // What happens when the drop down button is clicked
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="normal-case text-gray-900 hover:text-blue-600 dark:text-gray-300
    dark:hover:text-blue-500"
      >
        Teach on WebAcademy
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 3.5,
            p: 2.0,
            // textAlign:"center",

            // for the arrow
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0.5,
              left: 14,
              width: 15,
              height: 15,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        {/*<p>Turn what you know into an <br/> opportunity*/}
        {/*    and reach millions <br/> around the world.</p>*/}
        <Typography sx={{ fontWeight: "bold", marginBottom: 2 }} align={"center"}>
          Turn what you know into an <br /> opportunity and reach <br /> millions around the world.
        </Typography>
        <BlackButton onClick={onLearnMoreClickHandler} title={"Learn More"} />
      </Menu>
    </>
  );
};
export default TeachDropDown;
