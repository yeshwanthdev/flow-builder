import React, { lazy } from "react";
import Main from "@/components/layouts/main";

// add application routes here
const applicationRoutes = {
  path: "",
  Component: Main,
  children: [
    {
      path: "/workflow",
      Component: lazy(() => import("@/pages/Workflow/ObjectPage")), //workflow listpage, for now mapping it to to object page itself
    },
    {
      path: "/workflow/:id",
      Component: lazy(() => import("@/pages/Workflow/ObjectPage")), //workflow objectpage
    },
  ],
};

export default applicationRoutes;
