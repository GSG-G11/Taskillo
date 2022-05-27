import { createSlice } from '@reduxjs/toolkit';

const projectIdSlice = createSlice({
  name: 'id',
  initialState: { value: 0 },
  reducers: {
    setProjectId: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setProjectId } = projectIdSlice.actions;

export default projectIdSlice.reducer;

export { projectIdSlice, setProjectId };
