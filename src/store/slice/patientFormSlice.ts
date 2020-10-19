import { createSlice } from '@reduxjs/toolkit';
import { domandaType } from './domandeAddFormSlice';
import { State } from '../store/store';

export interface rispostaPazienteType {
  idDomanda:string,
  valore:string,
  domanda:string,
  testoRisposta:string,
  idRisposta:string,
  testoLibero:string,
  type:string,
  date:dataType[]
  }

export interface dataType {

   idRisposta:string,
   idDomanda:string,
   testoData:string,
   dataFormattata:string,
   domanda:string,

    }

const patientFormSlice = createSlice({
  name: 'patientForm',
  initialState:
  {
    domandeReparto: [] as domandaType[],
    risposte: {} as any,
    boolAnswers: {} as {risposta1:string, risposta2:string},
    resDate: {} as {[index:string]:{[index:string]:dataType}},
    intestazioneMoreAnswers: '' as string,
    gruppi: [] as {id:string, name:string}[],
    noFacoltative: [] as string[],
    domandeDimenticate: [] as boolean[],

  },
  reducers: {
    setDomandaDimenticata(state, { payload }) {
      state.domandeDimenticate = payload;
    },
    resetNoFacoltative(state) {
      state.noFacoltative = [];
    },
    setDomandaNoFacoltativa(state, { payload }) {
      if (!state.noFacoltative.includes(payload)) {
        state.noFacoltative.push(payload);
      }
    },
    setRispostaLibera(state, { payload }) {
      const { idDomanda } = payload;
      const valore : string = payload.value;
      if (state.risposte[idDomanda]) {
        state.risposte[idDomanda].testoLibero = valore;
      } else { state.risposte[idDomanda] = { testoLibero: valore }; }
    },
    setGruppi(state, { payload }) {
      state.gruppi = payload;
    },
    setIntestazioneMoreAns(state, { payload }) {
      state.intestazioneMoreAnswers = payload;
    },
    setIntestazioneTwoAns(state, { payload }) {
      state.intestazioneMoreAnswers = payload;
    },
    setDate(state, { payload }) {
      const { idRisposta, idDomanda, domanda } = payload;
      if (!state.resDate[idDomanda] && !state.risposte[idDomanda]) {
        state.resDate[idDomanda] = { [idRisposta]: payload };
        state.risposte[idDomanda] = { date: state.resDate[idDomanda] };
      }
      if (!state.risposte[idDomanda].idRisposta) {
        state.risposte[idDomanda] = { idRisposta, idDomanda, domanda };
        state.risposte[idDomanda].date = state.resDate[idDomanda];
      }
      state.resDate[idDomanda][idRisposta] = payload;
      state.risposte[idDomanda].date = state.resDate[idDomanda];
    },
    setNormalTypePresent(state, { payload }) {
      if (state.domandeReparto[payload].normalType !== true) {
        state.domandeReparto[payload].normalType = true;
      }
    },
    getDomandeReparto(state, { payload }) {
      state.domandeReparto = payload;
    },
    setRisposta(state, { payload }) {
      const {
        idDomanda, valore, domanda, testoRisposta, idRisposta,
      } = payload;
      if (state.risposte[idDomanda]) {
        if (state.risposte[idDomanda].testoLibero) {
          const { testoLibero } = state.risposte[idDomanda];
          state.risposte[idDomanda] = {
            idDomanda, valore, domanda, testoRisposta, idRisposta, testoLibero,
          };
          state.risposte[idDomanda].date = state.resDate[idDomanda];
        } else { state.risposte[idDomanda] = payload; }
        state.risposte[idDomanda].date = state.resDate[idDomanda];
      } else { state.risposte[idDomanda] = payload; }
      state.risposte[idDomanda].date = state.resDate[idDomanda];
    },
    getBooleanAnswers(state, { payload }) {
      state.boolAnswers = payload;
    },
    resetDomandeReparto(state) {
      state.domandeReparto = [];
    },
    resetRisposte(state) {
      state.risposte = {};
    },
    resetBooleanAnswers(state) {
      state.boolAnswers = { risposta1: 'Sì', risposta2: 'No' };
    },
  },
});

export const buttonSendForm = ():{type:string} => ({
  type: 'BUTTON_SEND_FORM',

});

export const domandeDimenticate = (state:State):boolean[] => state.patientForm.domandeDimenticate;
export const noFacoltative = (state: State):string[] => state.patientForm.noFacoltative;
export const groups = (state : State):{id:string, name:string}[] => state.patientForm.gruppi;
export const
  intestazioneMoreAns = (state:State):string => state.patientForm.intestazioneMoreAnswers;
export const resDate = (state : State)
:{[index:string]:{[index:string]:dataType}} => state.patientForm.resDate;
export const
  boolAnswers = (state : State):
  {risposta1:string, risposta2:string} => state.patientForm.boolAnswers;
export const risposte = (state : State) => state.patientForm.risposte;
export const repartoDomande = (state: State):domandaType[] => state.patientForm.domandeReparto;
export const {
  getDomandeReparto,
  setRisposta, getBooleanAnswers, resetDomandeReparto,
  resetBooleanAnswers, resetRisposte, setNormalTypePresent,
  setDate, setIntestazioneMoreAns, setIntestazioneTwoAns,
  setGruppi, setRispostaLibera, setDomandaNoFacoltativa,
  resetNoFacoltative, setDomandaDimenticata,

} = patientFormSlice.actions;
export default patientFormSlice.reducer;
