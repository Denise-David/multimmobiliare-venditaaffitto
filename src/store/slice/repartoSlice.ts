import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const repartoSlice = createSlice({
  name: 'reparto',
  initialState: {
    IDnumber: 0 as number,
  },
  reducers: {
    valueAction(state, { payload }) {
      state.IDnumber = payload;
    },
    resetReparto(state) {
      state.IDnumber = 0;
    },
  },
});

export const { valueAction, resetReparto } = repartoSlice.actions;
export default repartoSlice.reducer;
export const formID = (state : State): number => state.reparto.IDnumber;
