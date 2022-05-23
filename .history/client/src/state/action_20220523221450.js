import { createSlice } from '@reduxjs/toolkit';

const actionSlice = createSlice({
  name: 'action',
  initialState: { value: { type: 'Add' }, Handle },
  reducers: {
    setAction: (state, action) => {
      state.value = action.payload;
    },
    setSubmitFunction: 
  },
});

const { setAction } = actionSlice.actions;

export default actionSlice.reducer;

export { actionSlice, setAction };
