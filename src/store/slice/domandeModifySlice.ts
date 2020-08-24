import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface Domanda { ID : string, Domanda : string, Risposte : Risposta[],
  stateModify: boolean}
export interface Risposta { ID : string, risposta : string, valore : string}

const FormSlice = createSlice({
  name: 'form',
  initialState:
  {
    domandeView: [] as Domanda[],
    datiRisultati: [] as any,

  },
  reducers: {
    domande: (state, { payload }) => {
      state.domandeView = payload;
    },
    resetDomande: (state) => {
      state.domandeView = [];
    },
    setModifyClicked(state, { payload }) {
      state.domandeView[payload].stateModify = true;
    },
    risultati: (state, { payload }) => {
      state.datiRisultati = payload;
    },
    setModifyUnclicked(state, { payload }) {
      state.domandeView[payload].stateModify = false;
    },
    deleteObjectDomanda(state, { payload }) {
      delete state.domandeView[payload];
    },
    modifyDomanda(state, { payload }) {
      const { index, value } = payload;
      state.domandeView[index].Domanda = value;
    },

  },
});

export const datiRisultati = (state : State) => state.form.datiRisultati;
export const domandeView = (state: State) => state.form.domandeView;
export const {
  domande, resetDomande, risultati, setModifyClicked, deleteObjectDomanda,
  setModifyUnclicked, modifyDomanda,
} = FormSlice.actions;
export default FormSlice.reducer;
