import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'project',
  initialState: { value: { name: '', description: '', staff: [] } },
  reducers: {
    setProject: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setProject } = projectSlice.actions;

export default projectSlice.reducer;

export { projectSlice, setProject };
