import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: { value: [] },
  reducers: {
    getTask: (state, action) => {
      state.value = action.payload;
    },
    deleteTask: (state,action) =>{
      state.value = state.value.filter(value => value.id !== action.payload)
    },
    updateTask:(state,action) =>{
      return state.value.map(value => {
        if (value.id === action.payload.id){
            value.name = action.payload.name;
            value.descripton = action.payload.descripton;
            value.priority = action.payload.priority;
            value.status = action.payload.status;
            value.enddate = action.payload.enddate;
        }
      })
    }
  },
});

const { getTask, deleteTask,updateTask } = taskSlice.actions;

export default taskSlice.reducer;

export { taskSlice, getTask, deleteTask,updateTask };
