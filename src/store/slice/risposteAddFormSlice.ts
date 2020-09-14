import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

interface rispostaUno { risposta1: string, stateText: boolean}
interface rispostaDue { risposta2: string, stateText: boolean}
interface rispostaMoreAnswers {IDRisposta: string, Risposta: string, Valore : number, type: 'normal'}
interface risposteOfQuestion {[key:string] : rispostaMoreAnswers}

const risposteAddFormSlice = createSlice({
  name: 'risposteAddForm',
  initialState: {
    ris1: { risposta1: 'Si', stateText: true } as rispostaUno,
    ris2: { risposta2: 'No', stateText: true } as rispostaDue,
    isBModifyRis1Clicked: false as boolean,
    isBModifyRis2Clicked: false as boolean,
    addRispostaInDomanda: { } as {[key:string]:boolean},
    answer: {} as any,
    valore: {} as any,
    risposteOfDomandaObject: {} as any,
    type: {} as any,
    tableTwoAnsExpanded: true as boolean,

  },
  reducers: {
    setExpanded(state) {
      state.tableTwoAnsExpanded = !state.tableTwoAnsExpanded;
    },
    resetRispostaType(state, { payload }) {
      state.type[payload] = 'normal';
    },
    setRispostaTipoData(state, { payload }) {
      const { IDDomanda, IDRisposta } = payload;
      if (state.risposteOfDomandaObject[IDDomanda][IDRisposta].type === 'data') {
        state.risposteOfDomandaObject[IDDomanda][IDRisposta].type = 'normal';
      } else { state.risposteOfDomandaObject[IDDomanda][IDRisposta].type = 'data'; }
    },
    resetRisposteOfDomanda(state) {
      state.risposteOfDomandaObject = {};
    },
    resetRisposteTwoRisposte(state) {
      state.ris2.risposta2 = 'No';
      state.ris1.risposta1 = 'Si';
    },
    setRisposteOfDomandaInObject(state, { payload }) {
      state.risposteOfDomandaObject = payload;
    },
    modifyRisposta(state, { payload }) {
      const {
        IDDomanda, IDRisposta, risposta, valore,
      } = payload;
      state.risposteOfDomandaObject[IDDomanda][IDRisposta].Risposta = risposta;
      state.risposteOfDomandaObject[IDDomanda][IDRisposta].Valore = valore;
    },
    setModifyRispostaClicked(state, { payload }) {
      const { IDDomanda, IDRisposta } = payload;
      state.risposteOfDomandaObject[IDDomanda][IDRisposta].stateModify = true;
    },
    setModifyRispostaUnclicked(state, { payload }) {
      const { IDDomanda, IDRisposta } = payload;
      state.risposteOfDomandaObject[IDDomanda][IDRisposta].stateModify = false;
    },
    deleteDomandeObject(state, { payload }) {
      delete state.risposteOfDomandaObject[payload];
    },
    deleteRisposta(state, { payload }) {
      const { IDDomanda, IDRisposta } = payload;
      delete state.risposteOfDomandaObject[IDDomanda][IDRisposta];
    },
    resetAnswerValore(state) {
      state.answer = {};
      state.valore = {};
    },
    setAnswersInDomanda(state, { payload }) {
      const stateModify = false;
      const {
        IDDomanda, IDRisposta, Risposta, Valore, type,
      } = payload;

      const oldRisposte = state.risposteOfDomandaObject[IDDomanda] || {};
      oldRisposte[IDRisposta] = {
        IDRisposta, Risposta, Valore, stateModify, type,
      };
      state.risposteOfDomandaObject[IDDomanda] = oldRisposte;
    },
    setAnswer(state, { payload }) {
      const { IDDomanda, value } = payload;
      state.answer[IDDomanda] = value;
    },
    setValore(state, { payload }) {
      const { IDDomanda, intValue } = payload;
      state.valore[IDDomanda] = intValue;
    },
    setType(state, { payload }) {
      if (state.type[payload] === 'data') {
        state.type[payload] = 'normal';
      } else {
        state.type[payload] = 'data';
      }
    },
    setAddRispostaClicked(state, { payload }) {
      state.addRispostaInDomanda[payload] = false;
    },
    setAddRispostaUnclicked(state, { payload }) {
      state.addRispostaInDomanda[payload] = true;
    },
    setBModifyRis1Clicked(state) {
      state.ris1.stateText = false;
      state.isBModifyRis1Clicked = true;
    },
    getRisposta1(state, { payload }) {
      state.ris1.risposta1 = payload;
    },
    setBModifyRis1Unclicked(state) {
      state.ris1.stateText = true;
      state.isBModifyRis1Clicked = false;
    },
    getRisposta2(state, { payload }) {
      state.ris2.risposta2 = payload;
    },
    setBModifyRis2Clicked(state) {
      state.ris2.stateText = false;
      state.isBModifyRis2Clicked = true;
    },
    setBModifyRis2Unclicked(state) {
      state.ris2.stateText = true;
      state.isBModifyRis2Clicked = false;
    },

  },
});

export const addRisposta = (payload : any) => ({
  type: 'ADD_RISPOSTA',
  payload,
});

export const tableTwoAnsExpanded = (state : State) => state.risposteAddForm.tableTwoAnsExpanded;
// eslint-disable-next-line max-len
export const risposteOfDomandaObject = (state : State) => state.risposteAddForm.risposteOfDomandaObject;
export const answer = (state : State) => state.risposteAddForm.answer;
export const valore = (state : State) => state.risposteAddForm.valore;
export const stateAddedRisposta = (state : State) => state.risposteAddForm.addRispostaInDomanda;
export const isBModifyRis2Clicked = (state : State) => state.risposteAddForm.isBModifyRis2Clicked;
export const isBModifyRis1Clicked = (state : State) => state.risposteAddForm.isBModifyRis1Clicked;
export const ris2 = (state : State) => state.risposteAddForm.ris2;
export const ris1 = (state : State) => state.risposteAddForm.ris1;
export const typeAnswer = (state: State) => state.risposteAddForm.type;
export const {
  setBModifyRis1Clicked, getRisposta1, getRisposta2,
  setBModifyRis2Clicked, setBModifyRis1Unclicked,
  setBModifyRis2Unclicked, setAddRispostaClicked,
  setAddRispostaUnclicked, setAnswer, setValore,
  setAnswersInDomanda, resetAnswerValore,
  deleteRisposta, deleteDomandeObject, setModifyRispostaClicked,
  setModifyRispostaUnclicked, modifyRisposta,
  setRisposteOfDomandaInObject, resetRisposteTwoRisposte,
  resetRisposteOfDomanda, setRispostaTipoData, setType,
  resetRispostaType, setExpanded,
} = risposteAddFormSlice.actions;
export default risposteAddFormSlice.reducer;
