import { createSlice } from '@reduxjs/toolkit';

const initialValue = { id: '', email: '', username: '' };
const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialValue },
  reducers: {
    setUserInfo: (state, action) => {
      state.value = action.payload;
    },
    deleteUserInfo: (state) => {
      state.value = initialValue;
    },
  },
});

const { setUserInfo, deleteUserInfo } = userSlice.actions;

export default userSlice.reducer;

export { userSlice, setUserInfo, deleteUserInfo };
