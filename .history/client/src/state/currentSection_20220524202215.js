import { createSlice } from '@reduxjs/toolkit';

const currentSlice = createSlice({
  name: 'action',
  initialState: { value: { type: 'Add' } },
  reducers: {
    setCurrentSection: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setCurrentSection } = currentSlice.actions;

export default currentSlice.reducer;

export { currentSlice, setAction };
