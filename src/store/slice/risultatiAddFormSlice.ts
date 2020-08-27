import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const risultatiAddFormSlice = createSlice({
  name: 'editForm',
  initialState:
  {

    deleteActive: false as boolean | undefined,
    isDisable: false,
    risultati: {} as any,
    valueMin: 0 as number,
    valueMax: 0 as number,
    result: ''as string,
    colorButton: 'primary' as 'inherit' | 'disabled' | 'primary' | 'action' | 'secondary' | 'error' | undefined,
    stateTextFieldAddRisultato: true as boolean,
  },
  reducers: {
    modifyRisultato(state, { payload }) {
      const {
        IDRisultato, risultato, valoreMin, valoreMax,
      } = payload;
      state.risultati[IDRisultato].risultato = risultato;
      state.risultati[IDRisultato].valoreMin = valoreMin;
      state.risultati[IDRisultato].valoreMax = valoreMax;
    },
    resetRisultato(state) {
      state.result = '';
      state.valueMax = 0;
      state.valueMin = 0;
    },
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
export const valueMax = (state : State) => state.editForm.valueMax;
export const risultati = (state: State) => state.editForm.risultati;
export const valueMin = (state: State) => state.editForm.valueMin;
export const result = (state: State) => state.editForm.result;
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
  resetRisultato, modifyRisultato,
} = risultatiAddFormSlice.actions;
export default risultatiAddFormSlice.reducer;
