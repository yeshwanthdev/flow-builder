import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeEffect from "@/components/providers/theme-provider";

import store from "./store/store";
import routes from "./routes";

// routes
const router = createBrowserRouter(routes);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeEffect />
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
