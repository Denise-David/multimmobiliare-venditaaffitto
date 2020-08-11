import { createSlice } from '@reduxjs/toolkit';
import { dataRisultati } from './risultatiFormularioSlice';
import { State } from '../store/store';

export interface Domanda { ID : string, Domanda : string, Risposte : Risposta[]}
export interface Risposta { ID : string, risposta : string, valore : string}

const FormSlice = createSlice({
  name: 'form',
  initialState:
  {
    dataDomande: [] as Domanda[],
    datiRisultati: [] as any,

  },
  reducers: {
    domande: (state, { payload }) => {
      state.dataDomande = payload;
    },
    resetDomande: (state) => {
      state.dataDomande = [];
    },
    risultati: (state, { payload }) => {
      state.datiRisultati = payload;
    },
  },
});

export const datiRisultati = (state : State) => state.form.datiRisultati;
export const selectData = (state: State) => state.form.dataDomande;
export const { domande, resetDomande, risultati } = FormSlice.actions;
export default FormSlice.reducer;
