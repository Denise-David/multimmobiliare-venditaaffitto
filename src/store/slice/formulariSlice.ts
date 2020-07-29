import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface Formulario { ID : number, Reparto : string, Risultati : Risultato[], Domande : []}
export interface Risultato {testoAnamnesi : string, valoreMin : number, valoreMax: number}

const formulariSlice = createSlice({
  name: 'allFormulari',
  initialState: {
    dataAllForm: [] as Formulario[],
  },
  reducers: {
    formulariAction(state, { payload }) {
      state.dataAllForm = payload;
    },
  },
});

export const allFormData = (state: State): Formulario[] => state.formulari.dataAllForm;
export const { formulariAction } = formulariSlice.actions;
export default formulariSlice.reducer;
