import React, { lazy } from "react";
import Main from "@/components/layouts/main";
import { Navigate } from "react-router-dom";

const errorRoutes = {
  path: "/error",
  Component: Main,
  children: [
    {
      path: ":code", // dynamic error code
      Component: lazy(() => import("@/components/global/error")),
    },
    {
      path: "",
      element: <Navigate to="/error/404" replace />,
    },
  ],
};

export default errorRoutes;
