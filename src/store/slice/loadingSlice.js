import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: true,
  reducers: {
    isLoading() {
      return true;
    },
    isLoaded() {
      return false;
    },
  },
});

export const { isLoading, isLoaded } = loadingSlice.actions;
export default loadingSlice.reducer;
