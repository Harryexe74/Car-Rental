
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../Slices/cardSlice';

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default store;