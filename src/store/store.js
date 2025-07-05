import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import workflowReducer from "./workflowReducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    workflow: workflowReducer,
  },
});

export default store;
