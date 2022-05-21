import { createSlice } from '@reduxjs/toolkit';

const userProjectSlice = createSlice({
  name: 'modal',
  initialState: { value: { open: 'false' } },
  reducers: {
    setOpen: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setOpen } = userProjectSlice.actions;

export default userProjectSlice.reducer;

export { userProjectSlice, setOpen };