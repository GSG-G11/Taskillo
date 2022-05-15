import { createSlice } from '@reduxjs/toolkit';

const initialValue = { email: '', password: '' };
const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialValue;
    },
  },
});

const { login } = userSlice.actions;

export default userSlice.reducer;

export { userSlice, login };
