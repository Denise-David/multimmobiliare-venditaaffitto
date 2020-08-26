import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const risultatiAddFormSlice = createSlice({
  name: 'editForm',
  initialState:
  {

    deleteActive: false as boolean | undefined,
    isDisable: false,
    risultati: {} as any,
    valoreMin: '' as string,
    valoreMax: '' as string,
    risultato: ''as string,
    colorButton: 'primary' as 'inherit' | 'disabled' | 'primary' | 'action' | 'secondary' | 'error' | undefined,
    stateTextFieldAddRisultato: true as boolean,
  },
  reducers: {
    deleteRisultato(state, { payload }) {
      delete state.risultati[payload];
    },
    setBModifyClicked(state, { payload }) {
      state.risultati[payload].stateModify = true;
    },
    setBModifyUnclicked(state, { payload }) {
      state.risultati[payload].stateModify = false;
    },
    setBAddResultClicked(state) {
      state.stateTextFieldAddRisultato = false;
    },
    setBAddResultUnclicked(state) {
      state.stateTextFieldAddRisultato = true;
    },
    setRisultato(state, { payload }) {
      state.risultato = payload;
    },
    setValoreMax(state, { payload }) {
      state.valoreMax = payload;
    },
    setValoreMin(state, { payload }) {
      state.valoreMin = payload;
    },
    addRisultato(state, { payload }) {
      const { IDRisultato } = payload;
      state.risultati[IDRisultato] = payload;
    },
    // gestione alert
    alertConfirmDelete(state) {
      state.deleteActive = !state.deleteActive;
    },
    disableAll(state) {
      state.isDisable = true;
      state.colorButton = 'disabled';
    },
    enableAll(state) {
      state.isDisable = false;
      state.colorButton = 'primary';
    },

  },
});

export const addRisultatoClicked = () => ({
  type: 'ADD_RISULTATO',
});

// eslint-disable-next-line max-len
export const textFieldStateAddRisultato = (state : State) => state.editForm.stateTextFieldAddRisultato;
export const valoreMax = (state : State) => state.editForm.valoreMax;
export const risultati = (state: State) => state.editForm.risultati;
export const valoreMin = (state: State) => state.editForm.valoreMin;
export const result = (state: State) => state.editForm.risultato;
export const delActive = (state : State) => state.editForm.deleteActive;
export const isDisable = (state : State) => state.editForm.isDisable;
export const stateRisultato = (state : State) => state.editForm.risultati;
export const colDisable = (state : State) => state.editForm.colorButton;

export const {

  enableAll,
  alertConfirmDelete, disableAll,
  setRisultato, setValoreMax, setValoreMin,
  addRisultato, setBAddResultClicked, setBAddResultUnclicked,
  setBModifyClicked, setBModifyUnclicked, deleteRisultato,
} = risultatiAddFormSlice.actions;
export default risultatiAddFormSlice.reducer;
