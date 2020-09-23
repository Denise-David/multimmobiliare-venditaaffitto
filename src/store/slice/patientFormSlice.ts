import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';
import { Domanda } from '../../component/DropDownListAnswersPatientForm/DropDownListAnswersPatientForm';

const patientFormSlice = createSlice({
  name: 'patientForm',
  initialState:
  {
    domandeReparto: [] as Domanda[],
    risposte: {} as any,
    boolAnswers: {} as any,
    resDate: {} as any,
    intestazioneMoreAnswers: '' as string,
    gruppi: [] as any[],
    noFacoltative: [] as any[],

  },
  reducers: {
    resetNoFacoltative(state) {
      state.noFacoltative = [];
    },
    setDomandaNoFacoltativa(state, { payload }) {
      if (!state.noFacoltative.includes(payload)) {
        state.noFacoltative.push(payload);
      }
    },
    setRispostaLibera(state, { payload }) {
      const { idDomanda, value } = payload;
      if (state.risposte[idDomanda]) {
        state.risposte[idDomanda].testoLibero = value;
      } else { state.risposte[idDomanda] = { testoLibero: value }; }
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
      } else
      if (!state.resDate[idDomanda]) {
        state.resDate[idDomanda] = { [idRisposta]: payload };
      } else
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
      state.boolAnswers = {};
    },
  },
});

export const buttonSendForm = () => ({
  type: 'BUTTON_SEND_FORM',

});

export const noFacoltative = (state: State) => state.patientForm.noFacoltative;
export const groups = (state : State) => state.patientForm.gruppi;
export const intestazioneMoreAns = (state:State) => state.patientForm.intestazioneMoreAnswers;
export const resDate = (state : State) => state.patientForm.resDate;
export const boolAnswers = (state : State) => state.patientForm.boolAnswers;
export const risposte = (state : State) => state.patientForm.risposte;
export const repartoDomande = (state: State) => state.patientForm.domandeReparto;
export const {
  getDomandeReparto,
  setRisposta, getBooleanAnswers, resetDomandeReparto,
  resetBooleanAnswers, resetRisposte, setNormalTypePresent,
  setDate, setIntestazioneMoreAns, setIntestazioneTwoAns,
  setGruppi, setRispostaLibera, setDomandaNoFacoltativa, resetNoFacoltative,

} = patientFormSlice.actions;
export default patientFormSlice.reducer;
