import { createSlice } from "@reduxjs/toolkit";

const initialEditorState = {
  elements: [],
  selectedNode: {
    data: {
      completed: false,
      current: false,
      description: "",
      metadata: {},
      title: "",
      type: "Trigger",
    },
    id: "",
    position: { x: 0, y: 0 },
    type: "Trigger",
  },
  edges: [],
};

const workflowSlice = createSlice({
  name: "editor",
  initialState: {
    editor: initialEditorState,
  },
  reducers: {
    loadData(state, action) {
      state.editor.elements =
        action.payload.elements || initialEditorState.elements;
      state.editor.edges = action.payload.edges;
    },
    selectElement(state, action) {
      state.editor.selectedNode = action.payload.element;
    },
    updateNode(state, action) {
      const { id, data } = action.payload;
      const nodeIndex = state.editor.elements.findIndex((n) => n.id === id);
      if (nodeIndex !== -1) {
        state.editor.elements[nodeIndex] = {
          ...state.editor.elements[nodeIndex],
          data: {
            ...state.editor.elements[nodeIndex].data,
            ...data,
          },
        };
      }
    },
  },
});

export const { loadData, selectElement, updateNode } = workflowSlice.actions;
const workflowReducer = workflowSlice.reducer;
export default workflowReducer;
