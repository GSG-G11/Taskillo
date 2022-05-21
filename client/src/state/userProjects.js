import { createSlice } from '@reduxjs/toolkit';

const userProjectSlice = createSlice({
  name: 'userProjects',
  initialState: { value: { userProjects: [] } },
  reducers: {
    setUserProjects: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setUserProjects } = userProjectSlice.actions;

export default userProjectSlice.reducer;

export { userProjectSlice, setUserProjects };