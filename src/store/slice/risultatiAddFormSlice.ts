import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const risultatiAddFormSlice = createSlice({
  name: 'risultatiAddForm',
  initialState:
  {
    dataRisultati: {} as any,
    valueMin: 0 as number,
    valueMax: 0 as number,
    result: ''as string,
    buttonDisabled: true as boolean,
  },
  reducers: {
    setButtonDisabled(state) {
      state.buttonDisabled = true;
    },
    setButtonEnabled(state) {
      state.buttonDisabled = false;
    },
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
      state.dataRisultati[IDRisultato] = {
        IDRisultato, valoreMax, valoreMin, risultato,
      };
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

  },
});

export const addRisultatoClicked = () => ({
  type: 'ADD_RISULTATO',
});

export const buttonDisabled = (state: State) => state.risultatiAddForm.buttonDisabled;
export const valueMax = (state : State) => state.risultatiAddForm.valueMax;
export const dataRisultati = (state: State) => state.risultatiAddForm.dataRisultati;
export const valueMin = (state: State) => state.risultatiAddForm.valueMin;
export const result = (state: State) => state.risultatiAddForm.result;
export const stateRisultato = (state : State) => state.risultatiAddForm.dataRisultati;

export const {

  setRisultato, setValoreMax, setValoreMin,
  addRisultato,
  setBModifyClicked, setBModifyUnclicked, deleteRisultato,
  resetRisultato, modifyRisultato, resetDataRisultati,
  setRisultatiInObject, setButtonDisabled, setButtonEnabled,
} = risultatiAddFormSlice.actions;
export default risultatiAddFormSlice.reducer;
