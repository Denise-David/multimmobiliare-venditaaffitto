import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const loadingSlice = createSlice({
  name: 'loading',
  initialState:
  {
    load: true,

  },
  reducers: {
    isLoadingLoaded(state) {
      state.load = !state.load;
    },
  },
});

export const loading = (state : State) => state.loading.load;
export const { isLoadingLoaded } = loadingSlice.actions;
export default loadingSlice.reducer;
