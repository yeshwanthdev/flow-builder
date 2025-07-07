import React from "react";
import { Navigate } from "react-router-dom";

const baseRoutes = {
  path: "/",
  element: <Navigate to="/workflow" replace />,
};

export default baseRoutes;
