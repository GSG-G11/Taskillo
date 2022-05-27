import { createSlice } from '@reduxjs/toolkit';

const addProjectSlice = createSlice({
    name: 'addProject',
    initialState: { value: { add: false } },
    reducers: {
        setAddProject: (state, action) => {
            state.value = action.payload;
        },
    },
});

const { setAddProject } = addProjectSlice.actions;

export default addProjectSlice.reducer;

export { addProjectSlice, setAddProject };
