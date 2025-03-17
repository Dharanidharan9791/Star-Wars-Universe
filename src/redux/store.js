import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
    reducer: {
        characters: characterReducer,
        favorites: favoritesReducer,
    },
});

export default store;