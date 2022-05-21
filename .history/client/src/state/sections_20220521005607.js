import { createSlice } from '@reduxjs/toolkit';

const sectionSlice = createSlice({
  name: 'sections',
  initialState: { value: { sections: [] } },
  reducers: {
    setSection: (state, action) => {
      state.value = action.payload;
    },
    deleteSection: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setSection } = sectionSlice.actions;

export default sectionSlice.reducer;

export { sectionSlice, setSection };
