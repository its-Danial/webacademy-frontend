import { FC } from "react";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";
import logo from "../../assets/companyLogo.png";
import SearchBar from "../navbar/SearchBar";

import CategoriesDropDown from "../navbar/menus/CategoriesDropDown";
import TeachDropDown from "../navbar/menus/TeachDropDown";

import NavAccountStateButtons from "../navbar/NavAccountStateButtons";

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
          {/* Query By Category */}
          <CategoriesDropDown />
        </Stack>
        <SearchBar />
        {/* Right side */}
        <Stack
          direction="row"
          spacing={2}
          className="items-center text-white hidden sm:flex"
        >
          {/* Teach on WebAcademy */}
          <TeachDropDown />
          {/* Conditionally Rendered buttons based on account Login State */}
          <NavAccountStateButtons />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default MainNavigationBar;
