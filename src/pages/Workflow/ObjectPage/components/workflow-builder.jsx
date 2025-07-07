import * as RM from "@root/rm";
import React, { useState, useCallback, useRef } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  Panel,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { Button } from "@/components/ui/button";
import { Save, Upload, Play } from "lucide-react";
import CustomEdge from "./custom-edge";
import { handlePreCheck, hasCycle } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { selectElement } from "@/store/workflowReducer";
import nodeTypes from "@/lib/node-registry";

const WorkflowBuilder = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const dispatch = useDispatch();

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge({ ...params, type: "custom" }, eds));
    },
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      if (RM.lodash.isEmpty(type)) return;
      if (!reactFlowBounds && !reactFlowInstance) return;

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = RM.utils.createNode({
        type,
        position,
        id: RM.utils.guid(),
      });

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  const onNodeClick = useCallback((_, node) => {
    dispatch(selectElement(node));
  }, []);

  const onPaneClick = useCallback(() => {
    dispatch(selectElement(null));
  }, []);

  const onNodesDelete = useCallback(() => {
    dispatch(selectElement(null));
  }, []);

  const saveWorkflow = () => {
    // pre-checks before proceeding
    if (!handlePreCheck(nodes, edges)) return;

    const workflow = { nodes, edges };
    const workflowString = JSON.stringify(workflow);
    localStorage.setItem("workflow", workflowString);
    RM.toast.success("Workflow saved");
  };

  const loadWorkflow = () => {
    const savedWorkflow = localStorage.getItem("workflow");
    if (RM.lodash.isEmpty(savedWorkflow)) {
      RM.toast.warning("No saved workflow");
      return;
    }

    try {
      const { nodes: savedNodes, edges: savedEdges } =
        JSON.parse(savedWorkflow);
      setNodes(savedNodes);
      setEdges(savedEdges);

      RM.toast.success("Workflow loaded");
    } catch (error) {
      RM.toast.error("Error loading workflow");
    }
  };

  const isValidConnection = useCallback(
    (connection) => {
      // helpers
      const sourceNode = nodes.find((node) => node.id === connection.source);
      const targetNode = nodes.find((node) => node.id === connection.target);
      const isSelfConnection = connection.source === connection.target;
      // const isSourceConnected = edges.some((e) => e.source === connection.source);
      const isSourceConnected = edges.some(
        (e) => e.source === connection.source
      );
      const isCyclicConnection = hasCycle(targetNode, nodes, edges, connection);

      // Validation checks
      if (isSelfConnection) return false; // No self-connection
      if (isSourceConnected) return false; // source already connected (Can only have one edge originating from a source handle)
      if (isCyclicConnection) return false; // Cyclic connections  https://reactflow.dev/examples/interaction/prevent-cycles

      return true;
    },

    [nodes, edges]
  );

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          onNodesDelete={onNodesDelete}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          isValidConnection={isValidConnection}
          fitView
          snapToGrid
          snapGrid={[15, 15]}
          defaultEdgeOptions={{ type: "custom" }}
        >
          <Background />
          <Controls />
          <MiniMap />
          <Panel position="top-left">
            <div className="flex gap-2">
              <Button onClick={loadWorkflow} size="sm" variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Load
              </Button>
              <Button onClick={saveWorkflow} size="sm" variant="outline">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </Panel>
        </ReactFlow>
      </div>
    </div>
  );
};

export default WorkflowBuilder;

// const nodeTypes = nodeRegistry;

const edgeTypes = {
  custom: CustomEdge,
};
