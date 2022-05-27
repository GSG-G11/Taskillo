import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: 'project',
  initialState: { value: [] },
  reducers: {
    setProjects: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setProjects } = projectSlice.actions;

export default projectSlice.reducer;

export { projectSlice, setProjects };