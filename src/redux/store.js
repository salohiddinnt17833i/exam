
import { configureStore } from '@reduxjs/toolkit';
import likesReducer from '../redux/likesSlice'
export const store = configureStore({
  reducer: {
    likes: likesReducer,
  },
});
