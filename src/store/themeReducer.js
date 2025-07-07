import * as RM from "@root/rm";
import { createSlice } from "@reduxjs/toolkit";

const storageKey = RM.commonConfig.themeStorageKey;
const getInitialTheme = () => localStorage.getItem(storageKey) || "system";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: getInitialTheme(),
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem(storageKey, action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
const themeReducer = themeSlice.reducer;
export default themeReducer;
