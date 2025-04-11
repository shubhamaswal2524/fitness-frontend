import { authApiSlice } from "./authApiSlice";
import { setCookie, destroyCookie } from "nookies";

const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      destroyCookie(null, "token", { path: "/" });
      window.location.reload();
    },

    setUserData: (state, action) => {
      const { userData } = action.payload;
      state.user = {
        ...state.user, // Merge the existing user data
        ...action.payload, // Overwrite with new data
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        const { data } = action.payload;
        console.log("action.payload", data);
        state.token = data?.token;

        setCookie(null, "token", data?.token, {
          path: "/",
        });
      }
    );
  },
});

export const { setUserData, logout } = authSlice.actions;
export default authSlice.reducer;
