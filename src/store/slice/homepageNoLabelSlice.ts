import { createSlice } from '@reduxjs/toolkit';
import { formularioDBType } from './addFormSlice';
import { State } from '../store/store';

// Slice gestione home autoanamnesi senza etichetta
const homepageNoLabelSlice = createSlice({
  name: 'homepageNoLabel',
  initialState: {
    formularioCercato: '' as string,
    repartoCercato: '' as string,
    listRisultati: [] as formularioDBType[],
    formSelectedIndex: -1 as number,
    formSelectedID: '' as string,
  },
  reducers: {
    // Gestione formulario / reparto cercato
    resetCercato(state) {
      state.formularioCercato = '';
      state.repartoCercato = '';
    },
    setFormCercato(state, { payload }) {
      state.formularioCercato = payload;
    },
    setRepCercato(state, { payload }) {
      state.repartoCercato = payload;
    },
    // Gestione lista risultati
    setList(state, { payload }) {
      state.listRisultati = payload;
    },
    resetList(state) {
      state.listRisultati = [];
    },
    // Gestione formulario selezionato
    setFormSelectedIndex(state, { payload }) {
      state.formSelectedIndex = payload;
    },
    setFormSelectedID(state, { payload }) {
      state.formSelectedID = payload;
    },
    resetSelectedIndex(state) {
      state.formSelectedIndex = -1;
    },
  },
});

// action apertura formulario selezionato
export const openForm = ():{type:string} => ({
  type: 'OPEN_FORM',
});

export const formSelectedIndex = (state : State):number => state.homepageNoLabel.formSelectedIndex;
export const formSelectedID = (state: State):string => state.homepageNoLabel.formSelectedID;
export const
  listRisultati = (state :State):formularioDBType[] => state.homepageNoLabel.listRisultati;
export const repartoCercato = (state : State):string => state.homepageNoLabel.repartoCercato;
export const formularioCercato = (state: State):string => state.homepageNoLabel.formularioCercato;
export const {
  setFormCercato, setRepCercato, setList, resetList,
  setFormSelectedID, setFormSelectedIndex, resetSelectedIndex, resetCercato,
} = homepageNoLabelSlice.actions;
export default homepageNoLabelSlice.reducer;
