import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: { value: true },
  reducers: {
    setPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setPage } = pageSlice.actions;

export default pageSlice.reducer;

export { pageSlice, setPage };
