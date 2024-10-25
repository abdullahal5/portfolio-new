import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, user } = action.payload;
      state.user = {
        userId: "staticUserId",
        username: "Static Name",
        email: user?.email,
        profileImage: "https://example.com/static-profile-image.jpg",
        role: "Admin",
      };
      state.token = token;
      Cookies.set("role", "Admin", { expires: 1 });
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("role");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;
