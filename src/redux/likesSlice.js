import { createSlice } from '@reduxjs/toolkit';

export const likesSlice = createSlice({
  name: 'likes',
  initialState: [],
  reducers: {
    addLike: (state, action) => {
      state.push(action.payload);
    },
    removeLike: (state, action) => {
      return state.filter(track => track.id !== action.payload.id);
    },
  },
});

export const { addLike, removeLike } = likesSlice.actions;

export default likesSlice.reducer;
