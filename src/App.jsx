// App.jsx
import { useCallback, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";
// https://infracopilot.io/
// https://infracopilot.io/

import "./index.css"
import { initialNodes } from "./staticFiles/initialNodes";
import { initialEdges } from "./staticFiles/initialEdges";


function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const addNote = () => {
    setNodes((prevNodes) =>
      prevNodes.concat({
        id: (prevNodes.length + 1).toString(),
        data: { label: `${name}`, type: `${type}` },
        type: { type },
        position: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
        style:
          type === "input"
            ? { backgroundColor: "bg-green-300" }
            : type === "output"
            ? { backgroundColor: "bg-yellow-300" }
            : type === "default"
            ? { backgroundColor: "bg-blue-300" }
            : {},
      })
    );
  };

  const onLoad = (reactflowInstance) => {
    reactflowInstance.fitView();
  };

  const onConnect = useCallback(
    (params) => setEdges((prevEdges) => addEdge(params, prevEdges)),
    [setEdges]
  );

  return (
    <div className="outer-container">
      <div className="header">Cloud Architecture Flowchart</div>

      <div className="flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onLoad={onLoad}
          snapToGrid={true}
          fitView={true}
          connectionLineStyle={{ stroke: "lightgray", strokeWidth: 2 }}
          snapGrid={[16, 16]}
        >
          <Controls />
          <MiniMap
            nodeColor={(n) => {
              if (n.data.type === "input") return "blue";
              else if (n.data.type === "default") return "yellow";
              else if (n.data.type === "output") return "yellow";
              else return "bisque";
            }}
          />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>

        <div className="input-container mx-4">
          <div>
            <label htmlFor="component-name" className="mx-1">Enter Component to Add:</label>
            <input
              type="text"
              id="component-name"
              name="title"
              placeholder="Enter Component Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            </div>

            <div>
            <label htmlFor="component-type" className="mx-1">Enter Type of Component:</label>
            <input
              type="text"
              name="nodeType"
              id="component-type"
              placeholder="input / output / default"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
            </div>

          <button
            type="button"
            onClick={addNote}
            className="bg-purple-500 hover:bg-violet-600 text-white font-mono py-2 px-4 rounded mx-1"
          >
            Add Component
          </button>

          <div className="instruction text-sm text-gray-500">
            *For deletion, press Backspace after selection.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


