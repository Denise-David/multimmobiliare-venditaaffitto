import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';
import { Domanda } from '../../component/DropDownListAnswersPatientForm/DropDownListAnswersPatientForm';

const patientFormSlice = createSlice({
  name: 'patientForm',
  initialState:
  {
    open: false as boolean,
    domandeReparto: [] as Domanda[],
    isButtonClcked: false,
    risposte: {} as any,
    cancelCode: false,
    tipoForm: '' as string,
    boolAnswers: {} as any,
    snackbarStatus: false as boolean,
    dialogClose: false as boolean,
    resDate: { } as any,
  },
  reducers: {
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
      if (state.domandeReparto[payload].normalType === false) {
        state.domandeReparto[payload].normalType = true;
      }
    },
    showPatientFormDialog(state) {
      state.open = !state.open;
    },
    getDomandeReparto(state, { payload }) {
      state.domandeReparto = payload;
    },
    buttonSendForm(state) {
      state.isButtonClcked = true;
    },
    setRisposta(state, { payload }) {
      const { idDomanda } = payload;
      state.risposte[idDomanda] = payload;
      state.risposte[idDomanda].date = state.resDate[idDomanda];
    },

    getTipoFormulario(state, { payload }) {
      state.tipoForm = payload;
    },
    getBooleanAnswers(state, { payload }) {
      state.boolAnswers = payload;
    },
    openSnackbar(state) {
      state.snackbarStatus = true;
    },
    closeSnackbar(state) {
      state.snackbarStatus = false;
    },
    closeDialogForm(state) {
      state.open = false;
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

export const resDate = (state : State) => state.patientForm.resDate;
export const dialogClose = (state : State) => state.patientForm.dialogClose;
export const snackbarStatus = (state : State) => state.patientForm.snackbarStatus;
export const boolAnswers = (state : State) => state.patientForm.boolAnswers;
export const tipoForm = (state : State) => state.patientForm.tipoForm;
export const risposte = (state : State) => state.patientForm.risposte;
export const repartoDomande = (state: State) => state.patientForm.domandeReparto;
export const isClicked = (state : State) => state.patientForm.isButtonClcked;
export const isOpen = (state:State) => state.patientForm.open;
export const cancelCode = (state: State) => state.patientForm.cancelCode;
export const {
  showPatientFormDialog, getDomandeReparto,
  buttonSendForm, setRisposta,
  getTipoFormulario, getBooleanAnswers, openSnackbar,
  closeSnackbar, closeDialogForm, resetDomandeReparto,
  resetBooleanAnswers, resetRisposte, setNormalTypePresent,
  setDate,

} = patientFormSlice.actions;
export default patientFormSlice.reducer;
