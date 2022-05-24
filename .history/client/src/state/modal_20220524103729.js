import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
  openTask: false,
  openSection: false,
  openProject: false,
  editSection: false,
};
const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: initialValues,
  },
  reducers: {
    setTaskOpen: (state, action) => {
      state.value.openTask = action.payload;
    },
    setSectionOpen: (state, action) => {
      state.value.openSection = action.payload;
    },
    setProjectOpen: (state, action) => {
      state.value.openProject = action.payload;
    },
    setEditSectionOpen: (state, action) => {
      state.value.editSection = action.payload;
    },
  },
});

const {
  setTaskOpen,
  setSectionOpen,
  setProjectOpen,
  setEditSectionOpen,
  setMenuOpen,
} = modalSlice.actions;

export default modalSlice.reducer;

export {
  modalSlice,
  setTaskOpen,
  setSectionOpen,
  setProjectOpen,
  setMenuOpen,
  setEditSectionOpen,
};
