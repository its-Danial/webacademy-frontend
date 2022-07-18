import { FC, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Avatar,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { OndemandVideoOutlined } from "@mui/icons-material";
import BarChartIcon from "@mui/icons-material/BarChart";
import logo from "../../assets/companyLogo.png";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { teacherAuthSliceActions } from "../../store/teacherAuthSlice";

type TeacherLayoutProps = {
  window?: () => Window;
};

const TeacherLayout: FC<TeacherLayoutProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const teacherAuthInfo = useSelector((state: any) => state.teacherAuth);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onLogOutClickHandler = () => {
    dispatch(teacherAuthSliceActions.setLogOut());
    navigate("/");
  };

  const trigger = useScrollTrigger({
    target: props.window ? props.window() : undefined,
  });
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Slide appear={false} direction="down" in={!trigger}>
          <AppBar open={open} className="bg-white shadow-none">
            <Toolbar className="justify-end">
              <button onClick={onLogOutClickHandler} className="bg-transparent p-3 hover:bg-slate-200 border-none mr-8">
                Logout
              </button>
              <Avatar className="bg-black text-white w-11 h-11 text-base font-light mr-1">
                {teacherAuthInfo.user.fullName?.substring(0, 2).toUpperCase()}
              </Avatar>
            </Toolbar>
          </AppBar>
        </Slide>
        <Drawer onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose} variant="permanent" open={open}>
          <DrawerHeader>
            <img className="w-12 rounded-full mr-3" src={logo} alt="company logo" />
            <h1 className="text-lg font-extrabold text-white" style={{ opacity: open ? 1 : 0 }}>
              WebAcademy
            </h1>
          </DrawerHeader>

          <List>
            {[
              { text: "Courses", route: "/teacher/courses" },
              { text: "Performance", route: "/teacher/performance" },
            ].map((route, index) => (
              <ListItem key={route.text} disablePadding>
                <NavLink
                  to={route.route}
                  className={({ isActive }) =>
                    isActive
                      ? "border-l-[5px] border-0 border-solid border-[#a435f0] no-underline py-2"
                      : "border-l-[5px] border-0 border-solid border-black no-underline py-2"
                  }
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 ? (
                        <OndemandVideoOutlined className="text-white" />
                      ) : (
                        <BarChartIcon className="text-white" />
                      )}
                    </ListItemIcon>
                    <span className="font-bold text-white">{route.text}</span>
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingX: "56px" }}>
          <div className="mb-12">
            <DrawerHeader />
            {/* TODO: page content goes here */}
            <Outlet />
          </div>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

// Note: Styles

const drawerWidth = 230;

const openedMixin = (theme: Theme): CSSObject => ({
  // height: "auto",
  backgroundColor: "#1c1d1f",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  // height: "auto",
  backgroundColor: "#1c1d1f",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 6px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default TeacherLayout;
