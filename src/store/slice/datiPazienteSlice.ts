import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const datiPazienteSlice = createSlice({
  name: 'datiPaziente',
  initialState:
  {
    allData: null as any | null,
  },
  reducers: {
    getAllDataEtichetta(state, { payload }) {
      state.allData = payload;
    },
  },
});

export const allDataEtichetta = (state : State) => state.datiPaziente.allData;
export const { getAllDataEtichetta } = datiPazienteSlice.actions;
export default datiPazienteSlice.reducer;
