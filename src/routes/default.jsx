import React, { lazy } from "react";
import Main from "@/components/layouts/main";
import { Navigate } from "react-router-dom";

const defaultRoutes = {
  path: "*",
  element: <Main />,
  children: [
    {
      path: "*",
      element: <Navigate to="/error/404" replace />,
    },
  ],
};

export default defaultRoutes;
