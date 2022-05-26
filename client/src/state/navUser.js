import { createSlice } from "@reduxjs/toolkit";

const initialValue = { username: '', email: '', image: '' };
const navUserSlice = createSlice({
  name: 'navUser',
  initialState: { value: initialValue },
  reducers: {
    setNavUser: (state, action) => {
      state.value = action.payload;
    },
  }
});

const { setNavUser } = navUserSlice.actions;

export default navUserSlice.reducer;

export {
  navUserSlice,
  setNavUser,
}