import React from "react";
import WorkflowBuilder from "./components/workflow-builder";
import { ReactFlowProvider } from "reactflow";
import Sidebar from "./components/sidebar";

const ObjectPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">
        <div className="flex h-screen">
          <ReactFlowProvider>
            {/* workflow */}
            <WorkflowBuilder />

            {/* sidebar */}
            <Sidebar />
          </ReactFlowProvider>
        </div>
      </div>
    </main>
  );
};
export default ObjectPage;
