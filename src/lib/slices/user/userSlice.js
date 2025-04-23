const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    sidebarTab: "Dashboard",
  },
  reducers: {
    setSidebarTabs: (state, action) => {
      state.sidebarTab = action.payload;
    },
  },
});

export const { setSidebarTabs } = userSlice.actions;
export default userSlice.reducer;
