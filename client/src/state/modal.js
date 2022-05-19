import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { value: { open: 'false' } },
  reducers: {
    setOpen: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setOpen } = modalSlice.actions;

export default modalSlice.reducer;

export { modalSlice, setOpen };
