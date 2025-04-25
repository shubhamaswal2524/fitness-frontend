const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    sidebarTab: "Dashboard",
    profile: null,
  },
  reducers: {
    setSidebarTabs: (state, action) => {
      state.sidebarTab = action.payload;
    },
    setUserProfile: (state, action) => {
      state.profile = action.payload; // ✅ Add profile setter
    },
  },
});

export const { setSidebarTabs, setUserProfile } = userSlice.actions;
export default userSlice.reducer;
