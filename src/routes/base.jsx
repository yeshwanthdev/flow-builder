import React from "react";
import { redirect } from "react-router-dom";

const baseRoutes = {
  path: "/",
  loader: () => redirect("/workflow"),
};

export default baseRoutes;
