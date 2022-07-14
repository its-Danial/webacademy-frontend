import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  user: {},
  isLoggedIn: false,
};

export const teacherAuthSlice = createSlice({
  name: "teacherAuthSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserId: (state, action) => {
      state.id = action.payload;
    },
    setLogOut: (state) => {
      state.isLoggedIn = false;
      state.id = "";
      state.user = {};
    },
    setSignIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const teacherAuthSliceActions = teacherAuthSlice.actions;

export default teacherAuthSlice.reducer;
