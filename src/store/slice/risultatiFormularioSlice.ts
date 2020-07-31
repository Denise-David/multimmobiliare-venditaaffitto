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
    dataForm: null as Formulario | null,
  },
  reducers: {
    formulari(state, { payload }) {
      state.dataForm = payload;
    },
    resetRisultati: (state) => {
      state.dataForm = null;
    },
  },

});

export const formData = (state: State) => state.risForm.dataForm;
export const { formulari, resetRisultati } = risFormSlice.actions;
export default risFormSlice.reducer;
