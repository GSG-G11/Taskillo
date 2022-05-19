import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { value: {open: true} },
  reducers: {
    setOpen: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setOpen } = sidebarSlice.actions;

export default sidebarSlice.reducer;

export { sidebarSlice, setOpen };
