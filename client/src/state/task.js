import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: { value: [] },
  reducers: {
    getTask: (state, action) => {
      state.value = action.payload;
    },
    deleteTask: (state,action) =>{
      state.value = state.value.filter(value => value.id != action.payload)
    }
  },
});

const { getTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;

export { taskSlice, getTask, deleteTask };
