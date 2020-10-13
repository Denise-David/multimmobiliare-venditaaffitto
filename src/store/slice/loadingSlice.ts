import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false as boolean,
    isLoaded: false as boolean,
  },
  reducers: {
    setIsLoading(state) {
      state.isLoading = true;
      state.isLoaded = false;
    },
    setIsLoaded(state) {
      state.isLoading = false;
      state.isLoaded = true;
    },
  },
});

export const isLoaded = (state: State):boolean => state.loading.isLoaded;
export const isLoading = (state: State):boolean => state.loading.isLoading;
export const { setIsLoaded, setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
