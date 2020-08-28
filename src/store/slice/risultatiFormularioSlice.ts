import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface Formulario { ID : string, Reparto : string, Risultati : Risultato[], Domande : []}
export interface Risultato {
  ID: string,
  testoAnamnesi : string,
  valoreMin : number,
  valoreMax: number
}

const risultatiFormulario = createSlice({
  name: 'risultatiFormulario',
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

export const dataRisultati = (state: State) => state.risultatiFormulario.dataRis;
export const { getRisultati, resetRisultati } = risultatiFormulario.actions;
export default risultatiFormulario.reducer;
