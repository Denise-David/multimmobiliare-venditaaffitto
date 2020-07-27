import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface Domanda { ID : number, Domanda : string, Risposte : Risposta[]}
export interface Risposta { risposta : string, valore : string}

const FormSlice = createSlice({
  name: 'form',
  initialState:
  {
    dataDomande: [] as Domanda[],

  },
  reducers: {
    domande: (state, { payload }) => {
      state.dataDomande = payload;
      console.log('fff', state.dataDomande);
    },
  },
});

export const selectData = (state: State) => state.form.dataDomande;
export const { domande } = FormSlice.actions;
export default FormSlice.reducer;
