import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';
/**
 * struttura risultato
 */
export interface resultType {
  IDRisultato:string,
  risultato?:string,
  testoAnamnesi?:string,
  valoreMin:number,
  valoreMax:number,
  stateModify?:boolean
}

/**
 * Slice per la gestione dei risultati
 */
const risultatiAddFormSlice = createSlice({
  name: 'risultatiAddForm',
  initialState:
  {
    dataRisultati: {} as {[index:string]:resultType},
    valueMin: 0 as number,
    valueMax: 0 as number,
    result: ''as string,
    buttonDisabled: true as boolean,
  },
  reducers: {
    // Gestione bottoni
    setButtonDisabled(state) {
      state.buttonDisabled = true;
    },
    setButtonEnabled(state) {
      state.buttonDisabled = false;
    },
    setBModifyClicked(state, { payload }) {
      state.dataRisultati[payload].stateModify = true;
    },
    setBModifyUnclicked(state, { payload }) {
      state.dataRisultati[payload].stateModify = false;
    },
    // Gestioni risultati
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

// action bottone aggiungi risultato
export const addRisultatoClicked = ():{type:string} => ({
  type: 'ADD_RISULTATO',
});

export const buttonDisabled = (state: State):boolean => state.risultatiAddForm.buttonDisabled;
export const valueMax = (state : State):number => state.risultatiAddForm.valueMax;
export const
  dataRisultati = (state: State):
  {[index:string]:resultType} => state.risultatiAddForm.dataRisultati;
export const valueMin = (state: State):number => state.risultatiAddForm.valueMin;
export const result = (state: State):string => state.risultatiAddForm.result;

export const {

  setRisultato, setValoreMax, setValoreMin,
  addRisultato,
  setBModifyClicked, setBModifyUnclicked, deleteRisultato,
  resetRisultato, modifyRisultato, resetDataRisultati,
  setRisultatiInObject, setButtonDisabled, setButtonEnabled,
} = risultatiAddFormSlice.actions;
export default risultatiAddFormSlice.reducer;
