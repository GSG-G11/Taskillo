import { createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'date',
  initialState: { value: '' },
  reducers: {
    setDate: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setDate } = dateSlice.actions;

export default dateSlice.reducer;

export { dateSlice, setDate };
