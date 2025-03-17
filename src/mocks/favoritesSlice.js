import { createSlice } from '@reduxjs/toolkit';

// Mock implementation of favorites slice for testing
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: []
  },
  reducers: {
    addFavorite: (state, action) => {
      state.list.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.list = state.list.filter(character => character.url !== action.payload.url);
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
