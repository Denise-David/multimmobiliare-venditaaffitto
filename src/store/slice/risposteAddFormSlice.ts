import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

interface rispostaUno { risposta1: string, stateText: boolean}
interface rispostaDue { risposta2: string, stateText: boolean}
interface rispostaMoreAnswers {IDRisposta: string, Risposta: string, Valore : number}
interface risposteOfQuestion {[key:string] : rispostaMoreAnswers}

const risposteAddFormSlice = createSlice({
  name: 'risposteAddForm',
  initialState: {
    risposta1: { risposta1: 'Si', stateText: true } as rispostaUno,
    isTextFieldRispostaDisabled: true as boolean,
    risposta2: { risposta2: 'No', stateText: true } as rispostaDue,
    isBModifyRis1Clicked: false as boolean,
    isBModifyRis2Clicked: false as boolean,
    isBCheckRis1Disabled: false as boolean,
    isBCheckRis2Disabled: false as boolean,
    colorBCheckRis1: 'primary' as 'primary' | 'default' |'inherit' | 'secondary' | 'default' | undefined,
    colorBCheckRis2: 'primary' as 'primary' | 'default' |'inherit' | 'secondary' | 'default' | undefined,
    risposteObject: {} as {[key:string]:rispostaMoreAnswers},
    stateAddRisposta: { } as {[key:string]:boolean},
    answer: '' as string,
    valore: -1 as number,
    risposteOfDomandaObject: {} as risposteOfQuestion,
  },
  reducers: {
    deleteRisposta(state, { payload }) {
      const { IDDomanda, IDRisposta } = payload;
      // delete state.risposteOfDomandaObject[IDDomanda][IDRisposta];
    },
    resetRisposteObject(state) {
      state.risposteObject = {};
    },
    setAnswersInDomanda(state, { payload }) {
      const { IDDomanda, risposteObj } = payload;
      state.risposteOfDomandaObject[IDDomanda] = risposteObj;
    },
    setAnswerInObject(state, { payload }) {
      const { IDRisposta } = payload;
      state.risposteObject[IDRisposta] = payload;
    },
    setAnswer(state, { payload }) {
      state.answer = payload;
    },
    setValore(state, { payload }) {
      state.valore = payload;
    },
    setAddRispostaClicked(state, { payload }) {
      state.stateAddRisposta[payload] = false;
    },
    setAddRispostaUnclicked(state, { payload }) {
      state.stateAddRisposta[payload] = true;
    },
    setBModifyRis1Clicked(state) {
      state.risposta1.stateText = false;
      state.isBModifyRis1Clicked = true;
    },
    getRisposta1(state, { payload }) {
      state.risposta1.risposta1 = payload;
    },
    setBModifyRis1Unclicked(state) {
      state.risposta1.stateText = true;
      state.isBModifyRis1Clicked = false;
    },
    getRisposta2(state, { payload }) {
      state.risposta2.risposta2 = payload;
    },
    setBModifyRis2Clicked(state) {
      state.risposta2.stateText = false;
      state.isBModifyRis2Clicked = true;
    },
    setBModifyRis2Unclicked(state) {
      state.risposta2.stateText = true;
      state.isBModifyRis2Clicked = false;
    },
    setBCheckRisposta1Disabled(state) {
      state.isBCheckRis1Disabled = true;
      state.colorBCheckRis1 = 'default';
    },
    setBCheckRisposta1Enabled(state) {
      state.isBCheckRis1Disabled = false;
      state.colorBCheckRis1 = 'primary';
    },
    setBCheckRisposta2Disabled(state) {
      state.isBCheckRis2Disabled = true;
      state.colorBCheckRis2 = 'default';
    },
    setBCheckRisposta2Enabled(state) {
      state.isBCheckRis2Disabled = false;
      state.colorBCheckRis2 = 'primary';
    },

  },
});

export const addRisposta = (payload : any) => ({
  type: 'ADD_RISPOSTA',
  payload,
});

// eslint-disable-next-line max-len
export const risposteOfDomandaObject = (state : State) => state.risposteAddForm.risposteOfDomandaObject;
export const answer = (state : State) => state.risposteAddForm.answer;
export const valore = (state : State) => state.risposteAddForm.valore;
export const stateAddedRisposta = (state : State) => state.risposteAddForm.stateAddRisposta;
export const risposteObject = (state : State) => state.risposteAddForm.risposteObject;
export const isBCheckRis2Disabled = (state : State) => state.risposteAddForm.isBCheckRis2Disabled;
export const colorBCheckRis2 = (state : State) => state.risposteAddForm.colorBCheckRis2;
export const isBCheckRis1Disabled = (state : State) => state.risposteAddForm.isBCheckRis1Disabled;
export const colorBCheckRis1 = (state : State) => state.risposteAddForm.colorBCheckRis1;
export const isBModifyRis2Clicked = (state : State) => state.risposteAddForm.isBModifyRis2Clicked;
export const isBModifyRis1Clicked = (state : State) => state.risposteAddForm.isBModifyRis1Clicked;
export const risposta2 = (state : State) => state.risposteAddForm.risposta2;
export const risposta1 = (state : State) => state.risposteAddForm.risposta1;
export const {
  setBModifyRis1Clicked, getRisposta1, getRisposta2,
  setBModifyRis2Clicked, setBModifyRis1Unclicked,
  setBModifyRis2Unclicked, setBCheckRisposta1Disabled,
  setBCheckRisposta1Enabled, setBCheckRisposta2Disabled,
  setBCheckRisposta2Enabled, setAddRispostaClicked,
  setAddRispostaUnclicked, setAnswer, setValore,
  setAnswerInObject, setAnswersInDomanda, resetRisposteObject,
} = risposteAddFormSlice.actions;
export default risposteAddFormSlice.reducer;
