import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const repartoSlice = createSlice({
  name: 'reparto',
  initialState: {
    IDnumber: '0' as string,
    IDForm: '0' as string,
  },
  reducers: {
    setRepartoSelected(state, { payload }) {
      state.IDnumber = payload;
    },
    resetReparto(state) {
      state.IDnumber = '0';
    },
    setFormularioSelected(state, { payload }) {
      state.IDForm = payload;
    },
  },
});

export const IDForm = (state : State) => state.reparto.IDForm;
export const { setRepartoSelected, resetReparto, setFormularioSelected } = repartoSlice.actions;
export default repartoSlice.reducer;
export const idRepartoSelected = (state : State): string => state.reparto.IDnumber;
