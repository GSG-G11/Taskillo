import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: { value: { tasks: [] } },
  reducers: {
    setTask: (state, action) => {
      state.value = action.payload;
    },
    editTask: (state, action) => {
      state.value = action.payload;
    }
  },
});

const { setTask } = taskSlice.actions;

export default taskSlice.reducer;

export { taskSlice, setTask };
