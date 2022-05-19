import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: { value: [] },
  reducers: {
    getTask: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { getTask } = taskSlice.actions;

export default taskSlice.reducer;

export { taskSlice, getTask };
