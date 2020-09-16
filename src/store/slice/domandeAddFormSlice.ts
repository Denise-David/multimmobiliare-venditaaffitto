/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

import { State } from '../store/store';

export interface domandaAddForm {
  Tipo: string,
  IDDomanda : string,
   Domanda : string,
   stateText : boolean,
   openCard: boolean,
    Risposte? : []}

const domandeAddFormSlice = createSlice({
  name: 'domandeAddForm',
  initialState: {
    isBAddDomandaclicked: false as boolean,
    isTextFieldNewDomandaDisabled: true as boolean,
    Question: '' as string,
    domandeObject: {} as {[key:string]:domandaAddForm},
    isBCheckDisabled: false as boolean,
    isBCheckAddDomandaDisabled: true as boolean,
    expandedTableMoreAnswers: true as boolean,
    intestazioneMoreAns: '' as string,
    expandedTableQuestion: true as boolean,
    intestazioneTwoAns: '' as string,
  },
  reducers: {
    setIntestazioneMoreAns(state, { payload }) {
      state.intestazioneMoreAns = payload;
    },
    resetIntestazioneMoreAns(state) {
      state.intestazioneMoreAns = '';
    },
    setIntestazioneTwoAns(state, { payload }) {
      state.intestazioneTwoAns = payload;
    },
    resetIntestazioneTwoAns(state) {
      state.intestazioneTwoAns = '';
    },
    expandTable(state) {
      state.expandedTableMoreAnswers = !state.expandedTableMoreAnswers;
    },
    expandTableQuestion(state) {
      state.expandedTableQuestion = !state.expandedTableQuestion;
    },
    openCloseDomandaCard(state, { payload }) {
      state.domandeObject[payload].openCard = !state.domandeObject[payload].openCard;
    },
    setDomandeinObject(state, { payload }) {
      state.domandeObject = payload;
    },
    resetDomandaByIDDomanda(state, { payload }) {
      delete state.domandeObject[payload];
    },
    resetDomandeOfDomandeObject(state) {
      state.domandeObject = {};
    },
    setBAddDomandaClicked(state) {
      state.isBAddDomandaclicked = true;
      state.isTextFieldNewDomandaDisabled = false;
    },
    setBAddDomandaUnclicked(state) {
      state.isBAddDomandaclicked = false;
      state.isTextFieldNewDomandaDisabled = true;
      state.isBCheckAddDomandaDisabled = true;
    },
    setDomanda(state, { payload }) {
      state.Question = payload;
    },
    setDomandaInObjectDomandeTwoRes(state, { payload }) {
      const { IDDomanda } = payload;
      state.domandeObject[IDDomanda] = payload;
      state.domandeObject[IDDomanda].stateText = true;
      state.domandeObject[IDDomanda].Tipo = 'a due risposte';
    },
    setDomandaInObjectDomandeMoreRes(state, { payload }) {
      const { IDDomanda } = payload;
      state.domandeObject[IDDomanda] = payload;
      state.domandeObject[IDDomanda].stateText = true;
      state.domandeObject[IDDomanda].Tipo = 'a più risposte';
    },
    resetDomanda(state) {
      state.Question = '';
    },
    setBModifyDomandaClicked(state, { payload }) {
      state.domandeObject[payload].stateText = false;
    },
    setBModifyDomandaUnclicked(state, { payload }) {
      state.domandeObject[payload].stateText = true;
    },
    modifyDomandaInObjectDomande(state, { payload }) {
      const { IDDomanda, Domanda } = payload;
      state.domandeObject[IDDomanda].Domanda = Domanda;
    },
    deleteDomandaInObjectDomande(state, { payload }) {
      delete state.domandeObject[payload];
    },
    setBCheckDisabled(state) {
      state.isBCheckDisabled = true;
    },
    setBCheckEnabled(state) {
      state.isBCheckDisabled = false;
    },
    setBCheckAddDomandaDisabled(state) {
      state.isBCheckAddDomandaDisabled = true;
    },
    setBCheckAddDomandaEnabled(state) {
      state.isBCheckAddDomandaDisabled = false;
    },

  },
});

export const addDomandaInArray = () => ({
  type: 'ADD_DOMANDA_IN_ARRAY',

});
export const addDomandaMoreResInArray = () => ({
  type: 'ADD_DOMANDA_MORE_RES_IN_ARRAY',

});
export const deleteDomandaFormPiuRes = (payload:any) => ({
  type: 'DELETE_DOMANDA_FORM_PIU_RES',
  payload,
});

export const intestazioneTwoAns = (state: State) => state.domandeAddForm.intestazioneTwoAns;
export const expandedTableQuestion = (state: State) => state.domandeAddForm.expandedTableQuestion;
export const intestazioneMoreAnswers = (state: State) => state.domandeAddForm.intestazioneMoreAns;
export const expandedTableMoreAnswers = (state : State) => state.domandeAddForm.expandedTableMoreAnswers;
export const isBCheckAddDomandaDisabled = (state : State) => state.domandeAddForm.isBCheckAddDomandaDisabled;
export const isBCheckDisabled = (state : State) => state.domandeAddForm.isBCheckDisabled;
export const domandeObject = (state : State) => state.domandeAddForm.domandeObject;
export const question = (state : State) => state.domandeAddForm.Question;
export const isBAddDomandaClicked = (state : State) => state.domandeAddForm.isBAddDomandaclicked;
export const isTextFieldNewDomandaDisabled = (state : State) => state.domandeAddForm.isTextFieldNewDomandaDisabled;
export const {
  setBAddDomandaClicked, setBAddDomandaUnclicked,
  setDomanda, setDomandaInObjectDomandeTwoRes: setDomandaInObjectDomande, resetDomanda,
  setBModifyDomandaClicked, setBModifyDomandaUnclicked,
  modifyDomandaInObjectDomande, deleteDomandaInObjectDomande,
  setBCheckDisabled,
  setBCheckEnabled, setBCheckAddDomandaDisabled,
  setBCheckAddDomandaEnabled, resetDomandaByIDDomanda,
  setDomandaInObjectDomandeMoreRes,
  setDomandeinObject, expandTable, setIntestazioneTwoAns, resetIntestazioneTwoAns,
  resetDomandeOfDomandeObject, openCloseDomandaCard,
  setIntestazioneMoreAns, resetIntestazioneMoreAns, expandTableQuestion,

} = domandeAddFormSlice.actions;
export default domandeAddFormSlice.reducer;
