import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

/**
 * struttura rrisposta di riferimento
 */
interface rispostaUno { risposta1: string, stateText: boolean}
/**
 * struttura risposta secondaria
 */
interface rispostaDue { risposta2: string, stateText: boolean}

/**
 * struttura risposta
 */
export interface rispostaType {
  IDRisposta:string,
risposta:string,
stateText?:boolean,
stateModify:boolean,
type:string,
valore:number}

/**
 * struttura action risposte
 */
export interface actionAnsType {
 payload:string,
type:string}

/**
 * Slice per la gestione delle risposte
 */
const risposteAddFormSlice = createSlice({
  name: 'risposteAddForm',
  initialState: {
    ris1: { risposta1: 'Si', stateText: true } as rispostaUno,
    ris2: { risposta2: 'No', stateText: true } as rispostaDue,
    isBModifyRis1Clicked: false as boolean,
    isBModifyRis2Clicked: false as boolean,
    addRispostaInDomanda: { } as {[key:string]:boolean},
    answer: {} as {[index:string]:string},
    valoreRis: { } as {[index:string]:number},
    risposteOfDomandaObject: {} as {[index:string]:{[index:string]:rispostaType}},
    type: {} as {[index:string]:string},
    tableTwoAnsExpanded: true as boolean,

  },
  reducers: {
    // Gestione collasso tabella
    setExpanded(state) {
      state.tableTwoAnsExpanded = !state.tableTwoAnsExpanded;
    },
    // Gestione risposte
    resetRispostaType(state, { payload }) {
      state.type[payload] = 'normal';
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
      state.risposteOfDomandaObject[IDDomanda][IDRisposta].risposta = risposta;
      state.risposteOfDomandaObject[IDDomanda][IDRisposta].valore = valore;
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
      state.valoreRis = {};
    },
    setAnswersInDomanda(state, { payload }) {
      const stateModify = false;
      const {
        IDDomanda, IDRisposta, risposta, valore, type,
      } = payload;

      const oldRisposte = state.risposteOfDomandaObject[IDDomanda] || {};
      oldRisposte[IDRisposta] = {
        IDRisposta, risposta, valore, stateModify, type,
      };
      state.risposteOfDomandaObject[IDDomanda] = oldRisposte;
    },
    setAnswer(state, { payload }) {
      const { IDDomanda, value } = payload;
      state.answer[IDDomanda] = value;
    },
    setValore(state, { payload }) {
      const { IDDomanda, intValue } = payload;
      state.valoreRis[IDDomanda] = intValue;
    },
    getRisposta1(state, { payload }) {
      state.ris1.risposta1 = payload;
    },
    getRisposta2(state, { payload }) {
      state.ris2.risposta2 = payload;
    },
    // Gestione tipo risposta
    setRispostaTipoData(state, { payload }) {
      const { IDDomanda, IDRisposta } = payload;
      if (state.risposteOfDomandaObject[IDDomanda][IDRisposta].type === 'data') {
        state.risposteOfDomandaObject[IDDomanda][IDRisposta].type = 'normal';
      } else { state.risposteOfDomandaObject[IDDomanda][IDRisposta].type = 'data'; }
    },

    setType(state, { payload }) {
      if (state.type[payload] === 'data') {
        state.type[payload] = 'normal';
      } else {
        state.type[payload] = 'data';
      }
    },
    // Gestione bottone modifica risposta
    setModifyRispostaClicked(state, { payload }) {
      const { IDDomanda, IDRisposta } = payload;
      state.risposteOfDomandaObject[IDDomanda][IDRisposta].stateModify = true;
    },
    setModifyRispostaUnclicked(state, { payload }) {
      const { IDDomanda, IDRisposta } = payload;
      state.risposteOfDomandaObject[IDDomanda][IDRisposta].stateModify = false;
    },
    setBModifyRis1Clicked(state) {
      state.ris1.stateText = false;
      state.isBModifyRis1Clicked = true;
    },
    setBModifyRis1Unclicked(state) {
      state.ris1.stateText = true;
      state.isBModifyRis1Clicked = false;
    },
    setBModifyRis2Clicked(state) {
      state.ris2.stateText = false;
      state.isBModifyRis2Clicked = true;
    },
    setBModifyRis2Unclicked(state) {
      state.ris2.stateText = true;
      state.isBModifyRis2Clicked = false;
    },
    // Gestione bottone aggiungi risposta
    setAddRispostaClicked(state, { payload }) {
      state.addRispostaInDomanda[payload] = false;
    },
    setAddRispostaUnclicked(state, { payload }) {
      state.addRispostaInDomanda[payload] = true;
    },

  },
});

// action bottone aggiungi risposta
export const addRisposta = (payload : string):{payload:string, type:string} => ({
  type: 'ADD_RISPOSTA',
  payload,
});

export const
  tableTwoAnsExpanded = (state : State):boolean => state.risposteAddForm.tableTwoAnsExpanded;
export const
  risposteOfDomandaObject = (state : State):
{[index:string]:{[indey:string]:rispostaType}} => state.risposteAddForm.risposteOfDomandaObject;
export const answer = (state : State):{[index:string]:string} => state.risposteAddForm.answer;
export const valoreRis = (state : State):{[index:string]:number} => state.risposteAddForm.valoreRis;
export const
  stateAddedRisposta = (state : State):
  {[key:string]:boolean} => state.risposteAddForm.addRispostaInDomanda;
export const
  isBModifyRis2Clicked = (state : State):boolean => state.risposteAddForm.isBModifyRis2Clicked;
export const
  isBModifyRis1Clicked = (state : State):boolean => state.risposteAddForm.isBModifyRis1Clicked;
export const ris2 = (state : State):rispostaDue => state.risposteAddForm.ris2;
export const ris1 = (state : State) :rispostaUno => state.risposteAddForm.ris1;
export const typeAnswer = (state: State):{[index:string]:string} => state.risposteAddForm.type;
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
