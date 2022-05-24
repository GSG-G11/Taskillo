import { createSlice } from '@reduxjs/toolkit';

const PaginationSlice = createSlice({
  name: 'pagination',
  initialState: { value: 1},
  reducers: {
    setPage: (state, action) => {
      state.value = action.payload;
    }

}});

const { setPage } = PaginationSlice.actions;

export default PaginationSlice.reducer;

export { PaginationSlice, setPage };