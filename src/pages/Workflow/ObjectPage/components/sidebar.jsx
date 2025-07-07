import * as RM from "@root/rm";
import React from "react";
import NodeConfigPanel from "./node-config-panel";
import NodeLibrary from "./node-library";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const selectedNode = useSelector(
    (state) => state.workflow.editor.selectedNode
  );

  return (
    <div className="w-80 border-r border-gray-200 p-4 bg-gray-50">
      {selectedNode ? <NodeConfigPanel /> : <NodeLibrary />}
    </div>
  );
};

export default Sidebar;
