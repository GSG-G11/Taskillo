import { createSlice } from '@reduxjs/toolkit';

const currentSlice = createSlice({
  name: 'currentSection',
  initialState: { value: {} },
  reducers: {
    setCurrentSection: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setCurrentSection } = currentSlice.actions;

export default currentSlice.reducer;

export { currentSlice, setCurrentSection };
