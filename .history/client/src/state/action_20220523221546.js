import { createSlice } from '@reduxjs/toolkit';

const actionSlice = createSlice({
  name: 'action',
  initialState: { value: { type: 'Add' }, handleSubmit: () => {} },
  reducers: {
    setAction: (state, action) => {
      state.value = action.payload;
    },
    setSubmitFunction: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setAction, setSubmitFunction } = actionSlice.actions;

export default actionSlice.reducer;

export { actionSlice, setAction };
