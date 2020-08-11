import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const initialStateSlice = createSlice({
  name: 'initialState',
  initialState:
  {
    returnInitialID: 0 as number,
  },
  reducers: {
    setInitialStateAction(state) {
      state.returnInitialID = 0;
    },
    desetInitialStateAction(state) {
      state.returnInitialID = 1;
    },
  },
});

export const initialID = (state : State) => state.initialState.returnInitialID;
export const { setInitialStateAction, desetInitialStateAction } = initialStateSlice.actions;
export default initialStateSlice.reducer;
