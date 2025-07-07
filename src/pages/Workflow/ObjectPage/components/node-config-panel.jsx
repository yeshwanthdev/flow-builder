import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { useReactFlow } from "reactflow";
import { selectElement } from "@/store/workflowReducer";

const NodeConfigPanel = () => {
  const { getNodes, setNodes } = useReactFlow();

  const selectedNode = useSelector(
    (state) => state.workflow.editor.selectedNode
  );
  const dispatch = useDispatch();

  // handle Change
  const handleChange = (key, value) => {
    const updatedNode = {
      ...selectedNode,
      data: {
        ...selectedNode.data,
        [key]: value,
      },
    };

    dispatch(selectElement({ ...updatedNode }));
    setNodes((nodes) =>
      nodes.map((node) => (node.id === selectedNode.id ? updatedNode : node))
    );
  };

  // handle close
  const handleClose = () => {
    dispatch(selectElement(null));
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Configure</h2>
        <Button variant="outline" size="icon" onClick={handleClose}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4 flex-1 overflow-y-auto">
        <div className="space-y-2">
          <Label htmlFor="label">Node Label</Label>
          <Input
            id="label"
            value={selectedNode?.data?.label || ""}
            onChange={(e) => handleChange("label", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            value={selectedNode?.data?.message || ""}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Write a message"
          />
        </div>
      </div>
    </div>
  );
};

export default NodeConfigPanel;
