import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';
import { Domanda } from './formSlice';

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
  },
  reducers: {
    showPatientFormDialog(state) {
      state.open = !state.open;
    },
    getDomandeReparto(state, { payload }) {
      state.domandeReparto = payload;
    },
    buttonSendForm(state) {
      state.isButtonClcked = true;
    },
    getRisposta(state, { payload }) {
      const {
        idDomanda, valore, domanda, testoRisposta,
      } = payload;
      state.risposte[idDomanda] = {
        idDomanda, valore, domanda, testoRisposta,
      };
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
  buttonSendForm, getRisposta,
  getTipoFormulario, getBooleanAnswers, openSnackbar,
  closeSnackbar, closeDialogForm, resetDomandeReparto,
  resetBooleanAnswers, resetRisposte,
} = patientFormSlice.actions;
export default patientFormSlice.reducer;
