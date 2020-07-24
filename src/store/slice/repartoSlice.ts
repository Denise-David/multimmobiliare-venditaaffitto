import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const repartoSlice = createSlice({
  name: 'reparto',
  initialState: {
    IDnumber: 1 as number,
  },
  reducers: {
    valueAction(state, { payload }) {
      state.IDnumber = payload;
    },
  },
});

export const { valueAction } = repartoSlice.actions;
export default repartoSlice.reducer;
export const formID = (state : State): number => state.reparto.IDnumber;
