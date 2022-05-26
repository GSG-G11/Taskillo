import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
<<<<<<< HEAD
  name: 'pageType',
  initialState: { value: '' },
  reducers: {
    setPageName: (state, action) => {
=======
  name: 'page',
  initialState: { value: true },
  reducers: {
    setPage: (state, action) => {
>>>>>>> development
      state.value = action.payload;
    },
  },
});

<<<<<<< HEAD
const { setPageName } = pageSlice.actions;

export default pageSlice.reducer;

export { pageSlice, setPageName };
=======
const { setPage } = pageSlice.actions;

export default pageSlice.reducer;

export { pageSlice, setPage };
>>>>>>> development
