import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface Formulario { ID : string, Reparto : string, Risultati : Risultato[], Domande : []}
export interface Risultato {
  ID: string,
  testoAnamnesi : string,
  valoreMin : number,
  valoreMax: number
}

const risFormSlice = createSlice({
  name: 'formulari',
  initialState: {
    dataRis: null as Formulario | null,
  },
  reducers: {
    getRisultati(state, { payload }) {
      state.dataRis = payload;
    },
    resetRisultati: (state) => {
      state.dataRis = null;
    },
  },

});

export const dataRisultati = (state: State) => state.risForm.dataRis;
export const { getRisultati, resetRisultati } = risFormSlice.actions;
export default risFormSlice.reducer;
