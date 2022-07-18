import { Dashboard, CastForEducation, People, School } from "@mui/icons-material";

import { NavLink } from "react-router-dom";

export const mainListItems = (
  <div className="flex flex-col">
    <NavLink
      to="/admin/dashboard"
      className={({ isActive }) => (isActive ? "text-black no-underline" : "text-gray-400 no-underline")}
    >
      <div className="flex flex-row items-center mt-5">
        <Dashboard className="ml-5 w-7 h-7" />
        <p className="ml-6 text-lg font-semibold">Dashboard</p>
      </div>
    </NavLink>
    <NavLink
      to="/admin/student"
      className={({ isActive }) => (isActive ? "text-black no-underline" : "text-gray-400 no-underline")}
    >
      <div className="flex flex-row items-center mt-7">
        <School className="ml-5 w-7 h-7" />
        <p className="ml-6 text-lg font-semibold">Students</p>
      </div>
    </NavLink>
    <NavLink
      to="/admin/teacher"
      className={({ isActive }) => (isActive ? "text-black no-underline" : "text-gray-400 no-underline")}
    >
      <div className="flex flex-row items-center mt-7">
        <People className="ml-5 w-7 h-7" />
        <p className="ml-6 text-lg font-semibold">Teachers</p>
      </div>
    </NavLink>
    <NavLink
      to="/admin/courses"
      className={({ isActive }) => (isActive ? "text-black no-underline" : "text-gray-400 no-underline")}
    >
      <div className="flex flex-row items-center mt-7">
        <CastForEducation className="ml-5 w-7 h-7" />
        <p className="ml-6 text-lg font-semibold">Courses</p>
      </div>
    </NavLink>
  </div>
);
