import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    list: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.list.find((item) => item.url === action.payload.url)) {
        state.list.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.list = state.list.filter((item) => item.url !== action.payload.url);
    },
    updateFavorite: (state, action) => {
      const index = state.list.findIndex((item) => item.url === action.payload.url);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
});

export const { addFavorite, removeFavorite, updateFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
