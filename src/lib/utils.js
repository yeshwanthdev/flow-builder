import * as RM from "@root/rm";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuid } from "uuid";
import { nodeTypes } from "./constants";
import { getOutgoers } from "reactflow";

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const guid = () => {
  return uuid();
};

const createNode = ({ type, position, id }) => {
  const baseNode = {
    id,
    type,
    position,
    data: {
      label: getDefaultLabel(type),
      message: "",
    },
  };

  switch (type) {
    case "input":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
        },
      };
    default:
      return baseNode;
  }
};

const getDefaultLabel = (type) => {
  return nodeTypes.find((n) => n.type === type).label;
};

const hasCycle = (node, nodes, edges, connection, visited = new Set()) => {
  if (visited.has(node.id)) return false;

  visited.add(node.id);

  for (const outgoer of getOutgoers(node, nodes, edges)) {
    if (outgoer.id === connection.source) return true;
    if (hasCycle(outgoer, visited)) return true;
  }
};

const handlePreCheck = (nodes, edges) => {
  const connectedTargets = edges.map((edge) => edge.target);
  const unconnectedNodes = nodes
    .slice(1)
    .filter((node) => !connectedTargets.includes(node.id));

  if (RM.lodash.isEmpty(nodes)) {
    RM.toast.warning("Nothing to save");
    return false;
  }

  // show an error if there are more than one Nodes and more than one Node has empty target handles
  if (unconnectedNodes.length > 0) {
    RM.toast.warning("One or more nodes have no incoming connection.");
    return false;
  }

  return true;
};

export { cn, guid, createNode, hasCycle, handlePreCheck };
