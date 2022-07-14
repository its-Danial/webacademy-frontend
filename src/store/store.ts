import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import teacherAuthReducer from "./teacherAuthSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    teacherAuth: teacherAuthReducer,
  },
});

export default store;
