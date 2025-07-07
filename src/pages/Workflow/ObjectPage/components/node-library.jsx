import React from "react";
import { Button } from "@/components/ui/button";
import { nodeTypes } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

const NodeLibrary = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Node Library</h2>
      <div className="flex flex-col gap-2 ">
        {nodeTypes.map((node) => (
          <Button
            key={node.type}
            variant="outline"
            className={`justify-start text-left p-5 ${
              node.disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            draggable={!node.disabled}
            onDragStart={(e) => onDragStart(e, node.type)}
            disabled={node.disabled}
          >
            {/* change later for dynamic icon */}
            {/* {node.icon && <node.icon />} */}
            <MessageCircle className="h-4 w-4 mr-2" />

            <div className="flex flex-col items-start">
              <span>{node.label}</span>
              <span className="text-xs text-gray-500">{node.description}</span>
            </div>
          </Button>
        ))}
        <div className="mt-4 text-xs text-gray-500">
          Drag and drop nodes onto the canvas to build your workflow
        </div>
      </div>
    </div>
  );
};

export default NodeLibrary;
