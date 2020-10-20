import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    snackbarLabelOpen: false as boolean,
    snackbarPatientAnswersOpen: false as boolean,
    snackbarConfirmDeleteOpen: false as boolean,
    snackbarAtLeast2ResOpen: false as boolean,
    snackbarEmptyField: false as boolean,
    snackbarFamilyDoctor: false as boolean,
    snackbarDoctor: false as boolean,
    snackbarDatiPersonali: false as boolean,
    snackbarEtichettaInesistente: false as boolean,
    snackbarNomeGruppo: false as boolean,
    snackbarConfirmCancel: false as boolean,
    snackbarConfirmDelForm: false as boolean,
  },
  reducers: {
    closeSnackbarConfirmDelForm(state) {
      state.snackbarConfirmDelForm = false;
    },
    openSnackbarConfirmDelForm(state) {
      state.snackbarConfirmDelForm = true;
    },
    closeSnackbarConfirmCancel(state) {
      state.snackbarConfirmCancel = false;
    },
    openSnackbarConfirmCancel(state) {
      state.snackbarConfirmCancel = true;
    },
    closeSnackbarNomeGruppo(state) {
      state.snackbarNomeGruppo = false;
    },
    openSnackbarNomeGruppo(state) {
      state.snackbarNomeGruppo = true;
    },
    closeSnackbarEtichettaInesistente(state) {
      state.snackbarEtichettaInesistente = false;
    },
    openSnackbarEtichettaInesistente(state) {
      state.snackbarEtichettaInesistente = true;
    },
    closeSnackbarDatiPersonali(state) {
      state.snackbarDatiPersonali = false;
    },
    openSnackbarDatiPersonali(state) {
      state.snackbarDatiPersonali = true;
    },
    closeSnackbarDoctor(state) {
      state.snackbarDoctor = false;
    },
    openSnackbarDoctor(state) {
      state.snackbarDoctor = true;
    },
    closeSnackbarFamilyDoctor(state) {
      state.snackbarFamilyDoctor = false;
    },
    openSnackbarFamilyDoctor(state) {
      state.snackbarFamilyDoctor = true;
    },
    closeSnackbarLabelPage(state) {
      state.snackbarLabelOpen = false;
    },
    openSnackbarLabelPage(state) {
      state.snackbarLabelOpen = true;
    },
    closeSnackbarPatientAnswers(state) {
      state.snackbarPatientAnswersOpen = false;
    },
    openSnackbarPatientAnswers(state) {
      state.snackbarPatientAnswersOpen = true;
    },
    openCloseSnackbarConfirmDelete(state) {
      state.snackbarConfirmDeleteOpen = !state.snackbarConfirmDeleteOpen;
    },
    openSnackbarAtLeast2Res(state) {
      state.snackbarAtLeast2ResOpen = true;
    },
    closeSnackbarAtLeast2Res(state) {
      state.snackbarAtLeast2ResOpen = false;
    },
    openSnackbarFieldEmpty(state) {
      state.snackbarEmptyField = true;
    },
    closeSnackbarFieldEmpty(state) {
      state.snackbarEmptyField = false;
    },
  },
});

export const
  snackbarConfirmDelForm = (state:State):boolean => state.snackbar.snackbarConfirmDelForm;
export const snackbarConfirmCancel = (state:State):boolean => state.snackbar.snackbarConfirmCancel;
export const
  snackbarEtichettaInesistente = (state : State)
  :boolean => state.snackbar.snackbarEtichettaInesistente;
export const snackbarNomeGruppo = (state :State) : boolean => state.snackbar.snackbarNomeGruppo;
export const snackbarDatiPersonali = (state:State):boolean => state.snackbar.snackbarDatiPersonali;
export const snackbarDoctor = (state: State):boolean => state.snackbar.snackbarDoctor;
export const snackbarFamilyDoctor = (state: State):boolean => state.snackbar.snackbarFamilyDoctor;
export const snackbarEmptyField = (state : State):boolean => state.snackbar.snackbarEmptyField;
export const
  snackbarAtLeast2ResOpen = (state : State):boolean => state.snackbar.snackbarAtLeast2ResOpen;
export const
  snackbarConfirmDeleteOpen = (state :State):boolean => state.snackbar.snackbarConfirmDeleteOpen;
export const
  snackbarPatientAnswersOpen = (state : State):boolean => state.snackbar.snackbarPatientAnswersOpen;
export const snackbarLabelOpen = (state : State):boolean => state.snackbar.snackbarLabelOpen;
export const {
  closeSnackbarLabelPage, openSnackbarLabelPage,
  closeSnackbarPatientAnswers, openSnackbarPatientAnswers,
  openCloseSnackbarConfirmDelete, openSnackbarAtLeast2Res,
  closeSnackbarAtLeast2Res, openSnackbarFieldEmpty, closeSnackbarFieldEmpty,
  openSnackbarFamilyDoctor, closeSnackbarFamilyDoctor,
  openSnackbarDoctor, closeSnackbarDoctor, openSnackbarDatiPersonali,
  openSnackbarEtichettaInesistente, closeSnackbarEtichettaInesistente,
  closeSnackbarDatiPersonali, closeSnackbarNomeGruppo, openSnackbarNomeGruppo,
  closeSnackbarConfirmCancel, openSnackbarConfirmCancel, openSnackbarConfirmDelForm,
  closeSnackbarConfirmDelForm,
} = snackbarSlice.actions;
export default snackbarSlice.reducer;
