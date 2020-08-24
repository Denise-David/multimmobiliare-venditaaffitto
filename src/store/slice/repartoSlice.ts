import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const repartoSlice = createSlice({
  name: 'reparto',
  initialState: {
    IDnumber: '-1' as string,
    IDForm: '-1' as string,
  },
  reducers: {
    setRepartoSelected(state, { payload }) {
      state.IDnumber = payload;
    },
    setFormularioSelected(state, { payload }) {
      state.IDForm = payload;
    },
    resetIDReparto(state) {
      state.IDnumber = '-1';
    },
    resetIDForm(state) {
      state.IDForm = '-1';
    },
  },
});

export const IDForm = (state : State) => state.reparto.IDForm;
export const {
  setRepartoSelected,
  setFormularioSelected, resetIDForm, resetIDReparto,
} = repartoSlice.actions;
export default repartoSlice.reducer;
export const idRepartoSelected = (state : State): string => state.reparto.IDnumber;
