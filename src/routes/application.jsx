import React from "react";
import Main from "@/components/layouts/main";
import Workflow from "@/pages/Workflow/ObjectPage";

const applicationRoutes = {
  path: "/workflow",
  Component: Main,
  children: [
    {
      path: "",
      Component: Workflow,
    },
  ],
};

export default applicationRoutes;
