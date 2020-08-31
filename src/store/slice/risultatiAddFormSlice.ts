import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const risultatiAddFormSlice = createSlice({
  name: 'risultatiAddForm',
  initialState:
  {

    deleteActive: false as boolean | undefined,
    isDisable: false,
    dataRisultati: {} as any,
    valueMin: 0 as number,
    valueMax: 0 as number,
    result: ''as string,
    colorButton: 'primary' as 'inherit' | 'disabled' | 'primary' | 'action' | 'secondary' | 'error' | undefined,
    stateTextFieldAddRisultato: true as boolean,
  },
  reducers: {
    setRisultatiInObject(state, { payload }) {
      state.dataRisultati = payload;
    },
    resetDataRisultati(state) {
      state.dataRisultati = {};
    },
    modifyRisultato(state, { payload }) {
      const {
        IDRisultato, risultato, valoreMin, valoreMax,
      } = payload;
      state.dataRisultati[IDRisultato].risultato = risultato;
      state.dataRisultati[IDRisultato].valoreMin = valoreMin;
      state.dataRisultati[IDRisultato].valoreMax = valoreMax;
    },
    resetRisultato(state) {
      state.result = '';
      state.valueMax = 0;
      state.valueMin = 0;
    },
    deleteRisultato(state, { payload }) {
      delete state.dataRisultati[payload];
    },
    setBModifyClicked(state, { payload }) {
      state.dataRisultati[payload].stateModify = true;
    },
    setBModifyUnclicked(state, { payload }) {
      state.dataRisultati[payload].stateModify = false;
    },
    setBAddResultClicked(state) {
      state.stateTextFieldAddRisultato = false;
    },
    setBAddResultUnclicked(state) {
      state.stateTextFieldAddRisultato = true;
    },
    setRisultato(state, { payload }) {
      state.result = payload;
    },
    setValoreMax(state, { payload }) {
      state.valueMax = payload;
    },
    setValoreMin(state, { payload }) {
      state.valueMin = payload;
    },
    addRisultato(state, { payload }) {
      const { IDRisultato } = payload;
      state.dataRisultati[IDRisultato] = payload;
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
export const textFieldStateAddRisultato = (state : State) => state.risultatiAddForm.stateTextFieldAddRisultato;
export const valueMax = (state : State) => state.risultatiAddForm.valueMax;
export const dataRisultati = (state: State) => state.risultatiAddForm.dataRisultati;
export const valueMin = (state: State) => state.risultatiAddForm.valueMin;
export const result = (state: State) => state.risultatiAddForm.result;
export const delActive = (state : State) => state.risultatiAddForm.deleteActive;
export const isDisable = (state : State) => state.risultatiAddForm.isDisable;
export const stateRisultato = (state : State) => state.risultatiAddForm.dataRisultati;
export const colDisable = (state : State) => state.risultatiAddForm.colorButton;

export const {

  enableAll,
  alertConfirmDelete, disableAll,
  setRisultato, setValoreMax, setValoreMin,
  addRisultato, setBAddResultClicked, setBAddResultUnclicked,
  setBModifyClicked, setBModifyUnclicked, deleteRisultato,
  resetRisultato, modifyRisultato, resetDataRisultati,
  setRisultatiInObject,
} = risultatiAddFormSlice.actions;
export default risultatiAddFormSlice.reducer;
