import { FC, useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Avatar,
  Button,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import {
  Chat,
  OndemandVideoOutlined,
  CastForEducation,
  AutoGraph,
  HelpCenter,
} from "@mui/icons-material";
import BarChartIcon from "@mui/icons-material/BarChart";
import logo from "../../assets/companyLogo.png";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

type TeacherLayoutProps = {
  window?: () => Window;
};

const TeacherLayout: FC<TeacherLayoutProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
              <button className="bg-transparent p-3 hover:bg-slate-200 border-none mr-8">
                Logout
              </button>
              <Avatar className="bg-black text-white w-11 h-11 text-base font-light mr-1">
                OP
              </Avatar>
            </Toolbar>
          </AppBar>
        </Slide>
        <Drawer
          onMouseEnter={handleDrawerOpen}
          onMouseLeave={handleDrawerClose}
          variant="permanent"
          open={open}
        >
          <DrawerHeader>
            <img
              className="w-12 rounded-full mr-3"
              src={logo}
              alt="company logo"
            />
            <h1
              className="text-lg font-extrabold text-white"
              style={{ opacity: open ? 1 : 0 }}
            >
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
          <DrawerHeader />
          <div className="mb-12">
            {/* Note: top */}
            <div className="flex justify-between items-center border-1 border-solid shadow-3xl border-gray-200 p-12 my-12">
              <p className="text-gray-500">Jump Into Course Creation</p>
              <Button
                className="rounded-none bg-[#a435f0] normal-case py-3 px-16 text-base"
                variant="contained"
                disableElevation
              >
                Create Your Course
              </Button>
            </div>
            {/* Note: Middle */}
            <div>
              <div className="flex justify-center">
                <p className="text-gray-500">
                  Based on your experience, we think these resources will be
                  helpful.
                </p>
              </div>

              <div className="flex border-1 border-solid border-gray-200 shadow-3xl p-3 mt-12 mb-6">
                <div className="basis-[45%] flex justify-center">
                  <img
                    className="w-56"
                    src="https://s.udemycdn.com/instructor/dashboard/engaging-course-2x.jpg"
                    alt=""
                  />
                </div>
                <div className="basis-[55%] flex flex-col justify-between items-start">
                  <h4 className="text-2xl font-light text-gray-800 mt-6">
                    Create an Engaging Course
                  </h4>
                  <p className="w-4/5 text-base font-light">
                    Whether you've been teaching for years or are teaching for
                    the first time, you can make an engaging course. We've
                    compiled resources and best practices to help you get to the
                    next level, no matter where you're starting.
                  </p>
                  <button className="cursor-pointer bg-transparent text-purple-700 border-none p-2 pl-0 text-base underline underline-offset-4">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            {/* Note: Two Box middle */}

            <div className="flex flex-row justify-between mb-16">
              <div className="basis-[49%] flex border-1 border-solid border-gray-200 shadow-3xl">
                <img
                  className="w-52 m-3 ml-12"
                  src="https://s.udemycdn.com/instructor/dashboard/video-creation-2x.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-between items-start m-5">
                  <h4 className="font-normal text-lg mt-5">
                    Get Started with Video
                  </h4>
                  <p className="w-[90%] text-base font-light">
                    Quality video lectures can set your course apart. Use our
                    resources to learn the basics.
                  </p>
                  <button className="cursor-pointer bg-transparent text-purple-700 border-none p-2 pl-0 text-base underline underline-offset-4">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="basis-[49%] flex border-1 border-solid border-gray-200 shadow-3xl">
                <img
                  className="w-52 m-3  ml-12"
                  src="https://s.udemycdn.com/instructor/dashboard/build-audience-2x.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-between items-start m-5">
                  <h4 className="font-normal text-lg mt-5">
                    Build Your Audience
                  </h4>
                  <p className="w-[90%] text-base font-light">
                    Set your course up for success by building your audience.
                  </p>
                  <button className="cursor-pointer bg-transparent text-purple-700 border-none p-2 pl-0 text-base underline underline-offset-4">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            {/* Note: Bottom Icon part */}
            <div>
              <div className="flex justify-center">
                <p className="text-gray-500">
                  Have questions? Here are our most popular instructor
                  resources.
                </p>
              </div>
              <div className="flex flex-row justify-evenly mt-16">
                <div className="flex flex-col w-52 items-center">
                  <OndemandVideoOutlined className="w-12 h-12" />
                  <h6 className="w-full text-center text-base underline underline-offset-4 text-[#5624d0] mt-4">
                    Test Video
                  </h6>
                  <p className="w-full text-center my-4 text-sm font-normal text-gray-600">
                    Send us a sample video and get expert feedback.
                  </p>
                </div>
                <div className="flex flex-col w-52 items-center">
                  <Chat className="w-12 h-12" />
                  <h6 className="w-full text-center text-base underline underline-offset-4 text-[#5624d0] mt-4">
                    Instructor Community
                  </h6>
                  <p className="w-full text-center my-4 text-sm font-normal text-gray-600">
                    Connect with experienced instructors. Ask questions, browse
                    discussions, and more.
                  </p>
                </div>
                <div className="flex flex-col w-52 items-center">
                  <CastForEducation className="w-12 h-12" />
                  <h6 className="w-full text-center text-base underline underline-offset-4 text-[#5624d0] mt-4">
                    Teaching Center
                  </h6>
                  <p className="w-full text-center my-4 text-sm font-normal text-gray-600">
                    Learn about best practices for teaching on WebAcademy.
                  </p>
                </div>
                <div className="flex flex-col w-52 items-center">
                  <AutoGraph className="w-12 h-12" />
                  <h6 className="w-full text-center text-base underline underline-offset-4 text-[#5624d0] mt-4">
                    Marketplace Insights
                  </h6>
                  <p className="w-full text-center my-4 text-sm font-normal text-gray-600">
                    Validate your course topic by exploring our marketplace
                    supply and demand.
                  </p>
                </div>
                <div className="flex flex-col w-52 items-center">
                  <HelpCenter className="w-12 h-12" />
                  <h6 className="w-full text-center text-base underline underline-offset-4 text-[#5624d0] mt-4">
                    Help and Support
                  </h6>
                  <p className="w-full text-center my-4 text-sm font-normal text-gray-600">
                    Browse our Help Center or contact our support team.
                  </p>
                </div>
              </div>
            </div>
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
  height: "auto",
  backgroundColor: "#1c1d1f",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  height: "auto",
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
