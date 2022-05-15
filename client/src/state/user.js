import { createSlice } from '@reduxjs/toolkit';

const initialValue = { id: '', email: '', username: '' };
const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialValue },
  reducers: {
    loginUser: (state, action) => {
      state.value = action.payload;
    },
    logoutUser: (state) => {
      state.value = initialValue;
    },
  },
});

const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

export { userSlice, loginUser, logoutUser };
