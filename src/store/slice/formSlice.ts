import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface Domanda { ID : string, Domanda : string, Risposte : Risposta[]}
export interface Risposta { ID : string, risposta : string, valore : string}

const FormSlice = createSlice({
  name: 'form',
  initialState:
  {
    dataDomande: [] as Domanda[],

  },
  reducers: {
    domande: (state, { payload }) => {
      state.dataDomande = payload;
    },
    resetDomande: (state) => {
      state.dataDomande = [];
    },
  },
});

export const selectData = (state: State) => state.form.dataDomande;
export const { domande, resetDomande } = FormSlice.actions;
export default FormSlice.reducer;
