import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'pageType',
  initialState: { value: '' },
  reducers: {
    setPageName: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setPageName } = pageSlice.actions;

export default pageSlice.reducer;

export { pageSlice, setPageName };
