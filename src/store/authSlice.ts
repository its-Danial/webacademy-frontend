import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  user: {},
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "authSlice",
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
    },
    setSignIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const authSliceActions = authSlice.actions;

export default authSlice.reducer;
