import { createSlice } from "@reduxjs/toolkit";

// currently not using
const initialEditorState = {
  elements: [],
  edges: [],
  selectedNode: null,
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
      state.editor.selectedNode = action.payload;
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
