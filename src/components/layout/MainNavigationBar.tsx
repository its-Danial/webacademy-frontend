import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  IconButton,
  Badge,
  Avatar,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { FC } from "react";
import logo from "../assets/companyLogo.png";
import SearchBar from "../UI/navbar/SearchBar";
import DropDownList from "../UI/navbar/NavDropDownButton";

type MainNavigationBarProps = {};

const MainNavigationBar: FC<MainNavigationBarProps> = (props) => {
  return (
    <AppBar className="bg-white dark:bg-gray-800" position="sticky">
      <Toolbar className="flex justify-between text-slate-900">
        {/* Logo  */}

        <Stack direction="row" spacing={2} className="items-center">
          <img className="w-10" src={logo} alt="company logo" />
          <Typography
            variant="h6"
            className="dark:text-slate-50 hidden sm:block"
          >
            WebAcademy
          </Typography>
          <DropDownList title="Categories" />
        </Stack>

        <SearchBar />
        <Stack direction="row" spacing={2} className="items-center text-white">
          {/* Teach on WebAcademy */}
          <DropDownList title="Teach on WebAcademy" />
          {/* My courses */}
          <DropDownList title="My Courses" />
          {/* Shopping Cart */}
          <IconButton aria-label="Shopping Cart">
            <Badge
              badgeContent={4}
              componentsProps={{
                badge: { className: "bg-black text-white dark:bg-blue-600" },
              }}
            >
              <ShoppingCart className="dark:text-gray-300 hover:text-gray-400" />
            </Badge>
          </IconButton>
          <Avatar
            className="bg-black hover:bg-slate-600 dark:bg-blue-900 dark:hover:bg-blue-800"
            sx={{ width: 35, height: 35 }}
          >
            D
          </Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default MainNavigationBar;
