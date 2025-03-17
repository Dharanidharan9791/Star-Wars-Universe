import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
    name: 'characters',
    initialState: {
        list: [],
    },
    reducers: {
        setCharacters: (state, action) => {
            state.list = action.payload;
        },
    },
});

export const { setCharacters } = characterSlice.actions;
export default characterSlice.reducer;
