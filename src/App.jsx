import React from "react";
import store from "./store/store";
import routes from "./routes";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeEffect from "@/components/providers/theme-provider";
import { Toaster } from "sonner";

// routes
const router = createBrowserRouter(routes);

const App = () => {
  
  return (
    <Provider store={store}>
      <ThemeEffect />
      <Toaster />
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
