import { memo } from "react";
import { Handle, Position } from "reactflow";
import { Database, Facebook } from "lucide-react";

export const FaceBookNode = memo(({ data, isConnectable }) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-blue-500 min-w-[150px]">
      <div className="flex items-center">
        <div className="rounded-full w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500">
          <Facebook className="h-4 w-4" />
        </div>
        <div className="ml-2">
          <div className="text-sm font-bold">{data.label || "Input"}</div>
          <div className="text-xs text-gray-500">
            {data.message || "Write a message"}
          </div>
        </div>
      </div>

      <div className="mt-2 text-xs bg-gray-100 p-1 rounded">Source</div>

      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-purple-500"
      />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-purple-500"
      />
    </div>
  );
});
