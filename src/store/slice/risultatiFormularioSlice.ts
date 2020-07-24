import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface Formulario { ID : number, Reparto : string, Risultati : Risultato[], Domande : []}
export interface Risultato {testoAnamnesi : string, valoreMin : number, valoreMax: number}

const risFormSlice = createSlice({
  name: 'formulari',
  initialState: {
    dataForm: null as Formulario | null,
  },
  reducers: {
    formulari(state, { payload }) {
      state.dataForm = payload;
      console.log('ciao', state.dataForm);
    },
  },

});

export const formData = (state: State) => {
  console.log('yyy', state);
  return state.risForm.dataForm;
};
export const { formulari } = risFormSlice.actions;
export default risFormSlice.reducer;
