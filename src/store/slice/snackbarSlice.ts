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
  },
  reducers: {
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

export const snackbarDatiPersonali = (state:State) => state.snackbar.snackbarDatiPersonali;
export const snackbarDoctor = (state: State) => state.snackbar.snackbarDoctor;
export const snackbarFamilyDoctor = (state: State) => state.snackbar.snackbarFamilyDoctor;
export const snackbarEmptyField = (state : State) => state.snackbar.snackbarEmptyField;
export const snackbarAtLeast2ResOpen = (state : State) => state.snackbar.snackbarAtLeast2ResOpen;
export const snackbarConfirmDeleteOpen = (state :State) => state.snackbar.snackbarConfirmDeleteOpen;
// eslint-disable-next-line max-len
export const snackbarPatientAnswersOpen = (state : State) => state.snackbar.snackbarPatientAnswersOpen;
export const snackbarLabelOpen = (state : State) => state.snackbar.snackbarLabelOpen;
export const {
  closeSnackbarLabelPage, openSnackbarLabelPage,
  closeSnackbarPatientAnswers, openSnackbarPatientAnswers,
  openCloseSnackbarConfirmDelete, openSnackbarAtLeast2Res,
  closeSnackbarAtLeast2Res, openSnackbarFieldEmpty, closeSnackbarFieldEmpty,
  openSnackbarFamilyDoctor, closeSnackbarFamilyDoctor,
  openSnackbarDoctor, closeSnackbarDoctor, openSnackbarDatiPersonali,
  closeSnackbarDatiPersonali,
} = snackbarSlice.actions;
export default snackbarSlice.reducer;
