/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

import { State } from '../store/store';

export interface domandaType {
  Tipo: string,
  IDDomanda : string,
   Domanda : string,
   stateText : boolean,
   openCard: boolean,
    risposte? : [],
  group? : string,
facoltativa: boolean
libera:boolean}

const domandeAddFormSlice = createSlice({
  name: 'domandeAddForm',
  initialState: {
    isBAddDomandaclicked: false as boolean,
    isTextFieldNewDomandaDisabled: true as boolean,
    Question: '' as string,
    domandeObject: {} as {[key:string]:domandaType},
    isBCheckDisabled: true as boolean,
    isBCheckAddDomandaDisabled: true as boolean,
    expandedTableMoreAnswers: true as boolean,
    intestazioneMoreAns: '' as string,
    expandedTableQuestion: true as boolean,
    questionTwoAns: '' as string,

  },
  reducers: {
    setDomandaTwoAns(state, { payload }) {
      state.questionTwoAns = payload;
    },
    setDomandaLibera(state, { payload }) {
      state.domandeObject[payload].libera = !state.domandeObject[payload].libera;
    },
    setDomandaFacoltativa(state, { payload }) {
      state.domandeObject[payload].facoltativa = !state.domandeObject[payload].facoltativa;
    },
    setGroupSelected(state, { payload }) {
      const { value, IDDomanda } = payload;
      state.domandeObject[IDDomanda].group = value;
    },
    setIntestazioneMoreAns(state, { payload }) {
      state.intestazioneMoreAns = payload;
    },
    resetIntestazioneMoreAns(state) {
      state.intestazioneMoreAns = '';
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
      state.questionTwoAns = '';
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

export const addDomandaInArray = ():{type:string} => ({
  type: 'ADD_DOMANDA_IN_ARRAY',

});
export const addDomandaMoreResInArray = ():{type:string} => ({
  type: 'ADD_DOMANDA_MORE_RES_IN_ARRAY',

});
export const deleteDomandaFormPiuRes = (payload:string):{payload:string, type:string} => ({
  type: 'DELETE_DOMANDA_FORM_PIU_RES',
  payload,
});

export const questionTwoAns = (state: State):string => state.domandeAddForm.questionTwoAns;
export const expandedTableQuestion = (state: State):boolean => state.domandeAddForm.expandedTableQuestion;
export const intestazioneMoreAnswers = (state: State):string => state.domandeAddForm.intestazioneMoreAns;
export const expandedTableMoreAnswers = (state : State):boolean => state.domandeAddForm.expandedTableMoreAnswers;
export const isBCheckAddDomandaDisabled = (state : State):boolean => state.domandeAddForm.isBCheckAddDomandaDisabled;
export const isBCheckDisabled = (state : State):boolean => state.domandeAddForm.isBCheckDisabled;
export const domandeObject = (state : State):{[key:string]:domandaType} => state.domandeAddForm.domandeObject;
export const question = (state : State):string => state.domandeAddForm.Question;
export const isBAddDomandaClicked = (state : State):boolean => state.domandeAddForm.isBAddDomandaclicked;
export const isTextFieldNewDomandaDisabled = (state : State):boolean => state.domandeAddForm.isTextFieldNewDomandaDisabled;
export const {
  setBAddDomandaClicked, setBAddDomandaUnclicked,
  setDomanda, setDomandaInObjectDomandeTwoRes: setDomandaInObjectDomande, resetDomanda,
  setBModifyDomandaClicked, setBModifyDomandaUnclicked,
  modifyDomandaInObjectDomande, deleteDomandaInObjectDomande,
  setBCheckDisabled,
  setBCheckEnabled, setBCheckAddDomandaDisabled,
  setBCheckAddDomandaEnabled, resetDomandaByIDDomanda,
  setDomandaInObjectDomandeMoreRes,
  setDomandeinObject, expandTable,
  resetDomandeOfDomandeObject, openCloseDomandaCard,
  setIntestazioneMoreAns, resetIntestazioneMoreAns, expandTableQuestion,
  setGroupSelected, setDomandaFacoltativa, setDomandaLibera, setDomandaTwoAns,

} = domandeAddFormSlice.actions;
export default domandeAddFormSlice.reducer;
